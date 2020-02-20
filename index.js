//this is a random transaction creator for the Klarna Coding Test
// feel free fork this "project"
const Transaction = require('./transaction-model');

var transactions = []
var width = 100;
var count = 0;

while(count < width) {
  transactions.push(genTransactionJson(transactions.length))
  count++;
}
console.log(transactions);

function genTransactionJson(lastID = 0, transaction = new Transaction(lastID)) {
  return {
    id: transaction["_id"],
    sourceAccount: transaction["_sourceAccount"],
    targetAccount: transaction["_targetAccount"],
    amount: transaction["_amount"],
    category: transaction["_category"],
    time: transaction["_time"]
  }
} 