// function used to find the account by ID
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id===id); // used .find() method to match the id peramiter with the account  id
  return found 
}

// function used to organize the names by last name
function sortAccountsByLastName(accounts) {
  // using the .sort() method to compare the first letter of each name. 
  //nameA and nameB are peramiters to place 2 names. 
  //nameA.name.last and nameB.name.last is to focus on last names only
  return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last ? 1:-1)); 
}

//function used to get how many borrows each account has
function getTotalNumberOfBorrows(account, books) {
  //turn account.id into an easy variable with accountId
  const accountId = account.id;
  //set a number value, we want a number back
  let total = 0;
  //using the forEach method to go through each object in the array
  //ultimatly to add it into the total for EACH account until it is false
  books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++));
  return total;
}

// function used to see which book is checked out by who and with author embeded
function getBooksPossessedByAccount(account, books, authors) {
  let bookTaken = []; // set an empty array 
  books.forEach(book => { // using forEach method to cycle through all the books
    let borrow = book.borrows; 
    if(borrow.find(borrow => borrow.id === account.id && borrow.returned === false)){ // using an if statement to find if the book has been borrowed and to see if the id matched
      bookTaken.push(book); // pushing all the books into the empty array
    }
  })
  bookTaken.forEach( book =>{ // now using forEach on the array bookTaken
    let author = authors.find(person => person.id === book.authorId); //this if statement to see if the id of the author matches the book borrowed
    book['author']= author; // embeding the author with bracket notation 
  })
  return bookTaken // return the final array
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
