import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Util from "../../../static/functions/Util";
interface IRenderList{
  name : string,
  render : Function
}

interface IResponsiveList{
  name : string,
  responsive : string[]
}

export interface DataTableProps {
  dataSource: any[];
  columnSource: string[];
  renderList? : IRenderList[],
  expandable? : any,
  responsive? : IResponsiveList[]
}

function DataTable({ dataSource, columnSource , expandable , renderList , responsive }: DataTableProps) {
  const [columns, setColumns] = useState<any[]>([]);

  const findOnRenderList = (columnName : string) => {
    return renderList ? renderList.filter(r => r.name === columnName) : []
  } 

  const findOnResponsiveList = (columnName : string) => {
    return responsive ? responsive.filter(r => r.name === columnName) : []
  } 

  const renderAutolayout = (value : string | any) => {
    if(typeof value === "string"){
      if(!Util.isUrl(value) && value.length > 130) {
        return <div>
          <span>
            {value.substr(0,130)}...
          </span>
        </div>
      }
    }
    return value
  }
  useEffect(() => {
    if (columnSource.length > 0) {
      setColumns(columnSource.map( (column) => { 
        let title : string = column.replace("_" , " ");
        title = title.substring(0,1).toUpperCase() + title.substring(1).toLowerCase()  ;
        const finder = findOnRenderList(column)
        const responsiveMatch = findOnResponsiveList(column)
        if(responsiveMatch.length > 0){
          if(finder.length > 0){
            return {title, dataIndex: column, key: column , render : finder[0].render , responsive : responsiveMatch[0].responsive}
          }else{
            return {title, dataIndex: column, key: column , render : renderAutolayout , responsive : responsiveMatch[0].responsive} 
          }
        }else{
          if(finder.length > 0){
            return {title, dataIndex: column, key: column , render : finder[0].render}
          }
          return {title, dataIndex: column, key: column , render : renderAutolayout} 
        }
      }))
    }
    return () => {};
    //eslint-disable-next-line
  }, [columnSource]);

  return <Table bordered {...expandable}  dataSource={dataSource} columns={columns} />;
}

export default DataTable;
