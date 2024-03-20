// Define a class
// class User {
//     email : string
//     name : string
//     readonly city : string = "Mumbai"
//     constructor(email : string, name : string) {
//         this.email = email;
//         this.name = name;
//     }
// }


//other way to do the above
// class User {    

//     readonly city : string = "Mumbai"
//     constructor(public email : string, public name: string, private userId: string = "22"){}
// }

// getters and setters
class User { 
    
    private _count: number = 1;

    readonly city : string = "Mumbai"
    constructor(public email : string, public name: string, private userId: string = "22"){}

    private getToken() : void{
        console.log("Token deleted");
    }

    get getEmail() : string {
        return `Email is ${this.email}`
    }

    get UserCount() : number {
        return this._count;
    }

    set UserCount(num) {    // setter function doesnt have a return data type
        this._count = num;
    }


}

// class subUser extends User{
//     isFamily : boolean = true;

//     changeCount(){
//         this._count = 4; // If the _count property was protected, it could access it.
//     }
// }


const us1 = new User("y@y.com", "yash")
// us1.getToken()  // not allowed as it cannot access a private property
us1.UserCount = 2;
