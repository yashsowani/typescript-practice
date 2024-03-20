When we execute "tsc filename" command, it transpiles the file into an equivalent .js file

If the system gives an error saying that running scripts is disabled on the system, you can open powershell and run the following command as an admin:
"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned"

Otherwise, just run the command using npx i.e "npx tsc filename"

export {} // This command helps us to get rid of the block scope squiglly line

Type Inference : TS is smart enough to know when you are assigning a value to a variable, for eg: string or number. So, its not mandatory to explicitly give a type to that variable.

For Functions, try to pass the data type to the arguments, assign some default value if needed.

Functions can have void type where its not returning anything and a type called "never" when we are throwing an exception or terminate execution of the program. Never also appears when there's nothing left in a union.

We can also have an object with different key pairs in the function return type.
one disadvantage is we store the object properties in a variable and pass the variable to the function, it doesnt give an error. For that, use Type aliases.

Type aliases :
So, whenever we are passing an object to a function, Let's say we have a user that has some fields fetching from database like name, email, isPaid etc, what we do is create a type of that user with all those properties and then pass it to the function with the type inference.

For eg : type User = {
    name : string,
    email : string,
    isPaid : boolean
}

function createUser(user : User){} // here we have type inferenced it to receive a User of that kind.

There is a keyword called "readonly" that we use for a key of the type alias to not manipulate the value of that key once assigned.
"?" in front of the key allows us to have that key when we are creating a new object as optional.

We can have multiple type alias and use it to create a new type that includes both using "&"

To have an array, we do : let heros : string[]=  [];
Another way to achive this is, let heros : Array<string> = [];
ReadonlyArray is there too.

Union types : Suppose we dont know what datatype we should have for our variable or function, we can us the pipe operator "|" to have multiple data types instead of assigning any to it.

To have multiple types in arrays, we should use paranthesis:
Eg: const data: (string | number | boolean) [] = ["1", 2 , true];

Literal type of assignment is if we need only one value to have it instead of maniuplating.
For eg - let pi: 3.14 = 3.14
pi = 3.145 // This is an error as we cannot reassign it.

Tuple is all about restricting us so that we have order in the data.
// Tuple Example
let user : [number, string] = [1, "yash"] // Tuple are indiacted using [] brackets and only allows the number of elements equal to the data type specified to be passed. Also, Tuples are mutable in ts.

user.push("jim"); // Non sensical behavior as array methods are allowed on it and then we can have more elements.

ENUMS in TS are similiar to Java.
eg :
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
} 

One thing to note here it starts counting values for it from 0 to upwards, if we assign a value to AISLE lets say 22, then the next choices will continue the coundt forward and we can have string then all other values should be filled in too.


Interface: 
You can see that when you pass a function with an argument in your interface definition, you dont need to have the same key for that argument in the instantiation.

The main Difference between Interface and type is Interface has a concept called as "Reopening of Interface", where we can define the Inteface again to add more fields which is not possible in type alias.
One more thing we can do is "extend" some other interface or class to have those fields and add yours, this is however achievable in type using "&"

To Setup a ts config file, use "npx tsc --init", we always have a src folder and dist folder. Inside dist folder we have the real emmited js files that we have to point out in the tsc config file's outDir key.
when we run "npx tsc -W", we get the tsc file run and emit the js equivalent into our emitted directory which is dist.

In classes, if we mark a data member as private, its not accesible outside the class.

Interview question - In typescript, a setter should not have any return type mentioned as it's accessing a class element.

If we are extending a class then its private members cannot be accessed, what we can do is declare them protected so that whatever class extends the base class, it can access it.

Generics is basically providing a type to pass as a parameter and logged in the type for the output too. That's what makes it different from any.

Eg - function gen<Type> (val : Type) : Type {
    return val;
}

<T,> is a valid syntax to indicate that it's a generic type.

We can also extend a generic lile <T extends number> but honestly it doesn't make any sense.

typeof (type Guards) is basically providing an extra layer of checking when you are using multiple data types.

Type predicates - refer code : // as keyword is used to somewhatt typecast.

Discriminated union is many interfaces or type having same keys.
Exhaustiveness is using never for default case.



