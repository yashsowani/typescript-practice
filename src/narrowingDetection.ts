
function detectType (val : number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }

    return val + 2;
}

function checkNull (val : string | null){
     if(!val){
        console.log("Enter some val");
        return;
     }
     return val.toLowerCase();
}

function printAll(strs : string | string[] | null){

    if(strs){ // checking null
       if(typeof strs=== "object"){
            for(const s of strs){
                console.log(s);          
            }
       }
       else if(typeof strs === "string"){
        return "yeah";
       }     
    }
} // edge case being it's an empty string.


// in keyword for type and interface
interface user{
    name: string,
    email:string
}


interface admin{
    username: string,
    email: string,
    isAdmin : boolean
}

function DetermineAdmin(account : user | admin){
    if("isAdmin" in account){
        return account.email
    }
}

//instanceof
function getInstance (val : Date | string){
    if(val instanceof Date){
        console.log(val.toUTCString());
    }
    else{
        console.log(val.toLowerCase());
        
    }
}

//type predicates - tricky
// as keyword is used to somewhatt typecast.

type Fish = { swim : () => void}
type Bird = { fly : () => void}

function isFish(pet : Fish | Bird) : pet is Fish{
    return (pet as Fish).swim() !== undefined;
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet 
        return "Fish Food";
    }
    else{
        pet
        return "Bird Food";
    }
}


// Discriminated union

interface Circle {
    kind: "circle",
    radius: number 
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    breadth : number
}

type Shape = Circle | Square | Rectangle

function getShape(shape : Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2; 
    }
}

// Type Exhuastivness - Exhaustiveness is using never for default Case.

function getArea(shape : Shape){

    switch(shape.kind){

        case "circle":
            return Math.PI * shape.radius ** 2; 

        case "square":
            return shape.side * shape.side;
        
        case "rectangle":
            return shape.length * shape.breadth;   
            
        default:
            const _exhaustiveCheck : never = shape;
            return _exhaustiveCheck;
    }
}



