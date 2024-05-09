import React, { useState } from 'react';
import BookForm from './Bookform';
import AuthorForm from './AuthorForm';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBookIndex, setEditingBookIndex] = useState(null);
  const [editingAuthorIndex, setEditingAuthorIndex] = useState(null);

  const handleBookSubmit = (values, { resetForm }) => {
    if (editingBookIndex !== null) {
      // Editing an existing book
      const updatedBooks = [...books];
      updatedBooks[editingBookIndex] = values;
      setBooks(updatedBooks);
      setEditingBookIndex(null);
    } else {
      // Adding a new book
      setBooks([...books, values]);
    }
    resetForm();
  };

  const handleAuthorSubmit = (values, { resetForm }) => {
    if (editingAuthorIndex !== null) {
      // Editing an existing author
      const updatedAuthors = [...authors];
      updatedAuthors[editingAuthorIndex] = values;
      setAuthors(updatedAuthors);
      setEditingAuthorIndex(null);
    } else {
      // Adding a new author
      setAuthors([...authors, values]);
    }
    resetForm();
  };

  const handleEditBook = (index) => {
    setEditingBookIndex(index);
  };

  const handleEditAuthor = (index) => {
    setEditingAuthorIndex(index);
  };

  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleDeleteAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-dashboard">
      <div className="book-section">
        {editingBookIndex !== null ? (
          <>
            <h2>Edit Book</h2>
            <BookForm
              initialValues={books[editingBookIndex]}
              onSubmit={(values, actions) => {
                handleBookSubmit(values, actions);
              }}
            />
          </>
        ) : (
          <>
            <h2>Add Book</h2>
            <BookForm
              initialValues={{}}
              onSubmit={(values, actions) => {
                handleBookSubmit(values, actions);
              }}
            />
          </>
        )}
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <button onClick={() => handleEditBook(index)}>Edit</button>
                  <button onClick={() => handleDeleteBook(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="author-section">
        {editingAuthorIndex !== null ? (
          <>
            <h2>Edit Author</h2>
            <AuthorForm
              initialValues={authors[editingAuthorIndex]}
              onSubmit={(values, actions) => {
                handleAuthorSubmit(values, actions);
              }}
            />
          </>
        ) : (
          <>
            <h2>Add Author</h2>
            <AuthorForm
              initialValues={{}}
              onSubmit={(values, actions) => {
                handleAuthorSubmit(values, actions);
              }}
            />
          </>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Biography</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={index}>
                <td>{author.name}</td>
                <td>{author.birthDate}</td>
                <td>{author.biography}</td>
                <td>
                  <button onClick={() => handleEditAuthor(index)}>Edit</button>
                  <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
