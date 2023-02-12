export class abstractShoes {
    //свойства
    get id() {
        return this._id;
    }
    get color() {
        return this._color;
    }
    get size() {
        return this._size;
    }
    get cost() {
        return this._cost;
    }
    get discount() {
        return this._discount;
    }
    get getFinalCost() {
        return this._finalCost;
    }
    set setFinalCost(finalCost) {
        this._finalCost = finalCost;
        this._discount = finalCost / this._cost;
    }
    get key() {
        return this._key;
    }
    //конструкторы
    constructor(id, color = "undefined", size = 0, cost = 0, discount = 0) {
        this._id = id;
        this._color = color;
        this._size = size;
        this._cost = cost;
        this._discount = discount;
        this._finalCost = cost * discount;
    }
    //служебные методы
    static initializePoolId() {
        //let storagePool : Array<number> = new Array();
        for (let i = 0; i <= 100; i++) {
            //storagePool.push(i);    
            this.poolId.push(i);
        }
        return this.poolId;
    }
}
abstractShoes.poolId = new Array(); //пул хранения id 
