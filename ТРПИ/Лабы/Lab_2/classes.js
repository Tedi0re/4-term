import { abstractShoes } from "./abstarctShoes";
class Boots extends abstractShoes {
    constructor(color = "undefined", size = 0, cost = 0, discount = 0) {
        if (Boots.poolId.length == 0) {
            Boots.initializePoolId();
            console.log("Boots id");
        }
        super(Boots.poolId.shift(), color, size, cost, discount);
        this._key = Boots.name;
    }
}
class Sneakers extends abstractShoes {
    constructor(color = "undefined", size = 0, cost = 0, discount = 0) {
        if (Sneakers.poolId.length == 0) {
            Sneakers.initializePoolId();
            console.log("Sneakers id");
        }
        super(Sneakers.poolId.shift(), color, size, cost, discount);
        this._key = Sneakers.name;
    }
}
Sneakers.poolId = new Array(); //пул хранения id
class Sandals extends abstractShoes {
    constructor(color = "undefined", size = 0, cost = 0, discount = 0) {
        if (Sandals.poolId.length == 0) {
            Sandals.initializePoolId();
            console.log("Sandals id");
        }
        super(Sandals.poolId.shift(), color, size, cost, discount);
        this._key = Sandals.name;
    }
}
Sandals.poolId = new Array(); //пул хранения id
class Shoes {
    constructor() {
        this.shoes = new Map();
    }
    add(shoes) {
        console.log("добавление объекта");
        if (this.shoes.size == 0) {
            this.shoes.set(shoes.key, new Array(shoes));
            console.log("Добавлен первый объект!");
            return;
        }
        else {
            for (let container of this.shoes) {
                console.log("добавление объекта...");
                if (shoes.key === container[0]) {
                    container[1].push(shoes);
                    console.log("в существующую катергорию");
                    return;
                }
            }
            this.shoes.set(shoes.key, new Array(shoes));
            console.log("в несуществующую категорию");
        }
    }
    filterByCostOrSize(obj, category, min, max) {
        let filtered = new Shoes();
        switch (category) {
            case "cost": {
                for (let type of obj.shoes) {
                    for (let item of type[1]) {
                        if (item.cost >= min && item.cost <= max) {
                            filtered.add(item);
                        }
                    }
                }
                return filtered;
            }
            case "size": {
                for (let type of obj.shoes) {
                    for (let item of type[1]) {
                        if (item.size >= min && item.size <= max) {
                            filtered.add(item);
                        }
                    }
                }
                return filtered;
            }
        }
        throw new Error("Нет такой категории");
    }
    filterByColor(obj, color) {
        let filtered = new Shoes();
        for (let type of obj.shoes) {
            for (let item of type[1]) {
                if (item.color === color) {
                    filtered.add(item);
                }
            }
        }
        return filtered;
    }
}
// export class Products{
//    shoes? : Shoes;
// }
//let sandals1 = new Sandals();
let sandals2 = new Sandals();
let boots1 = new Boots();
let boots2 = new Boots();
let sneakers1 = new Sneakers();
let sneakers2 = new Sneakers();
let shoes = new Shoes();
//shoes.add(sandals1);
shoes.add(boots2);
shoes.add(sandals2);
shoes.add(boots1);
//shoes.add(sneakers1);
//shoes.add(sneakers2);
for (let type of shoes.shoes) {
    console.log("---1---");
    for (let item of type[1]) {
        console.log("====2====");
        console.log(item);
    }
}
