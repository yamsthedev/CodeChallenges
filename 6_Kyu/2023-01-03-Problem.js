// 6 Kyu Problem - January 3rd 2023
// Easy Balance Checking
// Regexp, .replace(), .split(), .filter(), Number.toFixed(), Number(), .join(), parseFloat(), .push(), .unshift(), rest parameter, .trim(), function in function, unary plus operator 

/*
You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes
See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without traling 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.
*/

// Regexp, .replace(), .split(), .filter(), Number.toFixed(), Number(), .join()
function balance(book) {
  let cleanBook = book.replace(/[^a-zA-Z0-9. \n]/g, "").split("\n").filter(e => e !== "")
  
  let originalBalance = +cleanBook[0]
  let beginBalance = +cleanBook[0]
  
  let ccBook = cleanBook.map((e,i,a) => {
    if(i == 0) return `Original Balance: ${Number(e).toFixed(2)}`
    let arr = e.split(" ")
    arr[2] = Number(arr[2]).toFixed(2)
    originalBalance -= Number(arr[arr.length-1]).toFixed(2)
    return `${arr.join(" ")} Balance ${originalBalance.toFixed(2)}`
  })
  
  let totalExp = (beginBalance - originalBalance).toFixed(2)
  let avgExp = (totalExp/(ccBook.length - 1)).toFixed(2)
  
  let ans = ccBook.join("\r\n")
  
  return `${ans}\r\nTotal expense  ${totalExp}\r\nAverage expense  ${avgExp}`
}

// Alternative Answer
// parseFloat(), .push(), .unshift(), rest parameter, .trim()
function balance(book) {

  let totalExpense = 0
  , [ originalBalance, ...entries ] = book
    .trim()
    .replace(/[^a-z0-9\s.]+/gi, '')
    .replace(/\s{2,}/g, m => m[0])
    .split(/\n/);

  originalBalance = parseFloat(originalBalance);

  entries = entries.map(row => 
    row.replace(/\S+$/g, m => {
      totalExpense += parseFloat(m);
      return parseFloat(m).toFixed(2) + ' Balance ' + (originalBalance - totalExpense).toFixed(2);
    })
  );

  entries.unshift('Original Balance: ' + originalBalance.toFixed(2));
  entries.push('Total expense  ' + totalExpense.toFixed(2));
  entries.push('Average expense  ' + (totalExpense / (entries.length - 2)).toFixed(2));
  return entries.join("\r\n");
}

// Alternative Answer
// .filter(), function in function, unary plus operator 
function balance(book) {
  const round=x=>Number(x).toFixed(2);
  book=book.split("\n").filter(Boolean).map(x=>x.replace(/[^a-z0-9.]/gi," ").split(" ").filter(Boolean));
  var balance=book[0];
  var totalExpence=0;
  var result=["Original Balance: "+round(balance)];
  book.forEach((x,i)=>{
    if(i>0){
      totalExpence+=Number(book[i][2]);
      balance-=Number(book[i][2])
      result.push(book[i][0]+" "+book[i][1]+" "+round(book[i][2])+" Balance "+round(balance));
    }
  });
  result.push("Total expense  "+round(totalExpence));
  result.push("Average expense  "+round(totalExpence/(book.length-1)));
  return result.join("\r\n");
}