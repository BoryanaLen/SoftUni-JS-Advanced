(function stringExtension(){
    String.prototype.ensureStart = function (str) {
        let start = this.substring(0, str.length);
        if( start !== str){
            return str + this;
        }
        return this.toString();
    };
    String.prototype.ensureEnd  = function (str) {
        let end = this.substring(this.length - str.length);
        if( end !== str){
            return this + str;
        }
        return this.toString();
    };
    String.prototype.isEmpty   = function () {
        if(this.length > 0){
            return false;
        }
        return true;
    };
    String.prototype.truncate  = function (n) {      
        let stringLength = this.length;

        if( n < 4){
            return '.'.repeat(n);
        }

        if(stringLength > n){
            if(this.indexOf(" ") !== -1){
                let arr = this.split(" ");
                let res = [];
                
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    let resLength = res.reduce((a, b) => a + b.length, 0);
                    if((resLength + element.length) <= n - index - 3){
                        res.push(element);
                    }
                }
                let stringText = res.join(" ");
                return stringText.substring(0, stringText.length) + "...";
            }
            else {
                return this.substring(0, n -3 ) + "...";
            }
        }        
        else{
            return this.toString();
        }
    };
   
    String.format = function(text, ...params){
        let arr = [...params];
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            let replaceValue = `{${index}}`;
            text = text.replace(replaceValue, element);
        }
        return text
    };
       
})();


let str = 'quick brown fox jumps over the lazy dog';
//str = str.ensureStart('my');
str = str.ensureStart('the ');
str = str.ensureStart('the ');
console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox','quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}','dog');
// console.log(str);
