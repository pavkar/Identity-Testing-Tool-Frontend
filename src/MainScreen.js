import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBBtn,
} from "mdbreact";
import SectionContainer from "./components/sectionContainer";
import terminalJSON from "./terminals.json";

class DropDownTerminal extends React.Component {
  state = {
    terminals: this.props.terminals,
    terminal: this.props.terminals[0],
  };

  terminalSetState = (terminal) => {
    this.setState({
      terminal: terminal,
    });
  };
  listOfTerminals = () => {
    return this.state.terminals.map((t) => (
      <MDBDropdownItem onClick={() => this.terminalSetState(t)}>{t}</MDBDropdownItem>
    ));
  };

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="default">
          {this.state.terminal}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>{this.listOfTerminals()}</MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

class DropDownFileType extends React.Component {
  state = {
    fileType: "JSON",
  };

  fileTypeSet = (type) => {
    this.setState({
      fileType: type,
    });
  };

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="default">
          {this.state.fileType}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem
            value=".json"
            onClick={() => this.fileTypeSet("JSON")}
          >
            JSON
          </MDBDropdownItem>
          <MDBDropdownItem
            value=".txt"
            onClick={() => this.fileTypeSet("Plain Text")}
          >
            Plain Text
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

class CANInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconInput: "eye-slash",
      typeInput: "password",
      nfc: false,
    };
  }

  toggleCheckbox = (nfc) => {
    this.setState({ nfc: !nfc });
  };

  mouseEnter = () => {
    if (this.state.nfc) {
      this.setState({
        iconInput: "eye",
        typeInput: "text",
      });
    }
  };

  mouseLeave = () => {
    this.setState({
      iconInput: "eye-slash",
      typeInput: "password",
    });
  };

  render() {
    return (
      <MDBContainer>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="nfc"
            onChange={() => this.toggleCheckbox(this.state.nfc)}
          />
          <label class="custom-control-label" for="nfc">
            NFC Reading
          </label>
        </div>
        {this.state.nfc ? (
          <MDBInput
            label="CAN Input"
            disabled={!this.state.nfc}
            valueDefault=""
            type={this.state.typeInput}
            icon={this.state.iconInput}
            onIconMouseEnter={this.mouseEnter}
            onIconMouseLeave={this.mouseLeave}
            required
          />
        ) : undefined}
      </MDBContainer>
    );
  }
}

class MainScreen extends React.Component {
  state = {
    value: "Controlled input with value",
    nfc: true,
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    alert(`MDBInput value: ${value}`);
    event.preventDefault();
  };

  saveToState = (value) => this.setState({ value });

  handleNFC = () => {
    const [showResults] = React.useState(false);
    return (
      <div>{showResults ? <CANInputField nfc={!this.state.nfc} /> : null}</div>
    );
  };

  render() {
    const { value } = this.state;
    return (
      <MDBContainer className="mt-5" title="Inputs">
        <SectionContainer style={{ backgroundColor: "white" }}>
          <h2>Scanning Tool</h2>
          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                icon="file-alt"
                label="File Name"
                getValue={this.getValue}
                valueDefault="TestFile"
              />
            </MDBCol>
            <MDBCol md="6">
              <DropDownFileType />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <CANInputField />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="3">
              <DropDownTerminal terminals={terminalJSON.terminals} />
            </MDBCol>
            <MDBBtn onClick={this.handleSubmit}>Submit</MDBBtn>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default MainScreen;
