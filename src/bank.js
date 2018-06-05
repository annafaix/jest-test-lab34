/*
Tänk dig att någon har skrivit ett betalningssystem för en bank. Dessvärre tänkte inte första utvecklaren på att använda TDD, så det finns inga testfall. Din uppgift är att skriva testfall för alla tre funktionerna i koden nedan. Observera att första utvecklaren var en total noob, så det kan finnas buggar i koden. På VG-nivå ska du dessutom skriva klart funktionerna och rätta felen.

Allmänt gäller att om funktionerna anropas med tillåtna värden på sina parametrar så ska de åstadkomma side effects på parametrarna. Funktionerna ska inte returnera något.
Men om man försöker ta ut eller överföra mer pengar än det finns på kontot, då ska funktionen kasta ett Error.

let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };
// exempel på användning:
deposit(kalle, 200);
withdraw(kalle, 150);
transfer(kalle, greta, 400);
*/
var state = {
    kalle: {
        name: 'kalle', balance: 0
    },
    greta : {
        name: 'greta', balance: 0
    }
}

function deposit(account, amount) {
    if (isNaN(amount) || amount === Infinity || amount === null)
        throw new Error('error converting to number');
    account.balance += Number(amount);
}
function withdraw(account, amount) {
  if(amount <= 0 ){
    throw new Error('Amount must be a positive number!');
  }else if(isNaN(amount) || (amount === Infinity) || (amount === null) ){
    throw new Error ('Not valid amount parmeter');
  }else if((typeof account !== 'object')|| account.length >= 0){
    throw new Error ('Not valid account parameter')
  }
  else{
    account.balance -= Number(amount);
  }
}

function transfer(accountSender, accountReceiver, amount) {
	if( isNaN(amount)
 			/*|| accountReceiver.balance)*/)
        throw new Error('wrong parameter')
    else if (amount > accountSender.balance || amount <= 0)
        throw new Error('Kalle, you don`t have enough money or you`re trying to steal from someone. We won`t report you this time...')
    else
        accountSender.balance -= Number(amount);
        accountReceiver.balance += Number(amount);
}

export {state, deposit, withdraw, transfer}
