import { DataStore } from "aws-amplify";
import { useEffect, useState, useMemo } from "react";
import { Table, Input, Card, Tag, Modal, Form, Button } from "antd";
import { RoleManageList, PermissionList } from "../../models";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
export default function Permission() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const models = DataStore.query(RoleManageList);
    setTableData(models);
  }, []);

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return <h1>Role Management Page</h1>;
}
