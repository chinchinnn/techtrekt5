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
      dob: "",
      serviceOffName: "",
      nric: "",
      branchCode: "",
      imagePath: "",
      prodType: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (opcode) => (event) => {
    console.log(event.target.value);
    this.setState({ [opcode]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    var data = {};
    data.custName = this.state.custName;
    data.age = this.state.age;
    data.dob = this.state.dob;
    data.serviceOffName = this.state.serviceOffName;
    data.nric = this.state.nric;
    data.branchCode = this.state.branchCode;
    data.imagePath = this.state.imagePath;
    data.prodType = this.state.prodType;

    console.log("Customer Name: " + data.custName);
  }

  postToServer = (
    custName,
    age,
    dob,
    serviceOffName,
    nric,
    branchCode,
    imagePath,
    prodType
  ) => {
    fetch("/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        custName: custName,
        age: age,
        dob: dob,
        serviceOffName: serviceOffName,
        nric: nric,
        branchCode: branchCode,
        imagePath: imagePath,
        prodType: prodType,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log("do something");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              // isValid={touched.custName && !errors.custName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange("age")}
              // value={values.age}
              // onChange={handleChange}
              // isValid={touched.age && !errors.age}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Date of Birth</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="dd/MM/YYYY"
                aria-describedby="inputGroupPrepend"
                name="dob"
                value={this.state.dob}
                onChange={this.handleChange("dob")}
                // value={values.dob}
                // onChange={handleChange}
                // isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type="invalid">
                {/* {errors.dob} */}
              </Form.Control.Feedback>
            </InputGroup>
            {/* <DatePicker
                        onChange={onChange}
                        value={value}
                      /> */}
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
              // value={values.serviceOfficerName}
              // onChange={handleChange}
              // isInvalid={!!errors.serviceOfficerName}
            />

            <Form.Control.Feedback type="invalid">
              {/* {errors.serviceOfficerName} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>NRIC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nric"
              name="nric"
              value={this.state.nric}
              onChange={this.handleChange("nric")}
              // value={values.nric}
              // onChange={handleChange}
              // isInvalid={!!errors.nric}
            />
            <Form.Control.Feedback type="invalid">
              {/* {errors.branchCode} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik05">
            <Form.Label>Branch Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Branch Code"
              name="branchCode"
              value={this.state.branchCode}
              onChange={this.handleChange("branchCode")}
              // value={values.branchCode}
              // onChange={handleChange}
              // isInvalid={!!errors.branchCode}
            />

            <Form.Control.Feedback type="invalid">
              {/* {errors.branchCode} */}
            </Form.Control.Feedback>
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
              // onChange={handleChange}
              // isInvalid={!!errors.file}
              // feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
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
                // value={values.dob}
                // onChange={handleChange}
                // isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type="invalid">
                {/* {errors.dob} */}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Button
          type="submit"
          onClick={() => {
            console.log("clicked");
            console.log(this.state);
          }}
        >
          Register
        </Button>
        <Button id="saveDraft" type="submit">
          Save Draft
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;
