import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Switch,
  Input,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["No", "State Name", "Area Code", ""];
 
const TABLE_ROWS = [
  {
    No: 1,
    Name: "Alaska",
    Code : "907"
  },
  {
    No: 2,
    Name: "Alabama",
    Code: "205,251,256,334"
  },
  {
    No: 3,
    Name: "Arizona",
    Code: "480,520,602,623,928,814"
  },
  {
    No: 4,
    Name: "California",
    Code: "209,213,310,323,408,415"
  },
  {
    No: 5,
    Name: "Colorado",
    Code: "303,719,970,720"
  },
  {
    No: 6,
    Name: "New York",
    Code: "212,315,516,518,585,607"
  },
];
 
export default function States() {
  return (
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
                ({ No, Name, Code }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={No}>
                        <td className={classes}>
                            <div className="flex items-center gap-3">
                            
                            <Typography variant="small" color="blue-gray" className="font-bold">
                                {No}
                            </Typography>
                            </div>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {Name}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {Code}
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
  );
}