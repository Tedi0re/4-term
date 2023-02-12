import { abstractShoes } from "./abstarctShoes"; 
export {};


export class Boots extends abstractShoes{

    
    public constructor(color = "undefined", size = 0, cost = 0, discount = 0){

    if(Boots.poolId.length == 0){
            Boots.initializePoolId();
            console.log("Boots id")
        }

        super(Boots.poolId.shift(),color, size, cost, discount);
        this._key = Boots.name;
    }
}

export class Sneakers extends abstractShoes{
   
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

export class Sandals extends abstractShoes{
  
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

export class Shoes{

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
    

    public filterByCostOrSize(obj : Shoes, category : string, min : number, max : number) : Shoes{
        let filtered = new Shoes();
        switch (category){
            case "cost":{
                for(let type of obj.shoes){
                    for(let item of type[1]){
                        if(item.cost >= min && item.cost <= max ){
                            filtered.add(item);
                        }
                    }
                }
                return filtered;
            }
            case "size":{
                for(let type of obj.shoes){
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

    public filterByColor(obj : Shoes, color : string){
        let filtered = new Shoes();
        for(let type of obj.shoes){
            for(let item of type[1]){
                if(item.color === color){
                    filtered.add(item);
                }
            }
        }
        return filtered;
    }
}