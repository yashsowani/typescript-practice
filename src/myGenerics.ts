// const a :Array<String> = []; // To delcare an array


// // Generic Type

// function gen<Type> (val : Type) : Type {
//     return val;
// }

// // We can also define the above as:
// function gen1<T> (val : T) : T {
//     return val;
// }

// // Our own Type Def
// function gen2<Bottle> (val : Bottle) : Bottle {
//     return val;
// }
// interface Bottle{
//     Gym : string,
//     Branch: string
// }

// // with Arrays
// function getProd<T> (product : T[]) : T{
//     return product[3];
// }

// // Arrow function with arrays
// const getMoreProd = <T,>(products : T[]) : T[] => {
//     console.log(products.length);
//     return products;
// } // <T,> is a valid syntax to indicate that it's a generic type.


// // Generic function with extends example

// function GenFun <T, U extends number> (valOne : T, valtwo : U) : object{ // Valid but doesn't make sense.
//     return {
//         valOne,
//         valtwo
//     }
// }

// GenFun("yash", 2);

// // generic Class
// class GenClass <T> {
//     vehicles : T[] = [];

//     addVehicle(val :T){
//         this.vehicles.push(val);
//     }
// }

