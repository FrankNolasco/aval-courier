import React, { useEffect, useState } from "react";
import { Table } from "antd";

export interface DataTableProps {
  dataSource: any[];
  columnSource: string[];
}

function DataTable({ dataSource, columnSource }: DataTableProps) {
  const [columns, setColumns] = useState<any[]>([]);

  useEffect(() => {
    if (columnSource.length > 0) {
      setColumns(columnSource.map( (column) => { 
        let title : string = column.replace("_" , " ");
        title = title.substring(0,1).toUpperCase() + title.substring(1).toLowerCase()  ;
        return {title: title, dataIndex: column, key: column}} ))
    }
    return () => {};
    //eslint-disable-next-line
  }, [columnSource]);

  return <Table bordered  dataSource={dataSource} columns={columns} />;
}

export default DataTable;
