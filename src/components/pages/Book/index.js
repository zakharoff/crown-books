import React from "react"

import BookCard from "./BookCard"
import RelatedBooks from "./RelatedBooks"
import AuthorList from "./BookCard/AuthorList"

import useBook from "../../shared/hooks/useBook"

const BookContainer = () => {
  const { book, authorsData, relatedBooks } = useBook("rechou1YPRb0takuM")

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
    </>
  )
}

export default BookContainer