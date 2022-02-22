function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1: -1 );
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  const numberOfBorrows = books.reduce((acc, curr) => {
    curr.borrows.forEach((borrowObj) => {
      if (borrowObj.id === account.id){
        acc++;
      }      
    });
    return acc;
  }, 0);
  return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
