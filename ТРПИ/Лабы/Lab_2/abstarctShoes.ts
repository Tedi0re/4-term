export class abstractShoes{
    //поля объекта
    protected _id        : number;
    protected  _color    : string;
    protected _size      : number;
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