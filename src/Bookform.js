// BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Title is required';
        }
        if (!values.author) {
          errors.author = 'Author is required';
        }
        if (!values.isbn) {
          errors.isbn = 'ISBN is required';
        }
        if (!values.publicationDate) {
          errors.publicationDate = 'Publication Date is required';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        if (
          !values.title ||
          !values.author ||
          !values.isbn ||
          !values.publicationDate
        ) {
          actions.setSubmitting(false);
        } else {
          onSubmit(values, actions);
        }
      }}
    >
      <Form>
        <label>Title</label>
        <Field type="text" name="title" />
        <ErrorMessage name="title" component="div" />

        <label>Author</label>
        <Field type="text" name="author" />
        <ErrorMessage name="author" component="div" />

        <label>ISBN</label>
        <Field type="text" name="isbn" />
        <ErrorMessage name="isbn" component="div" />

        <label>Publication Date</label>
        <Field type="date" name="publicationDate" />
        <ErrorMessage name="publicationDate" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
