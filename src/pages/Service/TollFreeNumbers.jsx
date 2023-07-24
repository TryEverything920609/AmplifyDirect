import { Auth, DataStore } from "aws-amplify";
import { useEffect, useMemo, useState } from "react";
import { Table, Switch, Space, Modal, Form, Input, Button, Card } from "antd";
import { FreeNumberList } from "../../models";
import { parsePhoneNumber } from "libphonenumber-js";
import {
  CheckOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export default function TollFreeNumbers() {
  async function UpdateNumber(id, Active) {
    try {
      const original = await DataStore.query(FreeNumberList, id);
      const update = await DataStore.save(
        FreeNumberList.copyOf(original, (updated) => {
          updated.Active = Active;
        })
      );
      getTableData();
      //   notify("Update Success");
    } catch (err) {
      //   notify("Update Failed")
    }
  }

  async function AddNumber() {
    const phonenumber = parsePhoneNumber(number);
    if (phonenumber) {
      try {
        await DataStore.save(
          new FreeNumberList({
            Number: phonenumber.number,
            Active: false,
          })
        );
        getTableData();
        // notify("Add PhoneNumber Success");
      } catch (err) {
        // notify("Add PhoneNumber Failed");
      }
    } else {
      //   notify('Please check phonenumber');
    }
  }

  //   const notify = (text) => {
  //     toast(text);
  //   }

  const columns = useMemo(
    () => [
      {
        title: "Number",
        dataIndex: "Number",
        sorter: (a, b) => a.Number - b.Number,
      },
      {
        title: "Active",
        dataIndex: "Active",
        sorter: (a, b) => a.Active - b.Active,
        render: (Active, record) => (
          <Space direction="vertical">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={Active ? true : false}
              onChange={() => {
                setId(record.id);
                setActive(!record.Active);
                setIsModalOpen1(true);
              }}
            />
          </Space>
        ),
      },
    ],
    []
  );

  const [number, setNumber] = useState("");
  const [TableData, SetTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [id, setId] = useState("");
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  async function getTableData() {
    const models = await DataStore.query(FreeNumberList);
    setLoading(false);
    SetTableData(models);
    console.log(TableData);
  }

  const handleOk2 = () => {
    setIsModalOpen2(false);
    AddNumber();
    setNumber("");
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setNumber("");
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
    UpdateNumber(id, active);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    setLoading(true);
    getTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const data = TableData.filter(
      (item) =>
        item.Number &&
        item.Number.toString().toLowerCase().includes(search.toLowerCase())
    );
    setSearchData(data);
  }, [search, TableData]);

  return (
    <>
      <Card title="Toll Free Numbers">
        <div
          style={{
            justifyContent: "end",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Input
            label="Search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            icon={<SearchOutlined />}
            style={{ width: 200 }}
          />
          <Button color="primary" onClick={() => setIsModalOpen2(true)}>
            Add Toll FreeNumber
          </Button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={search ? searchData : TableData}
            size="middle"
          />
        </div>
      </Card>
      <Modal
        title="Really Update"
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      ></Modal>
      <Modal
        title="Free Phone Number Add"
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      >
        <Form>
          <Form.Item label="Phone Number">
            <Input
              placeholder="Please Enter Free Phonenumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
