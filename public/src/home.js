// function to return the total number of books, with 0 if empty 
function getTotalBooksCount(books) {
  //declare total to the entire length of the books array 
  let total = books.length
  return total // return the total number of books
}

// function to return total number of accounts, with 0 if empty
function getTotalAccountsCount(accounts) {
  //declare total to the entire length of the accoutns array 
  let people = accounts.length;
  //return the total number
  return people
}

// function to return the total number of books currently being borrowed, with 0 if empty
function getBooksBorrowedCount(books) {
  // using to reduce method to establish an accumulator pattern
  return books.reduce((borrowed, {borrows}) => {
    // need to but the starting number to 0 to add onto it 
    const recent = borrows[0];
    // seeing if the returned books equil false and adding it into the borrowed number
    if(recent.returned === false) borrowed++;
    //return the total number of borrowed books
    return borrowed
  }, 0)
}

// function to display the most popular genres from most to least in a groud of 5
function getMostCommonGenres(books) {
  // delcare an empty object 
  let genre = {};
  // starting with the forEach and going through each item in the object 
  books.forEach(book => {
    // if statement to add the total objects that are false
    if(genre[book.genre] != null){
      genre[book.genre]++;
    } else { // anything else equils 1
      genre[book.genre] =1;
    }
  });
  //delcare a new array 
  let count = [];
  // establish the key and value for the genres
  for (const [key, value] of Object.entries(genre)) {
    // push the total into the array with the name and count 
    count.push({
      'name' : key,
      'count' : value
    }); 
  }
  // sort the new array 
  count.sort((a,b) => b.count - a.count);
  // slice it to only show five
  return count.slice(0, 5);
}

// function to get most popular books ranked
function getMostPopularBooks(books, count=5) { 
  // using the map function on books to get the book title and the total of borrows on each
  const borrow = books.map(book => ({name: book.title, count: book.borrows.length}));
  // sort the borrows from most to least
  borrow.sort((a,b) => b.count - a.count);
  //return the books with the titles and the 5 top books 
  return borrow.slice (0 ,count);
}

// function to get most popular author by how many of their books were borrowed
function getMostPopularAuthors(books, authors,) {
  // declare popAuthor to authors.map 
  const popAuthor = authors.map(author => ({
    ...author,
    // filter through books for matching book author id and the author id
    bookTotal: books.filter(book => book.authorId === author.id).length,
    //filer through the books for matching book author but reduce to get a number
    borrowTotal : books.filter(book => book.authorId === author.id).reduce((acc, cur) =>
    // establish acc for accumulator and cur as current value, then sort the borrowed total 
    acc + cur.borrows.length, 0) })).sort((b, a) => a.borrowTotal - b.borrowTotal);
    // this will set the length to 5 
    popAuthor.length = 5;
    // this will display the authors first and last name with the borrowed total 
    return popAuthor.map(pa => {
      return {count: pa.borrowTotal, name:pa.name.first + " " + pa.name.last};
    })
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
