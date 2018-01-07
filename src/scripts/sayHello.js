// ES6 syntax
export let greet = (name) => {
  if ( name === undefined ) {
      return 'Hello, Friend';
  } else {
      return 'Hello, ' + name;
  }  
}

// export function greet(name {
//   if ( name === undefined ) {
//       return 'Hello, Friend';
//   } else {
//       return 'Hello, ' + name;
//   }
// });

// exports.greet = function greet(name) {
//     if ( name === undefined ) {
//         return 'Hello, Friend';
//     } else {
//         return 'Hello, ' + name;
//     }
// };