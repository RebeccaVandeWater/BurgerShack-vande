export class Burger {
    constructor(data) {
        this.id = data.id || Math.random()
        this.name = data.name
        this.price = data.price
        this.ingredients = data.ingredients
    }
}