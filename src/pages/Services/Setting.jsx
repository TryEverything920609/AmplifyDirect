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
import { VoiceMessageList } from "../../models";
import { Modal, Form } from "antd"; 
import { toast, ToastContainer } from 'react-toastify';

export default function Setting() {

    const columes = useMemo(
        () => [
            {
                title: "Message Name",
                dataIndex: "Name",
                key: "Name",
                sorter: (a, b) => a.Name.localeCompare(b.Name),
                sortDirections: ['ascend', 'descend']
            },
            {
                title: "VoiceMessage",
                dataIndex: "VoiceMessage",
            },
            {
                title: "Option",
                render: (_, record) => <>
                    <EditOutlinedIcon color="primary" onClick={() => editRow(record.id, record.Name, record.VoiceMessage)}/>
                    <DeleteOutlinedIcon color="primary" onClick={() => deleteRow(record.id, record.Name)}/>
                </>
            }
        ], []
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

        setAreacode(AreaCode);
        setState(StateName);
        setId(id);
        setIsEditModalOpen(true);
    }

    async function EditOk(){
        try{
            const original = await DataStore.query(VoiceMessageList, Id);
            await DataStore.save(
                VoiceMessageList.copyOf(original, updated => {
                    updated.Name = state;
                    updated.VoiceMessage = areacode;
                })
            );
            getTableData();
            notify("Edit Success");
        }catch(err){
            notify("Edit Failed");
        }
        setId('');
        setState('');
        setAreacode('');
        setIsEditModalOpen(false);
    }

    async function EditCancel(){
        setId('');
        setState('');
        setIsEditModalOpen(false);
    }

    const deleteRow = (id, StateName) => {
        setId(id);
        setState(StateName);
        setDeleteModalOpen(true);   
    }

    async function DeleteOk(){
        try{
            const deleteObject = await DataStore.query(VoiceMessageList, Id);
            DataStore.delete(deleteObject);
            getTableData();
            notify("Delete Seccess");
        }catch(err){
            notify("Delete failed");
        }
        setId('');
        setState('');
        setDeleteModalOpen(false);
    }

    async function DeleteCancel(){
        setId('');
        setState('');
        setDeleteModalOpen(false);
    }

    async function handleOk(){
        setIsModalOpen(false);
        if(areacode && state){
            try{
                await DataStore.save(
                    new VoiceMessageList({
                        "Name": state,
                        "VoiceMail": areacode
                    })
                );

                getTableData();
                notify('Add Areacode Success');
            }catch(err){
                notify("Add Failed");
            }
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
        const models = await DataStore.query(VoiceMessageList);
        setTableData(models);
    }

    function handleSearch(value){
        setSearch(value);
    }

    useEffect(()=>{
     setData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search, tableData]);

    const setData = () => {
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
                        List of Default Voice Message
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
            <Modal title="Add Default Voice Messsage" open={isModalOpen} onOk={handleOk} onCancel= {handleCancel} okButtonProps={{ style: { backgroundColor: '#1677ff' }}}>
                <Form>
                    <Form.Item label = "Message Name">
                        <Input placeholder="Please Enter Message Name" value={state} onChange={(e) => setState(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label = "Voice Message">
                        <Input placeholder="Please Enter VoiceMessage" value={areacode} onChange={(e) => {setAreacode(e.target.value)}}/>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal title="Edit Default Voice Message" open={isEditModalOpen} onOk={EditOk} onCancel= {EditCancel} okButtonProps={{ style: { backgroundColor: '#1677ff' }}}>
                <Form>
                    <Form.Item label = "Message name">
                        <Input placeholder="Please Enter Message Name" value={state} onChange={(e) => setState(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label = "Voice Message">
                        <Input placeholder="Please Enter VoiceMessage" value={areacode} onChange={(e) => {setAreacode(e.target.value)}}/>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title={`Delete Default Voice Message ${state}`} open={isDeleteModalOpen} onOk={DeleteOk} onCancel= {DeleteCancel} okButtonProps={{ style: { backgroundColor: '#1677ff' }}}>
            </Modal>
            
            <ToastContainer/>
        </Card>
    );
}