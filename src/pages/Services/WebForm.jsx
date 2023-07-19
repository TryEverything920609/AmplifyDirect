import {  MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Input,
  CardBody,
  Button
} from "@material-tailwind/react";
import { useState, useMemo, useEffect } from 'react';
import { Table, Tag, Image, Modal } from 'antd';
import { DataStore, Storage } from "aws-amplify";
import { WebFormList } from '../../models';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
 
export default function WebForm() {

  const column = useMemo(
    () => [
      {
        title: "Privilege",
        dataIndex: "Privilege",
        key: "id",
        sorter: (a, b) => a.Privilege.localeCompare(b.Privilege),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.localeCompare(b.Email),
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "User",
        dataIndex: "User",
        sorter: (a, b) => a.User-b.User,
        sortDirections: ['ascend', 'descend']
      },
      {
        title: "Logo",
        dataIndex: "Logo",
        render:  (Logo) => Logo && <image src={Logo} alt="image"/>
      },
      {
        title: "Option",
        render: (_, record) => <>
            <EditOutlinedIcon color="primary" onClick = {() => {console.log(record); setIsOpenEditModel(true); setShowData(record);}}/>
            <DeleteOutlinedIcon color="primary" onClick = {() => {setIsOpenDeleteModal(true); setShowData(record);}}/>
        </>
      }
    ], []
  );

  const [showData, setShowData] = useState(null); 
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [ isOpenEditModal, setIsOpenEditModel] = useState(false);
  const [ isOpenDeleteModal, setIsOpenDeleteModal ] = useState(false);
  const [urlData, setUrlData] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  
  const fetchImages = async () => {
    let files = [];
    try{
      files = await Storage.list('public/');
      const updatedData = [];
      for(let file of files){
        const url = await Storage.get(file.key);
        updatedData.push({ key: file.key, image: url});
      }
      setData(updatedData);
      console.log(updatedData);
    } catch (error){
      console.log('Error fetching images', error);
    }
  }

  function handleDeleteOk () {
    
  }


  async function getTableData(){
    const models = await DataStore.query(WebFormList);
    setTableData(models);
    const url = await Storage.get('A.jpg');
    setImageUrl(url);
    console.log(url);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tableData]);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              CallLog
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" value={search} onChange={(e) => handleSearch(e.target.value)} icon={<MagnifyingGlassIcon className="h-5 w-5" />}/>
            </div>
            <Button className="flex items-center gap-3 max-w-sm w-1/2" color="blue" size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add AreaCode
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <Table columns={column} dataSource={ search ? searchData : tableData } size="middle"/>
      </CardBody>
    </Card>
  );
}