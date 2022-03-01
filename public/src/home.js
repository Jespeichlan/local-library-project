function getTotalBooksCount(books) {
  const totalBooks = books.length;
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  const totalAccounts = accounts.length;
  return totalAccounts;
}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  for (let author of authors){
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books){
      if (author.id === book.authorId){
        count += book.borrows.length;
      }
    }
    const authorObj = {name :authorName, count: count};
    popularAuthors.push(authorObj);
  }
}



function topFive(array){
  let result = array.sort((countA, countB) => (countA.count < countB.count ? 1: -1)).slice(0,5);
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
