//Simulate a register
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

const round = (x, n = 2) => Math.round(x * 10 ** n) / 10 ** n;  //solve issues with JS saving the floats as an estimate in the memory and get wrong results

function checkCashRegister(price, cash, cid) {

  const statusReturn = (state, change) => {
    let status = !state ? 'CLOSED' : state === 1 ? 'OPEN' : 'INSUFFICIENT_FUNDS';
    return {
      'status': status,
      'change': change
    };
  }

  //value of coins
  const coinsValue = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  //calculate the ammount of each coin
  /* const moneyValue = coinsValue.map((coin,index) => {
    if (index<=4) return cid[index][1]/coin;
    else return coin*cid[index][1]});
  console.log('Ammount in coins',moneyValue); */

  //calculate the total cid ammount
  const totalCid = cid.reduce((accum, value) => {
    return round(accum + value[1]);
  }, 0)
  console.log('Total ammount in USD', totalCid);

  //calculate change ammount in usd
  let changeValue = cash - price;
  console.log('Change in USD', changeValue);

  if (totalCid === changeValue) return statusReturn(0, cid); //check for CLOSED
  else if (totalCid < changeValue) return statusReturn(503, []); //check for not enough money in register
  else {
    let changeArray = [];
    for (let i = cid.length - 1; i >= 0; i--) { //start from bigger currencies (we could also reverse the array)
      let partialChange = Math.floor(changeValue / coinsValue[i]); //how many times the change fits in this category "change it would want"
      partialChange *= coinsValue[i]; //get change we "would want" from this coin value
      if (partialChange) { //if it "fits"
        if (partialChange >= cid[i][1]) { //change is more than we have available -> push available
          changeArray.push(cid[i]);
          changeValue -= cid[i][1];
        } else { //push change up to what we have available that is *times of the coin value
          changeArray.push([cid[i][0], partialChange]);
          changeValue -= partialChange;
        }
        changeValue = round(changeValue);
      }
    }
    if (changeValue) return statusReturn(503, []); // !==0 after the execution of all currency units -> insufficient register cash
    return statusReturn(1, changeArray); //success to return change -> OPEN
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));