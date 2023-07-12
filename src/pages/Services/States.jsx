import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useState, useMemo, useEffect } from "react";
import { Table, Tag } from 'antd';
import { DataStore } from "aws-amplify";
import { StateCodeList } from "../../models";
import { Modal, Form } from "antd"; 
import { toast, ToastContainer } from 'react-toastify';

export default function States() {

    const columes = useMemo(
        () => [
            {
                title: "State",
                dataIndex: "StateName",
                key: "StateName",
                sorter: (a, b) => a.StateName.localeCompare(b.StateName),
                sortDirections: ['ascend', 'descend']
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
                            )
                        })}
                    </span>
                )
            },
            {
                title: "Option",
                render: (_, record) => <>
                    <EditOutlinedIcon color="primary" onClick={() => editRow(record.id, record.StateName, record.AreaCode)}/>
                    <DeleteOutlinedIcon color="primary" onClick={() => deleteRow(record.id, record.StateName, record.AreaCode)}/>
                </>
            }
        ]
    );

    const [tableData, setTableData] = useState([]);
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [state, setState] = useState('');
    const [areacode, setAreacode] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [Id, setId] = useState('');

    const editRow = (id, StateName, AreaCode) => {
        console.log(id);
        const newString = AreaCode.join(', ');
        console.log(newString);
    }

    const deleteRow = (id, StateName, AreaCode) => {
        console.log(id);    
    }

    async function handleOk(){
        setIsModalOpen(false);
        if(areacode && state){
            const separatedArray = areacode.split(',');
            await DataStore.save(
                new StateCodeList({
                    "StateName": state,
                    "AreaCode": separatedArray
                })
            );

            getTableData();
            notify('Add Areacode Success');
        }
        else{
            notify('Please Enter StateName and Areacode');
        }
        setAreacode('');
        setState('');
    }

    const handleCancel = () => {
        setAreacode('');
        setIsModalOpen(false);
        setState('');
    }

    const notify = (text) => {
        toast(text);
    }

    async function getTableData(){
        const models = await DataStore.query(StateCodeList);
        setTableData(models);
    }

    function handleSearch(value){
        console.log(value, 'hello');
        setSearch(value);
    }

    useEffect(()=>{
     setData();
    },[search]);

    const setData = () => {
        console.log('Hello', search);
        const data = tableData.filter((item) => 
            Object.values(item).some((value) => value && value.toString().toLowerCase().includes(search.toLowerCase())));
        setSearchData(data);
    }

    useEffect(() => {
        getTableData();
    }, []);

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex flex-col lg:flex-row justify-between gap-8 md:items-center">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        List of State AreaCode
                    </Typography>
                </div>
                <div className="flex flex-col md:flex-row w-full shrink-0 gap-2 md:w-max text-center items-center">
                    <div className="w-full md:w-72">
                        <Input label="Search" value={search} onChange={(e) => handleSearch(e.target.value)} icon={<MagnifyingGlassIcon className="h-5 w-5" />}/>
                    </div>
                    <Button className="flex items-center gap-3 max-w-sm w-1/2" color="blue" size="sm" onClick={() => setIsModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add AreaCode
                    </Button>
                </div>
            </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <Table columns={columes} dataSource={ search ? searchData : tableData } size="middle"/>
            </CardBody>
            <Modal title="Add State Areacode" open={isModalOpen} onOk={handleOk} onCancel= {handleCancel} okButtonProps={{ style: { backgroundColor: '#1677ff' }}}>
                <Form>
                    <Form.Item label = "StateName">
                        <Input placeholder="Please Enter StateName" value={state} onChange={(e) => setState(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label = "Area Code Ex :- 123,456,789">
                        <Input placeholder="Please Enter Areacode" value={areacode} onChange={(e) => {setAreacode(e.target.value)}}/>
                    </Form.Item>
                </Form>
            </Modal>
            <ToastContainer/>
        </Card>
    );
}