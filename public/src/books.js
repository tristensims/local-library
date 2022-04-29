// function to find the author by id 
function findAuthorById(authors, id) {
  // declare the variable with author to use to return the array 
  let author = authors.find((person)=> person.id === id); // seeing if the author id and the id entered match
  return author // return the author
}

// function to find book by id
function findBookById(books, id) {
  // declare the variable with book to use to return the array with the books 
  let book = books.find((book)=> book.id === id); // using the find method to match the book id with the id entered
  return book // return the book 
}

// function to display if the book is borrowed or returned
function partitionBooksByBorrowedStatus(books) {
  // first delcare if the book is returned with the filter method and the every method
  //filter through the books and pick out every borrowed book with the boolean of true
  let bookStatusReturned = books.filter((book) => book.borrows.every((borrow)=> borrow.returned === true));
  // same process as the top with a different variable declared and filtering the books and picking out every borrowed book with the boolean of false
  let bookStatusBorrowed = books.filter((book)=> book.borrows.some((borrow) => borrow.returned === false));
  //delcareing a new array with the borrowed and returned books 
  let statusArray = [[...bookStatusBorrowed], [...bookStatusReturned]]
  return statusArray // return the array 
}
  
// function to return an array for a book with all the borrower and their information 
function getBorrowersForBook(book, accounts) {
  // using the map method to establish a new array 
  return book.borrows.map((borrow)=> {
    // declaring a new variable including the find method to match the account id with the borrowed id 
    let account = accounts.find((account) => account.id === borrow.id);
    // fully return the borrowed and the account array 
    return {... borrow, ... account};
  })
  .slice (0,10); // using the slice method to only allow 10 results on the page
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
