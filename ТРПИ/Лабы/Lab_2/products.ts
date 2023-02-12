import { Shoes } from "./classesShoes";
export {};

export class products{
   public shoes : Shoes;

   public constructor(){
    this.shoes = new Shoes()
   }
}