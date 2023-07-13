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
import { BillingList } from '../../models';
import { toast, ToastContainer } from 'react-toastify';
 
export default function Billing() {

  const column = useMemo(
    () => [
      {
        title: "User",
        dataIndex: "User",
        key: "id",
        sorter: (a, b) => a.User.localeCompare(b.From),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Type",
        dataIndex: "Type",
        sorter: (a, b) => a.Type-b.Type,
        sortDirections: ['ascend', 'descend'],
        render: (Type) => Type === "SMS" ? <span><Tag color="red">SMS</Tag></span> : Type === "VOICEMAIL" ? <span><Tag color="cyan">VOICEMAIL</Tag></span> : Type === "CALL" ? <span><Tag color="purple">CALL</Tag></span> : <span><Tag color="purple">Deposit</Tag></span>
      },
      {
        title: "Duration",
        dataIndex: "Duration",
        sorter: (a, b) => a.Duration-b.Duration,
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Date&Time",
        dataIndex: "createdAt",
        sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Payment History",
        dataIndex: "Cost",
        sorter: (a, b) => a.Cost-b.Cost,
        sortDirections: ['ascend', 'descend'],
        render: (Cost) => Cost > 0 ? <span><Tag color="blue">{Cost}</Tag></span> : <span><Tag color="magenta">{Cost}</Tag></span> 
      },
    ]
  )

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  async function getTableData(){
    const models = await DataStore.query(BillingList);
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
              Toll Free Number
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