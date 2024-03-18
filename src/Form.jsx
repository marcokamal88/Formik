import { Formik, Field, Form } from "formik";
import { useState } from "react";

export default function MyForm() {
  const [martial, setMartial] = useState("none");
  const handleMartial = (e) => {
    setMartial(e.target.value);
  };
  return (
    <>
      <Formik
        initialValues={{
          fname: "first name",
          lname: "last name",
          Email: "Email",
          password: "password",
          wife: "wifes name",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form">
          <div>
            <label>First name:</label>
            <Field className="fields" type="text" id="fname" name="fname" />
          </div>
          <div>
            <label>Last name:</label>
            <Field className="fields" type="text" id="lname" name="lname" />
          </div>
          <div>
            <label>Email:</label>
            <Field className="fields" type="text" id="Email" name="Email" />
          </div>
          <div>
            <label>password:</label>
            <Field
              className="fields"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <label>marital Status: </label>
            <select
              className="fields"
              id="maritalStatus"
              value={martial}
              onChange={handleMartial}
            >
              <option>Select marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            {martial === "married" && (
              <div>
                <label >Wife's Name:</label>
                <Field name="wife" className="fields" type="text" id="wifeName" />
              </div>
            )}
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
