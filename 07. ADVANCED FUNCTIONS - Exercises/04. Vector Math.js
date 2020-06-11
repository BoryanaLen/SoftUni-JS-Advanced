(function() {
    return{
        add: function(...args){
            return Array.from(arguments).reduce(function (acc, current) {
                current.forEach(function (b, i) {
                    acc[i] = (acc[i] || 0) + b;
                });
                return acc;
            }, []);
        },

        multiply: function(array, scalar){
            return array.map(x => x * scalar);
        },

        length: function(array){
            return Math.sqrt(Math.pow(array[0], 2) + Math.pow(array[1], 2));
        },

        dot: function(...args){
            return arguments[0][0] * arguments[1][0] + arguments[0][1] * arguments[1][1];
        },

        cross: function(...args){
            return arguments[0][0] * arguments[1][1] - arguments[0][1] * arguments[1][0];
        }
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));