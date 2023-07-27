import { Auth } from "aws-amplify";
import { useState, useMemo, useEffect } from "react";
import { Card, Input, Tag, Table } from "antd";
import { DataStore } from "aws-amplify";
import { CallLogList } from "../../models";
import moment from "moment";
export default function CallLog() {
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
        title: "Duration",
        dataIndex: "Duration",
        sorter: (a, b) => a.Duration - b.Duration,
        sortDirections: ["ascend", "descend"],
        render: (Duration) => (
          <span>
            <Tag color="blue">{Duration.toFixed(1)}min</Tag>
          </span>
        ),
      },
      {
        title: "Date&Time",
        dataIndex: "createdAt",
        sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        sortDirections: ["ascend", "descend"],
      },
      {
        title: "Status",
        dataIndex: "Status",
        sorter: (a, b) => a.Status.localeCompare(b.Status),
        sortDirections: ["ascend", "descend"],
        render: (Status) =>
          Status === "NOANSWER" ? (
            <span>
              <Tag color="red">{Status}</Tag>
            </span>
          ) : Status === "RINGING" ? (
            <span>
              <Tag color="cyan">{Status}</Tag>
            </span>
          ) : (
            <span>
              <Tag color="purple">{Status}</Tag>
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
    const models = await DataStore.query(CallLogList);
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
        (item.Duration &&
          item.Duration.toString()
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (item.Cost &&
          item.Cost.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.Status &&
          item.Status.toString().toLowerCase().includes(search.toLowerCase()))
    );
    setSearchData(data);
  };

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tableData]);

  return (
    <>
      <Card title="Call Log" bordered={false}>
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
