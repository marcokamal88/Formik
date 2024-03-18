/* eslint-disable react/no-unescaped-entities */
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
const validation = Yup.object().shape({
  fname: Yup.string()
    .min(3, "too short")
    .max(10, "too long")
    .required("Required"),
  lname: Yup.string()
    .min(3, "too short")
    .max(10, "too long")
    .required("Required"),
  Email: Yup.string().email("invalid email").required("Required"),
  password: Yup.string().min(8).required("Required"),
  wife: Yup.string()
    .min(3, "too short")
    .max(10, "too long")
    .required("Required"),
});
export default function MyForm() {
  const [martial, setMartial] = useState(null);
  const handleMartial = (e) => {
    setMartial(e.target.value);
  };
  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          Email: "",
          password: "",
          wife: "",
        }}
        validationSchema={validation}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div>
              <label>First name:</label>
              <Field className="fields" type="text" id="fname" name="fname" />
              {errors.fname && touched.fname ? (
                <div className="errors">*{errors.fname}</div>
              ) : null}
            </div>
            <div>
              <label>Last name:</label>
              <Field className="fields" type="text" id="lname" name="lname" />
              {errors.lname && touched.lname ? (
                <div className="errors">*{errors.lname}</div>
              ) : null}
            </div>
            <div>
              <label>Email:</label>
              <Field className="fields" type="text" id="Email" name="Email" />
              {errors.Email && touched.Email ? (
                <div className="errors">*{errors.Email}</div>
              ) : null}
            </div>
            <div>
              <label>password:</label>
              <Field
                className="fields"
                type="password"
                id="password"
                name="password"
              />
              {errors.password && touched.password ? (
                <div className="errors">* {errors.password}</div>
              ) : null}
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
                  <label>Wife's Name:</label>
                  <Field
                    name="wife"
                    className="fields"
                    type="text"
                    id="wifeName"
                  />
                  {errors.wife && touched.wife ? (
                    <div className="errors">*{errors.wife}</div>
                  ) : null}
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
