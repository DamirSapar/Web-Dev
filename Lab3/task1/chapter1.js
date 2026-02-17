//Task 1
/* <!DOCTYPE html>
<html>

<body>

  <script>
    alert( "I'm JavaScript!" );
  </script>

</body>

</html>
*/

//Task 2
/*
let admin, name; 

name = "John";

admin = name;

alert( admin ); 
*/

//Task 3
/*
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya
*/

//Task 4
/*
let name = prompt("What is your name?", "");
alert(name);
*/

//Task 5
/*
let a = 1, b = 1;

alert( ++a ); 
alert( b++ ); 

alert( a ); 
alert( b );
*/

//Task 6
/*
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
*/

//Task 7
/*
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
*/

//Task 8
/*
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
*/

//Task 9
/*
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
*/

//Task 10
/*
function min(a, b) {
  return a < b ? a : b;
}
*/

//Task 11
/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
*/