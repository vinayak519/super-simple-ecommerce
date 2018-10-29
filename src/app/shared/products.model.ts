export class productModle{
    public imageLink : string;
    public name : string;
    public price : number;

    constructor (imageLink: string, name: string, price: number ){
        this.imageLink = imageLink;
        this.name = name;
        this.price = price
    }
}