import { Auth, DataStore } from "aws-amplify";
import { useEffect, useState, useMemo } from "react";
import { Table, Input, Card, Tag, Modal, Form, Button } from "antd";
import { StateCodeList } from "../../models";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
export default function States() {
  const column = useMemo(
    () => [
      {
        title: "State",
        dataIndex: "StateName",
        key: "StateName",
        sorter: (a, b) => a.StateName.localeCompare(b.StateName),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "AreaCode",
        dataIndex: "AreaCode",
        render: (tags) => (
          <span>
            {tags.map((tag) => {
              return (
                <Tag color="geekblue" key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: "Option",
        render: (_, record) => (
          <div>
            <EditTwoTone
              color="primary"
              onClick={() =>
                editRow(record.id, record.StateName, record.AreaCode)
              }
            />
            <DeleteTwoTone
              color="primary"
              onClick={() => deleteRow(record.id, record.StateName)}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState("");
  const [areacode, setAreacode] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [Id, setId] = useState("");

  const editRow = (id, StateName, AreaCode) => {
    const newString = AreaCode.join(",");
    setAreacode(newString);
    setState(StateName);
    setId(id);
    setIsEditModalOpen(true);
  };

  async function EditOk() {
    try {
      const original = await DataStore.query(StateCodeList, Id);
      const separatedArray = areacode.split(",");
      await DataStore.save(
        StateCodeList.copyOf(original, (updated) => {
          updated.StateName = state;
          updated.AreaCode = separatedArray;
        })
      );
      getTableData();
      //   notify("Edit Success");
    } catch (err) {
      //   notify("Edit Failed");
    }
    setId("");
    setState("");
    setAreacode("");
    setIsEditModalOpen(false);
  }

  async function EditCancel() {
    setId("");
    setState("");
    setIsEditModalOpen(false);
  }

  const deleteRow = (id, StateName) => {
    setId(id);
    setState(StateName);
    setDeleteModalOpen(true);
  };

  async function DeleteOk() {
    try {
      const deleteObject = await DataStore.query(StateCodeList, Id);
      DataStore.delete(deleteObject);
      getTableData();
      //   notify("Delete Seccess");
    } catch (err) {
      //   notify("Delete failed");
    }
    setId("");
    setState("");
    setDeleteModalOpen(false);
  }

  async function DeleteCancel() {
    setId("");
    setState("");
    setDeleteModalOpen(false);
  }

  async function handleOk() {
    setIsModalOpen(false);
    if (areacode && state) {
      try {
        const separatedArray = areacode.split(",");
        await DataStore.save(
          new StateCodeList({
            StateName: state,
            AreaCode: separatedArray,
          })
        );

        getTableData();
        //   notify('Add Areacode Success');
      } catch (err) {
        //   notify("Add Failed");
      }
    } else {
      //   notify('Please Enter StateName and Areacode');
    }
    setAreacode("");
    setState("");
  }

  const handleCancel = () => {
    setAreacode("");
    setIsModalOpen(false);
    setState("");
  };

  async function getTableData() {
    const models = await DataStore.query(StateCodeList);
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
        (item.State &&
          item.State.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.AreaCode &&
          item.AreaCode.toString().toLowerCase().includes(search.toLowerCase()))
    );
    setSearchData(data);
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Card title="List of State AreaCode">
      <div
        style={{ justifyContent: "end", display: "flex", marginBottom: "10px" }}
      >
        <Input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{ width: "25%", minWidth: "200px" }}
        />
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add
        </Button>
      </div>
      <div>
        <Table
          columns={column}
          dataSource={search ? searchData : tableData}
          size="middle"
          scroll={{ x: 200 }}
        />
      </div>
      <Modal
        title="Add State Areacode"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      >
        <Form>
          <Form.Item label="StateName">
            <Input
              placeholder="Please Enter StateName"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Area Code Ex :- 123,456,789">
            <Input
              placeholder="Please Enter Areacode"
              value={areacode}
              onChange={(e) => {
                setAreacode(e.target.value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Edit State Areacode"
        open={isEditModalOpen}
        onOk={EditOk}
        onCancel={EditCancel}
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      >
        <Form>
          <Form.Item label="StateName">
            <Input
              placeholder="Please Enter StateName"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Area Code Ex :- 123,456,789">
            <Input
              placeholder="Please Enter Areacode"
              value={areacode}
              onChange={(e) => {
                setAreacode(e.target.value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`Delete State Areacode ${state}`}
        open={isDeleteModalOpen}
        onOk={DeleteOk}
        onCancel={DeleteCancel}
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      ></Modal>
    </Card>
  );
}
