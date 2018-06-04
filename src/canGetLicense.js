// canGetLicense(license, age) är en funktion som svarar på frågan: är jag tillräckligt gammal för att ta ett körkort av en viss typ?
// Om båda parametrarna har tillåtna värden så ska funktionen returnera antingen true eller false. Annars ska funktionen kasta ett Error med throw.
// Tillåtna värden på license är alla strängar som matchar en licenstyp i tabellen nedan.
// Tillåtna värden på age är alla åldrar som är ett Number i intervallet 0 <= x <= 120.

function canGetLicense(license, age){
  if((age > 120) || (age < 0)){
    throw new Error('You are probably too old/young');
  }
  switch(license){
    case "A":
    case "D":
      return ((Number(age)>=24) ? true : false);
    case "B":
    case "BE":
      return ((Number(age)>=18) ? true : false);
    case "C":
      return ((Number(age)>=21) ? true : false);
    default:
      throw new Error('Bad parameter')
  }
}
export {canGetLicense};
