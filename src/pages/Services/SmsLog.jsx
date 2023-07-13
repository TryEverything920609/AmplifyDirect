import {  MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  Input,
  CardBody
} from "@material-tailwind/react";
import { useState, useMemo, useEffect } from 'react';
import { Table, Tag } from 'antd';
import { DataStore } from "aws-amplify";
import { SMSlogList } from '../../models';
import { toast, ToastContainer } from 'react-toastify';
 
export default function SmsLog() {

  const column = useMemo(
    () => [
      {
        title: "From",
        dataIndex: "From",
        key: "id",
        sorter: (a, b) => a.From.localeCompare(b.From),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "To",
        dataIndex: "To",
        sorter: (a, b) => a.To.localeCompare(b.To),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "UserName",
        dataIndex: "UserName",
        sorter: (a, b) => a.UserName.localeCompare(b.UserName),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Message",
        dataIndex: "Message",
        sorter: (a, b) => a.Message.localeCompare(b.Message),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Cost",
        dataIndex: "Cost",
        sorter: (a, b) => a.Cost.localeCompare(b.Cost),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Date&Time",
        dataIndex: "createdAt",
        sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Status",
        dataIndex: "Status",
        sorter: (a, b) => a.Status.localeCompare(b.Status),
        sortDirections: ['ascend', 'descend'],
        render: (Status) => <span>
          <Tag color="geekblue">
            {Status}
          </Tag>
        </span>
      }
    ]
  )

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  async function getTableData(){
    const models = await DataStore.query(SMSlogList);
    setTableData(models);
    console.log(models);
  }

  const handleSearch = (value) => {
    setSearch(value);
  }

  useEffect(() => {
    getTableData();
  }, []);

  const setData = () => {
    const data = tableData.filter((item) => 
        Object.values(item).some((value) => value && value.toString().toLowerCase().includes(search.toLowerCase())));
    setSearchData(data);
  }

  useEffect(() => {
    setData();
  }, [search, tableData]);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              SMSLog
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" value={search} onChange={(e) => handleSearch(e.target.value)} icon={<MagnifyingGlassIcon className="h-5 w-5" />}/>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <Table columns={column} dataSource={ search ? searchData : tableData } size="middle"/>
      </CardBody>
      <ToastContainer/>
    </Card>
  );
}