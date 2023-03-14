import React from 'react';
import './App.css';
import BookList from './component/bookList';
import Header from './component/header';
//GlobalCss
import { GlobalStyle } from './GlobalStyle';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          "ID": 1,
          "title": "Patasana",
          "author": "Ahmet Umit",
          "publish_date": "Jul 01, 2010",
          "publisher": "Everest Yayınları",
          "number_of_pages": 400,
          "isbn": "9752897363",
          "photoUrl": "https://covers.openlibrary.org/b/id/12306849-L.jpg",
          "location": "In Library"
        },
        {
          "ID": 2,
          "title": "Kukla",
          "author": "Ahmet Umit",
          "publish_date": "Oct 28, 2012",
          "publisher": "Everest Yayınları",
          "number_of_pages": 418,
          "isbn": "6051415769",
          "photoUrl": "https://covers.openlibrary.org/b/id/12205955-L.jpg",
          "location": "In Library"
        },
        {
          "ID": 3,
          "title": "Beyoğlu'nun En Güzel Abisi",
          "author": "Ahmet Umit",
          "publish_date": "Jan 13, 2014",
          "publisher": "Everest Yayınları",
          "number_of_pages": 418,
          "isbn": "6051416838",
          "photoUrl": "https://covers.openlibrary.org/b/id/12205992-L.jpg",
          "location": "In Library"
        },
        {
          "ID": 4,
          "title": "Elveda Güzel Vatanım",
          "author": "Ahmet Umit",
          "publish_date": "Oct 11, 2017",
          "publisher": "Everest Yayınları",
          "number_of_pages": 70,
          "isbn": "6051851909",
          "photoUrl": "https://covers.openlibrary.org/b/id/12210533-L.jpg",
          "location": "In Library"
        },
        {
          "ID": 5,
          "title": "Sultanı Öldürmek",
          "author": "Ahmet Umit",
          "publish_date": "Apr 18, 2017",
          "publisher": "Everest Yayınları",
          "number_of_pages": 696,
          "isbn": "6051851402",
          "photoUrl": "https://covers.openlibrary.org/b/id/12210467-L.jpg",
          "location": "In Library"
        },
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="App container">
          <BookList books={this.state.books} />
          <GlobalStyle />
        </div>
      </div>
    );
  }
}

export default App;
