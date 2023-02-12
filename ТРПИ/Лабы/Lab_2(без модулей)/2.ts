abstract class abstractShoes{
    //поля объекта
    protected readonly _id        : number;
    protected  readonly _color    : string;
    protected readonly _size      : number;
    protected _cost      : number;
    protected _discount  : number;
    protected _finalCost : number;
    protected _key!      : string;

    //свойства
    public get id() : number{
        return this._id;
    }

    public get color() : string{
        return this._color;
    }

    public get size() : number{
        return this._size;
    }

    public get cost() : number{
        return this._cost;
    }

    public get discount() : number{
        return this._discount;
    }

    public get getFinalCost() : number{
        return this._finalCost;
    }

    public set setFinalCost(finalCost : number){
        this._finalCost = finalCost;
        this._discount = finalCost/this._cost ;
    } 

    public get key() : string{
        return this._key;
    }

    //конструкторы
    public constructor(id : number, color = "undefined", size = 0, cost = 0, discount = 0, ){
        this._id = id;
        this._color = color;
        this._size = size;
        this._cost = cost;
        this._discount = discount;
        this._finalCost = cost*discount;   
    }
    static poolId = new Array();//пул хранения id 
    //служебные методы
    protected static initializePoolId() : Array<number>{
        //let storagePool : Array<number> = new Array();
        for(let i = 0; i <=100; i++){
            //storagePool.push(i);    
            this.poolId.push(i);
        } 
        return this.poolId;
    }
}

class Boots extends abstractShoes{

    
    public constructor(color = "undefined", size = 0, cost = 0, discount = 0){

    if(Boots.poolId.length == 0){
            Boots.initializePoolId();
            console.log("Boots id")
        }

        super(Boots.poolId.shift(),color, size, cost, discount);
        this._key = Boots.name;
    }
}

class Sneakers extends abstractShoes{
   
    static poolId = new Array();//пул хранения id

    public constructor(color = "undefined", size = 0, cost = 0, discount = 0){

    if(Sneakers.poolId.length == 0){
            Sneakers.initializePoolId();
            console.log("Sneakers id")
        }

        super(Sneakers.poolId.shift(), color, size, cost, discount);
        this._key = Sneakers.name
    }
}

class Sandals extends abstractShoes{
  
    static poolId = new Array();//пул хранения id

    public constructor(color = "undefined", size = 0, cost = 0, discount = 0){

        if(Sandals.poolId.length == 0){
            Sandals.initializePoolId();
            console.log("Sandals id")
        }
        
        
        super(Sandals.poolId.shift(),color, size, cost, discount);
        this._key = Sandals.name;
    }
}

class Shoes{

    public shoes : Map<string,Array<abstractShoes>>; 

    public constructor(){
        this.shoes = new Map();
    }

    public add(shoes : Sneakers | Sandals | Boots) : void{
        console.log("добавление объекта");
        if(this.shoes.size == 0){
            this.shoes.set(shoes.key, new Array<abstractShoes>(shoes));
            console.log("Добавлен первый объект!");
            return;
        }
        else{
            for(let container of this.shoes){
                console.log("добавление объекта...");
                if(shoes.key === container[0]){
                    container[1].push(shoes);
                    console.log("в существующую катергорию");
                    return;
                }
            }
            this.shoes.set(shoes.key, new Array<abstractShoes>(shoes));
            console.log("в несуществующую категорию");
       }
        
    }
    

    public filterByCostOrSize( category : string, min : number, max : number) : Shoes{
        let filtered = new Shoes();
        switch (category){
            case "cost":{
                for(let type of this.shoes){
                    for(let item of type[1]){
                        if(item.cost >= min && item.cost <= max ){
                            filtered.add(item);
                        }
                    }
                }
                return filtered;
            }
            case "size":{
                for(let type of this.shoes){
                    for(let item of type[1]){
                        if(item.size >= min && item.size <= max ){
                            filtered.add(item);
                        }
                    }
                }
                return filtered;
            }
           
        }

        throw new Error("Нет такой категории");
        
    }

    public filterByColor(color : string){
        let filtered = new Shoes();
        for(let type of this.shoes){
            for(let item of type[1]){
                if(item.color === color){
                    filtered.add(item);
                }
            }
        }
        return filtered;
    }
}

class products{
   public shoes : Shoes;

   public constructor(){
    this.shoes = new Shoes()
   }
}



//let sandals1 = new Sandals();
let sandals2 = new Sandals("s", 10, 100, 0.1);
let boots1 = new Boots("c", 12,30,0);
let boots2 = new Boots("s", 9, 120, 0.2);
let sneakers1 = new Sneakers("s", 20, 150, 0.2);
let sneakers2 = new Sneakers();
let roducts = new products();

//sandals2.id = 123;

roducts.shoes.add(boots2);
roducts.shoes.add(boots1);
roducts.shoes.add(sandals2);
roducts.shoes.add(sneakers1);

//shoes.add(sneakers1);
//shoes.add(sneakers2);
for(let type of roducts.shoes.shoes){
    console.log("---1---")
    for(let item of type[1]){
        console.log("====2====")
        console.log(item);
    }
}

let a : Shoes =  roducts.shoes.filterByColor("s");
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")
for(let type of a.shoes){
    console.log("---1---")
    for(let item of type[1]){
        console.log("====2====")
        console.log(item);
    }
}
console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
let b : Shoes =  roducts.shoes.filterByCostOrSize("cost", 0,125);
for(let type of b.shoes){
    console.log("---1---")
    for(let item of type[1]){
        console.log("====2====")
        console.log(item);
    }
}
console.log("cccccccccccccccccccccccccccccccccccc")
let c : Shoes =  roducts.shoes.filterByCostOrSize("size", 0,10);
for(let type of c.shoes){
    console.log("---1---")
    for(let item of type[1]){
        console.log("====2====")
        console.log(item);
    }
}

