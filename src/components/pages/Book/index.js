import React from "react"

import BookCard from "./BookCard"
import RelatedBooks from "./RelatedBooks"
import AuthorList from "./BookCard/AuthorList"
import Form from "./FeedBackForm"

import useBook from "../../shared/hooks/useBook"

const BookContainer = ({ match: { params } }) => {
  const { book, authorsData, relatedBooks } = useBook(params.id)

  return (
    <>
      <BookCard
        isLoading={[!book, "Book"]}
        book={book}
      />
      <RelatedBooks
        isLoading={[!relatedBooks, "Related books"]}
        books={relatedBooks}
      />
      <AuthorList
        isLoading={[!authorsData, "Authors"]}
        authors={authorsData}
      />
      <Form />
    </>
  )
}

export default BookContainer