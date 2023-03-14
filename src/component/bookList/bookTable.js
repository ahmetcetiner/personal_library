import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookTable = (props) => {
    return (
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Number Of Pages</th>
                    <th scope="col">Isbn</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Publish Date</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            {props.books.map((book, i) => (

                <tbody key={i}>
                    <tr>
                        <th scope="row">{book.ID}</th>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.number_of_pages}</td>
                        <td>{book.isbn}</td>
                        <td>{book.publisher}</td>
                        <td>{book.publish_date}</td>
                        <td>{book.location}</td>
                    </tr>
                </tbody>

            ))
            }
        </table>
    );
}

export default BookTable;
