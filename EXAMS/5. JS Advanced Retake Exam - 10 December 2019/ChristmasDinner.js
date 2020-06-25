class ChristmasDinner{
    constructor(budget){
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget(){
        return this._budget;
    }
    set budget(value){
        if(value < 0){
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    shopping([product]){
        const [type, price] = arguments[0];
        if(price > this.budget){
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`;
    }

    recipes({recipe}){
        let recipeName = arguments[0].recipeName;
        let productsList = arguments[0].productsList;
        let allProductsPresent = true;

        productsList.forEach(prod => {
            if(!this.products.some(p => p === prod)){
                allProductsPresent = false;
            }
        })

        if(!allProductsPresent){
            throw new Error("We do not have this product");
        }

        let meal = {
            recipeName: recipeName, 
            productsList: productsList
        }
        this.dishes.push(meal);

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish){
        if(!this.dishes.some(d => d.recipeName === dish)){
            throw new Error("We do not have this dish");
        }
        if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let result = [];

        for (const key in this.guests) {
            if (this.guests.hasOwnProperty(key)) {
                const dish = this.guests[key];
                let products = this.dishes.find(d => d.recipeName === dish).productsList;
                result.push(`${key} will eat ${dish}, which consists of ${products.join(", ")}`);
            }
        }

        return result.join("\n");

    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
