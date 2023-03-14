import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookTable from './bookTable';
import FlipCard from './flipCard';

class BookList extends React.Component {
    state = { showCard: true }
    btnName="Cards";
    showMore = () => {
        this.setState({ showCard: !this.state.showCard })
        this.state.showCard ? (
            this.btnName = "Tables"                  
        ) : this.btnName = "Cards"
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>{this.btnName}</button>
                {
                    this.state.showCard ? (
                        <BookTable books={this.props.books} />

                    ) : <FlipCard books={this.props.books} />
                }

            </div>

        );
    }
}

export default BookList;
