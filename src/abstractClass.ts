abstract class Photo {
    constructor(public camera: string, public burst: number){}

    abstract getImg() : void

    getTime() : number{
        return 2;
    }
}

class Ig extends Photo{
    constructor(public camera: string, public burst: number, public filter: string){super(camera, burst)}

    getImg(): void {
        console.log("Hey");    
    }
}

const ig1 = new Ig("nikon", 10, "ab");
ig1.getTime();


