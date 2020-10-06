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

function DropDownFileType() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        File Type
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>JSON</MDBDropdownItem>
        <MDBDropdownItem>Plain Text</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
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
        typeInput: "password",
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
        { this.state.nfc ?
          <MDBInput
            label="CAN Input"
            disabled={!this.state.nfc}
            valueDefault=""
            type={this.state.typeInput}
            icon={this.state.iconInput}
            onIconMouseEnter={this.mouseEnter}
            onIconMouseLeave={this.mouseLeave}
            required
          /> : ""
        }
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
        <SectionContainer header="Scanning Tool">
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
          <MDBBtn onClick={this.handleSubmit}>Submit</MDBBtn>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default MainScreen;
