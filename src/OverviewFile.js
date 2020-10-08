import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";
import dataJSON from "./mock/NewID.json";

function JsonFileClean(props) {
  return Object.keys(props.data).map((key, i) => (
    <p key={i}>
      <span>
        {key}: {props.data[key]}
      </span>
    </p>
  ));
}

function JsonFileRaw(props) {
  return (
    <pre className="layout__item u-1/2-lap-and-up">
      {JSON.stringify(props.data, null, 2)}
    </pre>
  );
}

function ShowedText(props) {
  return props.raw ? (
    <JsonFileRaw data={props.data} />
  ) : (
    <JsonFileClean data={props.data} />
  );
}

class OverviewFile extends Component {
  state = {
    dataType: this.props.dataType,
    modal: false,
    raw: false,
    data: "",
    rawBtnText: "Raw",
  };

  // TODO   Place holder CPLC and Personaldata thing
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      data:
        this.state.dataType === "Personal Data"
          ? dataJSON.PersonalData[0]
          : dataJSON.CPLC[0],
    });
  };

  rawBtn = () => {
    this.setState({
      raw: !this.state.raw,
      rawBtnText: this.state.raw ? "Raw" : "Clean",
    });
  };
  render() {
    return (
        <MDBContainer>
          <MDBBtn onClick={this.toggle} size="sm">
            <MDBIcon far icon="eye" />
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              {this.state.dataType}
            </MDBModalHeader>
            <MDBBtn color="warning" onClick={this.rawBtn}>
              {this.state.rawBtnText}
            </MDBBtn>
            <MDBModalBody>
              <ShowedText raw={this.state.raw} data={this.state.data} />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="red" size="sm" onClick={this.toggle}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
    );
  }
}

export default OverviewFile;
