import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Input
} from "@material-tailwind/react";
import { CheckOutlined, CloseOutlined } from "@mui/icons-material";
import { useMemo, useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Table, Switch, Space, Modal, Form } from "antd";
import { FreeNumberList } from "../../models";
import { parsePhoneNumber } from 'libphonenumber-js';
import { toast, ToastContainer } from 'react-toastify';


export default function TollFreeNumber() {

  async function UpdateNumber(id, Active){
    try{
      const original = await DataStore.query(FreeNumberList, id);
      const update = await DataStore.save(
        FreeNumberList.copyOf(original, updated => {
          updated.Active = Active;
        })
      );
      getTableData();
      notify("Update Success");
    }catch(err){
      notify("Update Failed")
    }
  }

  async function AddNumber(){
    const phonenumber = parsePhoneNumber(number);
    if(phonenumber){
      try{
        await DataStore.save(
          new FreeNumberList({
            "Number" : phonenumber.number,
            "Active": false
          })
        );
        getTableData();
        notify("Add PhoneNumber Success");
      }catch(err){
        notify("Add PhoneNumber Failed");
      }
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
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

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

  const handleSearch = (value) => {
    setSearch(value);
  }

  useEffect(() => {
    setLoading(true);
    getTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const data = TableData.filter((item) => 
      Object.values(item).some((value) => value && value.toString().toLowerCase().includes(search.toLowerCase()))
    );
    setSearchData(data);
  }, [search, TableData]);
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
            <div className="flex flex-col md:flex-row w-full shrink-0 gap-2 md:w-max text-center items-center">
                    <div className="w-full md:w-72">
                        <Input label="Search" value={search} onChange={(e) => handleSearch(e.target.value)} icon={<MagnifyingGlassIcon className="h-5 w-5" />}/>
                    </div>
                    <Button className="flex items-center gap-3 max-w-sm w-1/2" color="blue" size="sm" onClick={() => setIsModalOpen2(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add AreaCode
                    </Button>
                </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <Table
            columns={columns} dataSource={search ? searchData : TableData} size="middle"
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