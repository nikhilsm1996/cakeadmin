export class Product{
    public name : string;
    public category:string;
    public recipes:string;
    public description : string;
    public imagePath : string;
    public price:number;
    public stocks:number;
    public quantity:string;
    constructor(name:string,category:string,recipes:string, desc:string, imagePath:string,price:number,stocks:number,quantity:string){
        this.name = name;
        this.category = category;
        this.recipes=recipes;
        this.description = desc;
        this.imagePath = imagePath;
        this.price=price;
        this.stocks=stocks;
        this.quantity=quantity;
    }
}