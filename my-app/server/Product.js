module.exports = {
    Product: class {
        id;
        name;
        description;
        price;
        units;
        constructor(id, name, description, price, units) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.units = units;
        }
    }
}
