const accountId = 144553
let accountEmail = "nandani@google.com"
var accountPassword = "12345"
accountCity = "Rajkot"
let accountState;

// accountId = 2

accountEmail = "nandu@.com"
accountPassword = "45675"
accountCity = "ghana"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])