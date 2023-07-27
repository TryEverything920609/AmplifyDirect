import { Auth } from "aws-amplify";
import { useEffect, useMemo, useState } from "react";
import { DataStore } from "aws-amplify";
import { ServiceList } from "../../models";
import { Table, Tag, Card, Input } from "antd";
import moment from "moment";
export default function Dashboard() {
  const column = useMemo(
    () => [
      {
        title: "From",
        dataIndex: "From",
        key: "id",
        sorter: (a, b) => a.From.localeCompare(b.From),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "To",
        dataIndex: "To",
        sorter: (a, b) => a.To.localeCompare(b.To),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "UserName",
        dataIndex: "Username",
        sorter: (a, b) => a.Username.localeCompare(b.Username),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Cost",
        dataIndex: "Cost",
        sorter: (a, b) => a.Cost - b.Cost,
        sortDirections: ["ascend", "descend"],
        render: (Cost) => (
          <span>
            <Tag color="magenta">-{Cost.toFixed(3)}$</Tag>
          </span>
        ),
      },
      {
        title: "Type",
        dataIndex: "Type",
        sorter: (a, b) => a.Type.localeCompare(b.Type),
        sortDirections: ["ascend", "descend"],
        render: (Type) =>
          Type === "SMS" ? (
            <span>
              <Tag color="red">SMS</Tag>
            </span>
          ) : Type === "VOICEMAIL" ? (
            <span>
              <Tag color="cyan">VOICEMAIL</Tag>
            </span>
          ) : Type === "CALL" ? (
            <span>
              <Tag color="purple">CALL</Tag>
            </span>
          ) : (
            <span>
              <Tag color="purple">Deposit</Tag>
            </span>
          ),
      },
      {
        title: "Date&Time",
        dataIndex: "createdAt",
        sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        sortDirections: ["ascend", "descend"],
        render: (createdAt) => (
          <span>
            <Tag color="green">
              {moment(createdAt).format("MM/DD/YYYY hh:mm:ss")}
            </Tag>
          </span>
        ),
      },
      {
        title: "Status",
        dataIndex: "Status",
        sorter: (a, b) => a.Status.localeCompare(b.Status),
        sortDirections: ["ascend", "descend"],
        render: (Status) => (
          <span>
            <Tag color="geekblue">{Status}</Tag>
          </span>
        ),
      },
    ],
    []
  );

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  async function getTableData() {
    const models = await DataStore.query(ServiceList);
    setTableData(models);
    console.log(models);
  }

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    getTableData();
  }, []);

  const setData = () => {
    const data = tableData.filter(
      (item) =>
        (item.From &&
          item.From.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.To &&
          item.To.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.UserName &&
          item.UserName.toString()
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (item.Message &&
          item.Message.toString()
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (item.Cost &&
          item.Cost.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.Status &&
          item.Status.toString()
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (item.Type &&
          item.Type.toString().toLowerCase().includes(search.toLowerCase()))
    );
    setSearchData(data);
  };

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tableData]);

  return (
    <>
      <Card title="List of Call, SMS & VoiceMail" bordered={false}>
        <div
          style={{
            justifyContent: "end",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ width: "25%", minWidth: "200px" }}
          />
        </div>
        <div className="table-responsive">
          <Table
            columns={column}
            dataSource={search ? searchData : tableData}
            size="middle"
            className="ant-border-space"
          />
        </div>
      </Card>
    </>
  );
}
