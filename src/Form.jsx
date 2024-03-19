/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      Email: "",
      password: "",
      marital_status: "",
      wife: "none",
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <label>First name:</label>
          <input
            className="fields"
            type="text"
            id="fname"
            name="fname"
            onChange={formik.handleChange}
          />
          {formik.errors.fname && formik.touched.fname ? (
            <div className="errors">*{formik.errors.fname}</div>
          ) : null}
        </div>
        <div>
          <label>Last name:</label>
          <input
            className="fields"
            type="text"
            id="lname"
            name="lname"
            onChange={formik.handleChange}
          />
          {formik.errors.lname && formik.touched.lname ? (
            <div className="errors">*{formik.errors.lname}</div>
          ) : null}
        </div>
        <div>
          <label>Email:</label>
          <input
            className="fields"
            type="text"
            id="Email"
            name="Email"
            onChange={formik.handleChange}
          />

          {formik.errors.Email && formik.touched.Email ? (
            <div className="errors">*{formik.errors.Email}</div>
          ) : null}
        </div>
        <div>
          <label>password:</label>
          <input
            className="fields"
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
          />

          {formik.errors.password && formik.touched.password ? (
            <div className="errors">* {formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label>marital Status: </label>
          <select
            className="fields"
            id="maritalStatus"
            onChange={formik.handleChange}
            name="marital_status"
          >
            <option>Select marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          {formik.values.marital_status === "married" && (
            <div>
              <label>Wife's Name:</label>
              <input
                name="wife"
                className="fields"
                type="text"
                id="wifeName"
                onChange={formik.handleChange}
              />
              {formik.errors.wife && formik.touched.wife ? (
                <div className="errors">*{formik.errors.wife}</div>
              ) : null}
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
