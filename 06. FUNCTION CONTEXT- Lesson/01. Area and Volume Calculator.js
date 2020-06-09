function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {

    class Figure{
        constructor(x, y, z){
            this.x = Math.abs(x);
            this.y = Math.abs(y);
            this.z = Math.abs(z);
            this.GetArea = area;
            this.GetVol = vol;
        }
    }

   let objects = JSON.parse(input);  
   let result = [];

   objects.forEach(element => {
       let fig = new Figure(element.x, element.y, element.z);

       let areaRes = fig.GetArea();
       let volRes = fig.GetVol();

       let newObj = {area: areaRes, volume: volRes }
       result.push(newObj)
   });

   return result;
}

console.log(solve(area, vol, '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]'));
//console.log(solve(area, vol, '[ {"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'));