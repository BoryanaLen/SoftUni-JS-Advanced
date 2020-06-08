function solve() {
    let buttonCheck = document.getElementsByTagName("button")[0];
    let buttonClear = document.getElementsByTagName("button")[1];

    buttonCheck.addEventListener("click", check);
    buttonClear.addEventListener("click", clear);

    function check(){
        let allRows = Array.from(document.querySelectorAll("tbody tr")).map(x => Array.from(x.children));
        let matrix = [];

        let result = true;
        let model = ["1", "2", "3"];

        allRows.forEach(element => {
            let array = element.map(x => x.children[0].value);
            let sortedArray = [...array].sort();

            matrix.push(array);

            if(sortedArray.toString() !== model.toString()){
                result = false;
            }
        });

        for (let index = 0; index < matrix.length; index++) {
            let array = getCol(matrix, index);

            if(array.sort().toString() !== model.toString()){
                result = false;
            }           
        }

        if(result){
            document.getElementsByTagName("table")[0].style.border = "2px solid green";
            document.querySelectorAll("#check p")[0].textContent = "You solve it! Congratulations!";
            document.querySelectorAll("#check p")[0].style.color = "green";
        }
        else{
            document.getElementsByTagName("table")[0].style.border = "2px solid red";
            document.querySelectorAll("#check p")[0].textContent = "NOP! You are not done yet...";
            document.querySelectorAll("#check p")[0].style.color  = "red"; 
        }
    }

    function clear(){
        document.getElementsByTagName("table")[0].style.border = "none";
        document.querySelectorAll("#check p")[0].textContent = "";

        let allCells = Array.from(document.querySelectorAll("tbody tr td"));

        allCells.forEach(element => {
            element.children[0].value = "";
        });

    }

    function getCol( matrix, col){
        var column = [];

        for(var i = 0; i < matrix.length; i++){
           column.push(matrix[i][col]);
        }

        return column;
    }
}