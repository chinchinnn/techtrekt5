import React from "react";
import { NavigationBar } from "../Layout/NavigationBar";
import { Layout } from "../Layout/Layout";
import { Form, FormControl } from "react-bootstrap";
import { Button, Col, InputGroup } from "react-bootstrap";
import { FormGroup, ControlLabel } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custName: "",
      age: "",
      dob: new Date(),
      serviceOffName: "",
      nric: "asda",
      branchCode: "123",
      imagePath: "",
      prodType: "",
    };
  }

  handleChange = (opcode) => (event) => {
    const value = opcode === "dob" ? event : event.target.value;
    this.setState({ [opcode]: value });
  };

  // postToServer = (
  //   custName,
  //   age,
  //   dob,
  //   serviceOffName,
  //   nric,
  //   branchCode,
  //   imagePath,
  //   prodType
  // ) => {
  //   fetch("/", {
  //     method: "POST",
  //     mode: "cors",
  //     body: JSON.stringify({
  //       custName: custName,
  //       age: age,
  //       dob: dob,
  //       serviceOffName: serviceOffName,
  //       nric: nric,
  //       branchCode: branchCode,
  //       imagePath: imagePath,
  //       prodType: prodType,
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((body) => {
  //       console.log("do something");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Customer name</Form.Label>
            <Form.Control
              type="text"
              name="custName"
              placeholder="Customer Name"
              value={this.state.custName}
              onChange={this.handleChange("custName")}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange("age")}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Date of Birth</Form.Label>
            <DatePicker
              onChange={this.handleChange("dob")}
              selected={this.state.dob}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationFormik03">
            <Form.Label>Service Officer Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Service Officer Name"
              name="serviceOfficerName"
              value={this.state.serviceOffName}
              onChange={this.handleChange("serviceOffName")}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>NRIC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nric"
              name="nric"
              value={this.state.nric}
              onChange={this.handleChange("nric")}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik05">
            <Form.Label>Branch Code</Form.Label>
            <Form.Control
              type="number"
              placeholder="Branch Code"
              name="branchCode"
              value={this.state.branchCode}
              onChange={this.handleChange("branchCode")}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="Image File"
              value={this.state.imagePath}
              onChange={this.handleChange("imagePath")}
              id="validationFormik107"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Product Type</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Product Type"
                aria-describedby="inputGroupPrepend"
                name="prodType"
                value={this.state.prodType}
                onChange={this.handleChange("prodType")}
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Send request to server");
            console.log(this.state);
          }}
        >
          Submit
        </Button>
        <Button id="saveDraft" type="submit">
          Save Draft
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;
