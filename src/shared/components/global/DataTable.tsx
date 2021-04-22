import React, { useEffect, useState } from "react";
import { Table } from "antd";
interface IRenderList {
  name: string;
  render: Function;
}

interface IResponsiveList {
  name: string;
  responsive: string[];
}

export interface DataTableProps {
  dataSource: any[];
  columnSource: string[];
  renderList?: IRenderList[];
  expandable?: any;
  responsive?: IResponsiveList[];
}

interface IColumn {
  title: string;
  dataIndex: string;
  key: number | string;
  render?: Function;
  responsive?: string[];
}

function DataTable({
  dataSource,
  columnSource,
  expandable,
  renderList,
  responsive,
}: DataTableProps) {
  const [columns, setColumns] = useState<IColumn[]>([]);
  const findOnRenderList = (columnName: string) => {
    return renderList ? renderList.filter((r) => r.name === columnName) : [];
  };

  const findOnResponsiveList = (columnName: string) => {
    return responsive ? responsive.filter((r) => r.name === columnName) : [];
  };

  const processColumnsMap = (columsMap: string[]) => {
    return columsMap.map(processColumn);
  };

  const processColumn = (column: string) : IColumn => {
    let title: string = column.replaceAll("_", " ");
    title = title.substring(0, 1).toUpperCase() + title.substring(1).toLowerCase();
    const renderMatch = findOnRenderList(column);
    const responsiveMatch = findOnResponsiveList(column);
    const needRender = renderMatch.length > 0;
    const isResponsive = responsiveMatch.length > 0;
    return {
      title,
      dataIndex: column,
      key: column,
      render: needRender ? renderMatch[0].render : undefined,
      responsive: isResponsive ? responsiveMatch[0].responsive : undefined,
    };
  };

  useEffect(() => {
    if (columnSource.length > 0) {
      const newColumns = processColumnsMap(columnSource);
      setColumns(newColumns);
    }
    return () => {};
    //eslint-disable-next-line
  }, [columnSource]);

  return (
    <Table bordered {...expandable} dataSource={dataSource} columns={columns} />
  );
}

export default DataTable;