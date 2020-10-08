import React from "react";
import MUIDataTable from "mui-datatables";
import OverviewFile from "./OverviewFile";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";

function DataFile(fileName, dataType) {
  const state = {
    fileName: fileName,
    dataType: dataType,
    date:
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds() +
      " " +
      new Date().getDate() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear(),
  };
  return [
    state.fileName,
    state.dataType,
    state.date,
    <OverviewFile dataType={state.dataType} />,
    <MDBBtn size="sm">
      <MDBIcon icon="download" />
    </MDBBtn>,
  ];
}

//[
//  {
//    label: "File Name",
//    field: "fileName",
//    width: 270,
//  },
//  {
//    label: "Type",
//    field: "type",
//    width: 200,
//  },
//  {
//    label: "Timestamp",
//    field: "timestamp",
//    sort: "asc",
//    width: 100,
//  },
//  {
//    label: "View",
//    field: "view",
//    sort: "disabled",
//    width: 150,
//  },
//  {
//    label: "Download",
//    field: "download",
//    sort: "disabled",
//    width: 100,
//  },
//],
  class AllFilesView extends React.Component {
    state = {
      columns: ["File Name", "Type", "Timestamp", "View", "Download"],
      data: [
        DataFile("File Name", "Personal Data"),
        DataFile("CPLC", "CPLC"),
        DataFile("Test123", "ATR"),
        DataFile("File Name2", "All Data"),
        DataFile("File Name3", "Certificate"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
        DataFile("File Name", "Personal Data"),
      ],
    };
    render() {
      const { columns, data } = this.state;
      const options = {
        filterType: "dropdown",
        responsive: "stacked",
        print: true,
        rowsPerPage: 10,
        page: 0,
      };
      return (
        <MDBContainer>
          <MUIDataTable
            title="Files"
            data={data}
            columns={columns}
            options={options}
          />
        </MDBContainer>
      );
    }
  };

export default AllFilesView;
