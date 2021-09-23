export class Products {
    _id: any;
    id: number;
    name: string;
    description: string;
    price: number;
    units: number;
    constructor(_id: any, id: number, name: string, description: string, price: number, units: number) {
        this._id = _id;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.units = units;
    }

}
