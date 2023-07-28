import { useEffect, useState, useMemo } from "react";
import { DataStore } from "aws-amplify";
import { Table, Input, Card, Modal, Button, Select, message } from "antd";
import {
  RoleManageList,
  PermissionList,
  PermissionListRoleManageList,
} from "../../models";
import { EditTwoTone } from "@ant-design/icons";
const { Option } = Select;
export default function Permission() {
  const column = useMemo(
    () => [
      {
        title: "Role",
        dataIndex: "RoleName",
        key: "RoleName",
        sorter: (a, b) => a.RoleName.localeCompare(b.RoleName),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Option",
        render: (_, record) => (
          <div>
            <EditTwoTone
              color="primary"
              onClick={() => editRow(record.id, record.RoleName)}
            />
          </div>
        ),
      },
    ],
    []
  );

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [update, setUpdate] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [Id, setId] = useState();
  const [roleName, setRoleName] = useState("");
  const [permission, setPermission] = useState([]);
  const [updatePermission, setUpdatePermission] = useState([]);
  const [updatePermissionList, setUpdatePermissionList] = useState([]);

  const editRow = async (id, RoleName) => {
    setId(id);
    setRoleName(RoleName);
    const role = await DataStore.query(RoleManageList, (c) =>
      c.RoleName.eq(RoleName)
    );
    const table = await DataStore.query(PermissionListRoleManageList, (c) =>
      c.roleManageListId.eq(role[0].id)
    );
    console.log(table, "Hello, Plese");
    setUpdatePermissionList(table);
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    const fetchData = () => {
      setUpdatePermission([]);
      updatePermissionList.map(async (item) => {
        const permission = await DataStore.query(
          PermissionList,
          item.permissionListId
        );
        setUpdatePermission((prev) => [...prev, permission]);
      });
    };
    fetchData();
  }, [updatePermissionList]);

  async function EditOk() {
    // const fetchData = () => {
    //   setUpdate([]);
    //   console.log("Update Permission =>>>>>>>", updatePermission);
    //   updatePermission.map(async (item) => {
    //     const result = await DataStore.query(
    //       PermissionListRoleManageList,
    //       (c) => c.permissionListId.eq(item.id)
    //     );
    //     setUpdate((prev) => [...prev, result]);
    //   });
    // };
    // fetchData();
    // try {
    //   console.log(update, "perlist");

    //   const original = await DataStore.query(RoleManageList, (c) =>
    //     c.RoleName.eq(roleName)
    //   );
    //   await DataStore.save(
    //     RoleManageList.copyOf(original[0], (updated) => {
    //       updated.Permission = update;
    //     })
    //   );
    //   message.success(`${roleName}'s Permission Updated Success`);
    //   getTableData();
    // } catch (err) {
    //   message.error(`${roleName}'s Permission Updated Failed`);
    // }roleManageListId
    setUpdate([]);
    const fetchData = () => {
      updatePermission.map(async (item) => {
        const result = await DataStore.query(
          PermissionListRoleManageList,
          (c) =>
            c.and((c) => [
              c.roleManageListId.eq(Id),
              // c.permissionListId.eq(item.id),
            ])
        );

        setUpdate((prev) => [...prev, result[0]]);
      });
    };
    fetchData();
    console.log(update, "perlist=>>>>>>>>");
    // console.log(updatePermissionList, "PermissionList =>>>>>>>");
    const data = await DataStore.query(PermissionListRoleManageList);
    // console.log(data, "data =>>>>>>>>>>>>");
    setUpdatePermission([]);
    setIsEditModalOpen(false);
    setUpdatePermissionList([]);
  }

  async function EditCancel() {
    setIsEditModalOpen(false);
  }

  async function getTableData() {
    const models = await DataStore.query(RoleManageList);
    const permission = await DataStore.query(PermissionList);
    setPermission(permission);
    setTableData(models);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tableData]);

  const setData = () => {
    const data = tableData.filter(
      (item) =>
        item.RoleName &&
        item.RoleName.toString().toLowerCase().includes(search.toLowerCase())
    );
    setSearchData(data);
  };

  const handleChange = (value) => {
    setUpdatePermission(
      permission.filter((permission) => value.includes(permission.label))
    );
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Card title="Permission Management ">
      <div
        style={{ justifyContent: "end", display: "flex", marginBottom: "10px" }}
      >
        <Input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{ width: "25%", minWidth: "200px" }}
        />
      </div>
      <div className="table-responsive">
        <Table
          columns={column}
          dataSource={search ? searchData : tableData}
          size="middle"
          className="ant-border-space"
        />
      </div>
      <Modal
        title={`Edit ${roleName} Permission`}
        open={isEditModalOpen}
        onOk={EditOk}
        onCancel={EditCancel}
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      >
        <Select
          onChange={handleChange}
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="select permission"
          optionLabelProp="label"
          value={updatePermission.map((permission) => {
            return permission.label;
          })}
        >
          {permission.map((permission, index) => (
            <Option key={index} value={permission.label}>
              {permission.label}
            </Option>
          ))}
        </Select>
      </Modal>
    </Card>
  );
}
