function GreatestCommonDivisor(x, y){

    while(y) {
        let t = y;
        y = x % y;
        x = t;
      }
     
      console.log(x);
}	

//GreatestCommonDivisor(15, 5);
//GreatestCommonDivisor(2154, 458);