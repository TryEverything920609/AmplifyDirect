import { useEffect, useMemo, useState } from "react";
import { Table, Tag, Card, Input } from "antd";
import { DataStore } from "aws-amplify";
import { BillingList } from "../../models";
import moment from "moment";
function Billing() {
  const column = useMemo(
    () => [
      {
        title: "User",
        dataIndex: "User",
        key: "id",
        sorter: (a, b) =>
          a.User.replace(/\s/g, "").localeCompare(b.User.replace(/\s/g, "")),
        sortDirections: ["ascend", "descend"],
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
        title: "Duration",
        dataIndex: "Duration",
        sorter: (a, b) => a.Duration - b.Duration,
        sortDirections: ["ascend", "descend"],
        render: (Duration) => (
          <span>
            <Tag color="blue">{Duration && Duration.toFixed(1)}min</Tag>
          </span>
        ),
      },
      {
        title: "Payment History",
        dataIndex: "Cost",
        sorter: (a, b) => a.Cost - b.Cost,
        sortDirections: ["ascend", "descend"],
        render: (Cost) =>
          Cost > 0 ? (
            <span>
              <Tag color="blue">{Cost.toFixed(3)}$</Tag>
            </span>
          ) : (
            <span>
              <Tag color="magenta">{Cost}</Tag>
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
    ],
    []
  );

  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const getTableData = async () => {
    const models = await DataStore.query(BillingList);
    setTableData(models);
    console.log(models, "models => ");
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const setData = () => {
    const data = tableData.filter(
      (item) =>
        (item.User &&
          item.User.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.Type &&
          item.Type.toString().toLowerCase().includes(search.toLowerCase())) ||
        (item.Duration &&
          item.Duration.toString()
            .toLowerCase()
            .includes(search.toLowerCase())) ||
        (item.Cost &&
          item.Cost.toString().toLowerCase().includes(search.toLowerCase()))
    );
    setSearchData(data);
  };

  useEffect(() => {
    setData();
  }, [search, tableData]);

  useEffect(() => {
    getTableData();
  }, []);
  console.log("Hello");
  return (
    <>
      <Card title="Billing History" bordered={false}>
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

export default Billing;
