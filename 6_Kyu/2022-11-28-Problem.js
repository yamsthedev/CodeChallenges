// 6 Kyu Problem - November 28th 2022
// Salesman's Travel
// .split(), .filter(), .slice(), .map(), .match(), .join(), .replace(), .trim(), template literals, .forEach(), .push(), .indexOf()

/*
A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
*/

function travel(r, zipcode) {
   let arr = r.split(",")
   let filteredHouses = arr.filter(e => e.slice(-8) === zipcode)
   if(filteredHouses.length === 0) return `${zipcode}:/`
   let sortedHousesNum = filteredHouses.map(str => str.match(/^\d+/)).join(",")
   let sortedHousesAddress = filteredHouses.map(str => str.replace(/^\d+/, "").replace(zipcode, "").trim()).join(",")
   return `${zipcode}:${sortedHousesAddress}/${sortedHousesNum}`
}

// .forEach(), .slice(), .trim(), .indexOf(), .join()
function travel(r, zipcode) {
    const addressList = r.split(",");

    const streets = [];
    const numbers = [];

    addressList.forEach(address => {
        let zip = address.slice(-8);
        if (zip === zipcode) {
            let number = address.slice(0, address.indexOf(" ") + 1);
            let street = address.slice(address.indexOf(" "), -8);
            
            streets.push(street.trim());
            numbers.push(number.trim());
        }
    });
    return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`;
}