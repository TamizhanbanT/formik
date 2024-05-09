// AuthorForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        // Validation logic here
        return errors;
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />

        <label>Birth Date</label>
        <Field type="date" name="birthDate" />
        <ErrorMessage name="birthDate" component="div" />

        <label>Biography</label>
        <Field type="text" name="biography" />
        <ErrorMessage name="biography" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
