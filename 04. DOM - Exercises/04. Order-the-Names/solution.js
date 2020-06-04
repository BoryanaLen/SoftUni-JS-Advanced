function solve() {

    let button = document.getElementsByTagName("article")[0].getElementsByTagName("button").item(0);

    button.addEventListener("click", function (){ 
        let nameToAdd = document.getElementsByTagName("article")[0].getElementsByTagName("input").item(0).value; 
        let ListOfAllLi = document.getElementsByTagName("Li");
        const upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
        
        let firstLetter = nameToAdd.charAt(0).toUpperCase();

        let index = upperCaseAlp.indexOf(firstLetter);

        let currentText = ListOfAllLi[index].textContent;

        let arryOfChars = [];
        for (let index = 0; index < nameToAdd.length; index++) {
            const element = nameToAdd.charAt(index);
            if(index === 0){
                arryOfChars.push(element.toUpperCase());
            }
            else{
                arryOfChars.push(element.toLocaleLowerCase());
            }
        }
        nameToAdd = arryOfChars.join("");
        currentText === "" ? ListOfAllLi[index].textContent = `${nameToAdd}` : ListOfAllLi[index].textContent = `${currentText}, ${nameToAdd}`

        document.getElementsByTagName("article")[0].getElementsByTagName("input").item(0).value = "";
    });

}