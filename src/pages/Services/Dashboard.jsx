import { StatisticsChart } from './../../components/charts/statistics-chart';
import { statisticsChartsData } from '../../config/statisticsChartData'; 
import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import VoicemailOutlinedIcon from '@mui/icons-material/VoicemailOutlined';
import { ClockIcon } from "@heroicons/react/24/outline";
import { MaterialReactTable } from 'material-react-table';
import { Button } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import { DataStore } from 'aws-amplify';
import { ServiceList } from '../../models';
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { ContentCopy } from '@mui/icons-material';
 

function Dashboard () {

    const columns = useMemo(
        () => [
            {
                accessorKey: "From",
                header: "From",
                sortDescFirst: false,
                enableClickToCopy: true,
                muiTableBodyCellCopyButtonProps: {
                    fullwidth: "true",
                    startIcon: <ContentCopy/>,
                    sx: { justifyContent: 'flex-start'}
                }
            },
            {
                accessorKey: "To",
                header: "To",
                sortDescFirst: false,
                enableClickToCopy: true,
                muiTableBodyCellCopyButtonProps: {
                    fullwidth: "true",
                    startIcon: <ContentCopy/>,
                    sx: { justifyContent: 'flex-start'}
                },
            },
            {
                accessorKey: "Username",
                header: "Username",
                sortDescFirst: false,
                enableClickToCopy: true,
                muiTableBodyCellCopyButtonProps: {
                    fullwidth: "true",
                    startIcon: <ContentCopy/>,
                    sx: { justifyContent: 'flex-start'}
                }
            },
            {
                accessorKey: "Cost",
                header: "Cost",
                sortDescFirst: false,
            },
            {
                accessorKey: "Type",
                header: "Type",
                sortDescFirst: false,
            },
            {
                accessorKey: "createdAt",
                header: "Date&Time",
                sortDescFirst: false
            },
            {
                accessorKey: "Status",
                header: "Status",
                sortDescFirst: false
            },
        ],
        [],
    );
    
    const [TableData, SetTableData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getTableData(){
        const models = await DataStore.query(ServiceList);
        setLoading(false);
        SetTableData(models);
        console.log(TableData);
    }
     
    useEffect(() => {
        setLoading(true);
        getTableData();
    }, []);

    return (
        <div className="mt-12">
            <div className = "mb-8 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 ">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <PermPhoneMsgSharpIcon/>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Call</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+55%</strong>
                            &nbsp; than last week
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <PermPhoneMsgOutlinedIcon/>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's SMS</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+3%</strong>
                            &nbsp; than last month
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <VoicemailOutlinedIcon/>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's VoiceMail</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-red-800">-2%</strong>
                            &nbsp; than last month
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">

                        <PersonAddAlt1OutlinedIcon/>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Client</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+5%</strong>
                            &nbsp; than last week
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>
                {statisticsChartsData.map((props) => (
                    <StatisticsChart
                    key={props.title}
                    {...props}
                    footer={
                        <Typography
                        variant="small"
                        className="flex items-center font-normal text-blue-gray-600"
                        >
                        <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                        &nbsp;{props.footer}
                        </Typography>
                    }
                    />
                ))}
            </div>
            <div>
                <Card className="h-full w-full">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col lg:flex-row justify-between gap-8 md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                List of Calls Messages And Voice Mails
                            </Typography>
                        </div>
                    </div>
                    </CardHeader>
                    <CardBody className="overflow-scroll px-0">
                        <MaterialReactTable
                            columns={columns}
                            data={TableData ?? []}
                            isMultiSortEvent={() => true}
                            maxMultiSortColCount={3}
                            enableRowNumbers
                            renderTopToolbarCustomActions={({ table }) => (
                                <Button onClick={() => table.resetSorting(true)}>
                                    Clear All Sorting
                                </Button>
                            )}
                            state={{ isLoading: loading }}
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;