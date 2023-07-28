import { useEffect, useState, useMemo } from "react";
import { DataStore } from "aws-amplify";
import { Table, Input, Card, Tag, Modal, Form, Button } from "antd";
import { RoleManageList, PermissionList, PermissionListRoleManageList } from "../../models";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
export default function Permission() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
     const getData = async() =>{
      const role = await DataStore.query(RoleManageList);
      const roleManageLists = await DataStore.query(
        RoleManageList,
        (c) => c.RoleName.eq("ADMIN")
      );
      const Table = await DataStore.query(PermissionListRoleManageList, (c) =>
        c.roleManageListId.eq(role[0].id)
      );
      console.log(Table);
    }

    getData();
  }, []);

  const onchange = () => {

    
  }

  return (
    <div>
      <h1>Role Management Page</h1>
      <Button type="dashed" onClick={() => onchange()}>
        Hello
      </Button>
    </div>
  );
}
