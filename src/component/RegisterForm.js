import React from "react";
import { NavigationBar } from '../Layout/NavigationBar';
import { Layout } from '../Layout/Layout';
import { Form, FormControl } from 'react-bootstrap';
import { Button, Col, InputGroup } from 'react-bootstrap';
import { FormGroup, ControlLabel } from "react-bootstrap";
import DatePicker from 'react-datepicker';

// import { yup } from 'yup';

// const schema = yup.object({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   terms: yup.bool().required(),
// });

class RegisterForm extends React.Component {
  render() {
    // const [date, setDate] = useState(new Date());

    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");
    return(
      <div>
          <NavigationBar/>
          <Layout>
              <br/>
              <h2>Register New Customer</h2>
              <Form>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                      <Form.Label>Customer name</Form.Label>
                      <Form.Control
                        type="text"
                        name="CustName"
                        placeholder="Customer Name"
                        // value={values.custName}
                        // onChange={handleChange}
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
                          placeholder="Date of Birth"
                          aria-describedby="inputGroupPrepend"
                          name="dob"
                          // value={values.dob}
                          // onChange={handleChange}
                          // isInvalid={!!errors.dob}
                        />
                        <Form.Control.Feedback type="invalid">
                          {/* {errors.dob} */}
                        </Form.Control.Feedback>
                      </InputGroup>
                      {/* <DatePicker
                        // selected={date}
                        // onChange={date => setDate(date)}
                        onCalendarClose={handleCalendarClose}
                        onCalendarOpen={handleCalendarOpen}
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
                            placeholder="Date of Birth"
                            aria-describedby="inputGroupPrepend"
                            name="dob"
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

                  <Button type="submit">Register</Button>
                  <Button type="submit">Save Draft</Button>
                </Form>
          </Layout>
      </div>
  )
  }
}

export default RegisterForm;
