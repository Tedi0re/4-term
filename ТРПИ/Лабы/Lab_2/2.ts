import { Sandals, Boots, Sneakers } from "D:/ТРПИ/Лабы/Lab_2/classesShoes";
import { products } from "D:/ТРПИ/Лабы/Lab_2/products";

//let sandals1 = new Sandals();
let sandals2 = new Sandals();
let boots1 = new Boots();
let boots2 = new Boots();
let sneakers1 = new Sneakers();
let sneakers2 = new Sneakers();
let roducts = new products();

roducts.shoes.add(boots2);
roducts.shoes.add(boots1);
roducts.shoes.add(sandals2);

//shoes.add(sneakers1);
//shoes.add(sneakers2);
for(let type of roducts.shoes.shoes){
    console.log("---1---")
    for(let item of type[1]){
        console.log("====2====")
        console.log(item);
    }
}