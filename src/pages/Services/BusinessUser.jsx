import {  MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  Input,
  CardBody
} from "@material-tailwind/react";
import { useState, useMemo, useEffect } from 'react';
import { Table, Modal, Form } from 'antd';
import { DataStore } from "aws-amplify";
import { BusinessUserList } from '../../models';
import { toast, ToastContainer } from 'react-toastify';
 
export default function BusinessUser() {

  const column = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "Name",
        key: "id",
        sorter: (a, b) => a.Name.localeCompare(b.Name),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.localeCompare(b.Email),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Contact Person Name",
        dataIndex: "ContactPersonName",
        sorter: (a, b) => a.ContactPersonName.localeCompare(b.ContactPersonName),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Contact Person Email",
        dataIndex: "ContactPersonEmail",
        sorter: (a, b) => a.ContactPersonEmail.localeCompare(b.ContactPersonEmail),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Campaign Name",
        dataIndex: "CampaignName",
        sorter: (a, b) => a.CampaignName.localeCompare(b.CampaignName),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Option",
        render: (_, record) => <>
          <BorderColorOutlinedIcon color="primary" onClick = {() => editModal(record.id)}/>
          <DeleteOutlinedIcon color="error" />
        </>
      }
    ]
  )

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [Id, setId] = useState('');

  const [showData, setShowData] = useState({
    Name: '',
    Email: '',
    ContactPersonName: '',
    ContactPersonEmail: '',
    TollFreeNumber: '',
    TrackingNumber: '',
    MonthlyFee: 0.0,
    CostPerSMS: 0.0,
    CallCostPerMinute: 0.0,
    AssignState: [],
  });

  async function getTableData(){
    const models = await DataStore.query(BusinessUserList);
    setTableData(models);
    console.log(models);
  }

  const editModal = (id) => {
    setId(id);
    setIsEditModalOpen(true);
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
              Business User List
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