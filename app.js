// Comparison Operators

// Equal(==)
// Tjekker om 2 værdier er ens, og udfører typekonvertering hvis operators er af forskellige typer
5 == '5'//true
10 == 10//true

//Strict Equal (===)
// Tjekker om 2 værdier er ens og af samme type
5 === '5' //Not true
10 === 10 // true

// Not Equal (!=)
// Tjekker om 2 værdier ikke er ens og udfører typekonvertering hvis operators er forskellige typer
5 != '5' // False
10 != 5 //True

// Strict Not Equal (!==)
//Tjekker om 2 værdier ikke er ens, og tjekker om både værdien og typen af operator er anderledes
5 !== '5' //True
10 !== 5 //True

// Greater Than (>)
// Tjekker om den ene værdi er højere end den anden
10 > 5 //True
5 > 10 //False

// Less Than (<)
//Tjekker om den ene værdi er mindre end den anden
10 < 5 // False
5 < 10 // True

// Greater than or equal to (>=)
// Tjekker om den ene er større end eller lig med den anden
10 >= 10 //True
5 >= 10 // False

// Less than or equal to (>=)
// Tjekker om den ene er mindre end eller lig med den anden
10 <= 10 //True
5 <= 10 // True

// Logic Operators

// AND (&&)
// Returnerer sandt hvis begge udsagn er sande
true && true; // True
false && false; // True
false && true; // false

// OR (||)
// Returnerer sandt hvis mindst et af udsagnene er sande
true || false; // True
true || true; // True
false || false; // False

// NOT (!)
// Returnerer sandt hvis udsagnet er falsk eller omvendt
!true; //False
!false; //True