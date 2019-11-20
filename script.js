// Creare un elenco coi numeri da 1 a 100 in modo che a console compaia Fizz per i multipli di 3, Buzz per i multipli di 5 e FizzBuzz per i multipli di 3 e 5.
//
// //Soluzione con ragionamento
//   for (var i = 1; i <= 100; i++) {
//      // multipli di 3
//      if ([i] % 3 == 0) {
//          console.log('Fizz');
//      }
//      // multipli di 5
//      if ([i] % 5 == 0)  {
//          console.log('Buzz');
//      }
//      // multipli di 3 e 5 (o 15 --> (i % 15 == 0))
//      if (([i] % 5 == 0) && ([i] % 3 == 0))  {
//           console.log('FizzBuzz');
//       }
//      // altri numeri
//      if (([i] % 5 != 0) && ([i] % 3 != 0))  {
//           console.log([i]);
//       }
//  }
//
// //Soluzione con ciclo for
// for (var i=1; i <= 100; i++)
// {
//  // multipli di 3 e 5 (o 15 --> (i % 15 == 0))
//     if (([i] % 5 == 0) && ([i] % 3 == 0))
//         console.log("FizzBuzz");
// // multipli di 3
//     else if (i % 3 == 0)
//         console.log("Fizz");
// //multipli di 5
//     else if (i % 5 == 0)
//         console.log("Buzz");
// // altri numeri
//     else
//         console.log(i);
// }

//Soluzione con ciclo for + switch
for (var x = 1; x <= 100; x++) {
    switch (true) {
// multipli di 3 e 5 (o 15 --> (i % 15 == 0))
    case (x % 5 === 0 && x % 3 === 0):
    console.log("FizzBuzz");
    break;
// multipli di 3
    case x % 3 === 0:
    console.log("Fizz");
    break;
//multipli di 5
   case x % 5 === 0:
   console.log("Buzz");
   break;
// altri numeri
   default:
   console.log(x);
   break;
    }
}
