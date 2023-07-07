import { StatisticsChart } from './../../components/charts/statistics-chart';
import { statisticsChartsData } from '../../config/statisticsChartData'; 
import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import VoicemailOutlinedIcon from '@mui/icons-material/VoicemailOutlined';
import { ArrowDownTrayIcon, MagnifyingGlassIcon, ArrowRightIcon, ArrowLeftIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';

import {
  Card,
  CardHeader,
  Typography,
  Button,
  ButtonGroup,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["From", "To", "User", "Cost", "Type", "Date&Time", ""];

const TABLE_ROWS = [
  {
    From: "+12094145671",
    To: "+18444365125",
    User: "Rob",
    Cost: "3",
    Type: "Voicemail",
    DataTime:"2022-11-22 06:49:33"
  },
  {
    From: "+12509622767",
    To: "+18444365125",
    User: "Robis",
    Cost: "3",
    Type: "SMS",
    DataTime:"2022-11-22 06:49:33"
  },
  {
    From: "+12094145671",
    To: "+18444365125",
    User: "Rob",
    Cost: "3",
    Type: "Call",
    DataTime:"2022-11-22 06:49:33"
  },
  {
    From: "+12094145671",
    To: "+18444365125",
    User: "Rob",
    Cost: "3",
    Type: "Call",
    DataTime:"2022-11-22 06:49:33"
  },
  {
    From: "+12094145671",
    To: "+18444365125",
    User: "Rob",
    Cost: "3",
    Type: "Voicemail",
    DataTime:"2022-11-22 06:49:33"
  },
];

function Dashboard () {
    const [active, setActive] = useState(1);
    const next = () => {
        if (active === 10) return;
     
        setActive(active + 1);
      };
     
      const prev = () => {
        if (active === 1) return;
     
        setActive(active - 1);
      };
     
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
                        <div className="flex flex-col md:flex-row w-full shrink-0 gap-2 md:w-max text-center items-center">
                            <div className="w-full md:w-72">
                                <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                            </div>
                            <Button className="flex items-center gap-3 max-w-sm w-1/2" color="blue" size="sm">
                                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                            </Button>
                        </div>
                    </div>
                    </CardHeader>
                    <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                                >
                                {head}
                                </Typography>
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {TABLE_ROWS.map(
                            ({ From, To, User, Cost, Type, DataTime }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                            return (
                                <tr key={From}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                        
                                        <Typography variant="small" color="blue-gray" className="font-bold">
                                            {From}
                                        </Typography>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {To}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {User}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {Cost}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="w-max">
                                        <Chip
                                            size="sm"
                                            variant="ghost"
                                            value={Type}
                                            color={
                                            Type === "Voicemail" ? "green" : Type === "SMS" ? "amber" : "red"
                                            }
                                        />
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {DataTime}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                            },
                        )}
                        </tbody>
                    </table>
                    </CardBody>
                    <CardFooter className="hidden lg:flex items-center justify-between border-t border-blue-gray-50 p-4 ">
                        <Button variant="outlined" color="blue-gray" size="sm">
                            Previous
                        </Button>
                        <div className="flex items-center gap-2">
                            <IconButton variant="outlined" color="blue-gray" size="sm">
                            1
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" size="sm">
                            2
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" size="sm">
                            3
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" size="sm">
                            ...
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" size="sm">
                            8
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" size="sm">
                            9
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" size="sm">
                            10
                            </IconButton>
                        </div>
                        <Button variant="outlined" color="blue-gray" size="sm">
                            Next
                        </Button>
                    </CardFooter>
                    <CardFooter className="w-full flex lg:hidden flex-row justify-center items-center  border-t border-blue-gray-50 p-4 ">
                        <div className="flex items-center gap-8">
                            <IconButton
                            size="sm"
                            variant="outlined"
                            color="blue-gray"
                            onClick={prev}
                            disabled={active === 1}
                            >
                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                            </IconButton>
                            <Typography color="gray" className="font-normal">
                            Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
                            <strong className="text-blue-gray-900">10</strong>
                            </Typography>
                            <IconButton
                            size="sm"
                            variant="outlined"
                            color="blue-gray"
                            onClick={next}
                            disabled={active === 10}
                            >
                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                            </IconButton>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;