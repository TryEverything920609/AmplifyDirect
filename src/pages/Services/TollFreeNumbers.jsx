import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { CheckOutlined, CloseOutlined } from "@mui/icons-material";
import { useMemo, useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Table, Switch, Space, Modal, Form, Input } from "antd";
import { FreeNumberList } from "../../models";
import { parsePhoneNumber } from 'libphonenumber-js';
import { toast, ToastContainer } from 'react-toastify';


export default function TollFreeNumber() {

  async function UpdateNumber(id, Active){
    console.log(id, Active, 'hel');
    const original = await DataStore.query(FreeNumberList, id);
    const update = await DataStore.save(
      FreeNumberList.copyOf(original, updated => {
        updated.Active = Active;
      })
    );
    getTableData();
  }

  async function AddNumber(){
    const phonenumber = parsePhoneNumber(number);
    if(phonenumber){
      await DataStore.save(
        new FreeNumberList({
          "Number" : phonenumber.number,
          "Active": false
        })
      );
      getTableData();
    }else{
      notify('Please check phonenumber');
    }
  }

  const notify = (text) => {
    toast(text);
  }

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
        render: (Active, record) => <Space direction="vertical">
          <Switch checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>} checked={Active ? true : false} onChange={() => { setId(record.id); setActive(!record.Active); setIsModalOpen1(true);}} />
        </Space>,
      },
    ],
    [],
  );

  const [number, setNumber] = useState('');
  const [TableData, SetTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [id, setId] = useState('');
  const [active, setActive] = useState(false);

  async function getTableData(){
    const models = await DataStore.query(FreeNumberList);
    setLoading(false);
    SetTableData(models);
    console.log(TableData);
  }

  const handleOk2 = () => {
    setIsModalOpen2(false);
    AddNumber();
    setNumber('');
  }

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setNumber('');
  }

  const handleOk1 = () => {
    setIsModalOpen1(false);
    UpdateNumber(id, active);
  }

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  useEffect(() => {
    setLoading(true);
    getTableData();
  }, []);


  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Toll Free Number
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <Button className="flex items-center gap-3" onClick={() => setIsModalOpen2(true)} color="blue" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Add Number
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <Table
            columns={columns} dataSource={TableData} size="middle"
          />
        </CardBody>
      </Card>
      <Modal title="Really Update" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1} okButtonProps={{ style: { backgroundColor: '#1677ff' }}}>
      </Modal>
      <Modal title="Free Phone Number Add" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} okButtonProps={{ style: { backgroundColor: '#1677ff' }}}>
        <Form>
          <Form.Item label = "Phone Number">
            <Input placeholder="Please Enter Free Phonenumber" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </Form.Item>
        </Form>
      </Modal>
      <ToastContainer/>
    </>
  );
}