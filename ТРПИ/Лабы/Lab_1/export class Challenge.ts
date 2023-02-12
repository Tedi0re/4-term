export class Challenge{
    static solution(number: number){
        let sum : number = 0;
        if (number <= 0 || number == null) return 0;
        for (let index = 0; index < number; index++) {
            if(index % 5 == 0 || index % 3 == 0) 
            {
              
                sum += index;
            }
            
        }
        return sum;
    }
}