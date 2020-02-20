
const SourceAccount = ["work", "my_account"];
const TargetAccount = ["coffe_post", "gas_station", "school", "market", "my_account"];
const Categories = ["eating_out", "shopping", "studies", "withdraw", "deposit", "salary"];

function randomSourceAccount() {
  return SourceAccount[Math.floor(Math.random() * 2)];
}

function randomTargetAccount(sourceAccount) {
  let targetAccount = sourceAccount == SourceAccount[0] ? TargetAccount[4] : TargetAccount[Math.floor(Math.random() * 5)];
  return (sourceAccount == SourceAccount[1] && targetAccount == sourceAccount) || (sourceAccount != targetAccount) ? targetAccount : randomTargetAccount(sourceAccount);
}

function randomCategory(sourceAccount, targetAccount) {
  let category = sourceAccount == SourceAccount[0] ? Categories[5] : Categories[Math.floor(Math.random() * 4)];
  return (sourceAccount == SourceAccount[1] && targetAccount == TargetAccount[4] && (category == Categories[3] || category == Categories[4])) || (category == Categories[5]) || (sourceAccount != targetAccount) ? category : randomCategory(sourceAccount, targetAccount);
}

function randomAmount(category) {
  let amount = Math.floor(Math.random() * 999) + 1;

  return category == Categories[4] || category == Categories[5] ? amount : amount * -1;
}

function randomDate(start = new Date('2020/01/01'), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}

class Transaction {
  constructor(lastID = 0) {
    this.id = lastID + 1;
    this.sourceAccount = randomSourceAccount();
    this.targetAccount = randomTargetAccount(this.sourceAccount);
    this.category = randomCategory(this.sourceAccount, this.targetAccount);
    this.amount = randomAmount(this.category);
    this.time = randomDate();
  }

  

  get id() {
    return this._id;
  }

  set id(_id) {
    this._id = _id;
  }

  get sourceAccount() {
    return this._sourceAccount;
  }

  set sourceAccount(_sourceAccount) {
    this._sourceAccount = _sourceAccount;
  }

  get targetAccount() {
    return this._targetAccount;
  }

  set targetAccount(_targetAccount) {
    this._targetAccount = _targetAccount;
  }

  get amount() {
    return this._amount;
  }

  set amount(_amount) {
    this._amount = _amount;
  }

  get category() {
    return this._category;
  }

  set category(_category) {
    this._category = _category;
  }

  get time() {
    return this._time
  }

  set time(_time) {
    this._time = _time;
  }
}

module.exports = Transaction;