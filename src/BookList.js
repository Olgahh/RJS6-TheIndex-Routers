import React, { Component } from "react";

import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    query: ""
  };
  setQuery = query => {
    query = query.toLowerCase();
    this.setState({ query });
  };

  render() {
    const filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase()
    );
    const bookTable = <BookTable books={filteredBooks} />;

    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.setQuery} />
        <div className="row">{bookTable}</div>
      </div>
    );
  }
}

export default BookList;
