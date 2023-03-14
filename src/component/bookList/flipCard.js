import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './flipCard.css'

const FlipCard = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.books.map((book, i) => (
                    <div className="flip-card card col-3 m-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={book.photoUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div class="card">
                                    <div class="card-header">{book.title}</div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{book.author}</li>
                                        <li class="list-group-item">{book.number_of_pages}</li>
                                        <li class="list-group-item">{book.isbn}</li>
                                        <li class="list-group-item">{book.publisher}</li>
                                        <li class="list-group-item">{book.publish_date}</li>
                                        <li class="list-group-item">{book.location}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default FlipCard;
