import { Auth } from "aws-amplify";
import { useEffect, useMemo, useState } from "react";
import { DataStore } from "aws-amplify";
import { UserProfileList, UserTypeList } from "../../models";
import { Table, Tag, Card, Input, Select, Modal, Form, message } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
export default function UserRole() {
  const column = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "Name",
        key: "id",
        sorter: (a, b) => a.Name.localeCompare(b.Name),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.localeCompare(b.Email),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Role",
        dataIndex: "Role",
        sorter: (a, b) => a.Role.localeCompare(b.Role),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "PhoneNumber",
        dataIndex: "PhoneNumber",
        sorter: (a, b) => a.PhoneNumber.localeCompare(b.PhoneNumber),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Option",
        render: (_, record) => (
          <div>
            <EditTwoTone
              color="primary"
              onClick={() =>
                editRow(
                  record.id,
                  record.Name,
                  record.Email,
                  record.Role,
                  record.PhoneNumber
                )
              }
            />
            <DeleteTwoTone
              color="primary"
              onClick={() => deleteRow(record.id, record.Name)}
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
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  async function getTableData() {
    const models = await DataStore.query(UserProfileList);
    setTableData(models);
    console.log(models);
  }

  const editRow = (id, Name, Email, Role, PhoneNumber) => {
    setId(id);
    setName(Name);
    setEmail(Email);
    setRole(Role);
    setPhone(PhoneNumber);

    setEditModal(true);
  };

  const deleteRow = (id, Name) => {
    setId(id);
    setName(Name);
    setDeleteModal(true);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const editRole = async () => {
    try {
      console.log(role, "role");
      const original = await DataStore.query(UserProfileList, id);
      await DataStore.save(
        UserProfileList.copyOf(original, (updated) => {
          updated.Role =
            role === "SUPERVISOR"
              ? UserTypeList.SUPERVISOR
              : role === "ADMIN"
              ? UserTypeList.ADMIN
              : UserTypeList.USER;
        })
      );
      getTableData();
      message.success("Role Updated Successfully");
    } catch (err) {
      message.error(err.message);
    }

    setId("");
    setEmail("");
    setPhone("");
    setName("");
    setEditModal(false);
  };

  const editCancel = () => {
    setId("");
    setEmail("");
    setPhone("");
    setName("");
    setEditModal(false);
  };

  const deleteRole = async () => {
    try {
      const deleteObject = await DataStore.query(UserProfileList, id);
      DataStore.delete(deleteObject);
      getTableData();
      message.success("User Deleted Successfully");
    } catch (err) {
      message.error(err.message);
    }

    setId("");
    setName("");
    setDeleteModal(false);
  };

  const deleteCancel = () => {
    setId("");
    setName("");
    setDeleteModal(false);
  };

  useEffect(() => {
    getTableData();
  }, []);

  const setData = () => {
    const data = tableData.filter(
      (item) =>
        (item.Name &&
          item.Name.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.Email &&
          item.Email.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.Role &&
          item.Role.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.PhoneNumber &&
          item.PhoneNumber.toString()
            .toLowerCase()
            .includes(search.toLowerCase()))
    );
    setSearchData(data);
  };

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tableData]);

  return (
    <>
      <Card title="User Role Management" bordered={false}>
        <div
          style={{
            justifyContent: "end",
            display: "flex",
            marginBottom: "10px",
          }}
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
      </Card>

      <Modal
        title="Edit User Role"
        visible={editModal}
        onOk={() => editRole()}
        onCancel={() => editCancel()}
      >
        <Form>
          <Form.Item label="Name">
            <Input value={name} onChange={(e) => setName(e.target)} />
          </Form.Item>
          <Form.Item label="Email">
            <Input value={email} disabled />
          </Form.Item>
          <Form.Item label="Role">
            <Select
              defaultValue={role}
              onChange={(value) => {
                setRole(value);
                console.log(value);
                console.log(role);
              }}
              options={[
                {
                  value: "SUPERVISOR",
                  label: "SUPERVISOR",
                },
                {
                  value: "ADMIN",
                  label: "ADMIN",
                },
                {
                  value: "USER",
                  label: "USER",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target)}
              disabled
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={deleteModal}
        title={`User Delete ${name}`}
        onOk={() => deleteRole()}
        onCancel={() => deleteCancel()}
      ></Modal>
    </>
  );
}
