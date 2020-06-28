function solve() {
    let allInputs = Array.from(document.querySelectorAll("#container input"));
    let addButton = document.querySelector("#container button");
    let output = document.querySelector("#adoption ul");
    let newOwnerOutput =document.querySelector("#adopted ul");

    addButton.addEventListener("click", add);

    function add(event){
        event.preventDefault();
        let name = allInputs[0].value;
        let age = Number(allInputs[1].value);
        let kind = allInputs[2].value;
        let owner = allInputs[3].value;

        if(name !== "" && !isNaN(age) && Number(age) > 0 && kind !== "" && owner !== ""){
            let newLi = document.createElement("li");
            let paragraph = document.createElement("p");
            let strongName = document.createElement("strong");
            strongName.textContent = name;
            paragraph.appendChild(strongName);
            let textOne = document.createTextNode(" is a ");
            paragraph.appendChild(textOne);
            let strongAge = document.createElement("strong");
            strongAge.textContent = age;
            paragraph.appendChild(strongAge);
            let textTwo = document.createTextNode(" year old ");
            paragraph.appendChild(textTwo);
            let strongKind = document.createElement("strong");
            strongKind.textContent = kind;
            paragraph.appendChild(strongKind);
            newLi.appendChild(paragraph);

            let span = document.createElement("span");
            span.textContent = `Owner: ${owner}`;
            newLi.appendChild(span);

            let button = document.createElement("button");
            button.textContent = "Contact with owner";
            button.addEventListener("click", () => {
                button.remove();
                let newDiv = document.createElement("div");
                let input = document.createElement("input");
                input.placeholder = "Enter your names";
                newDiv.appendChild(input);
                let newButton = document.createElement("button");
                newButton.textContent = "Yes! I take it!";
                newButton.addEventListener("click", () => {
                   span.remove();
                   newDiv.remove();
                   let newName = input.value;
                   if(newName !== ""){
                    let spanNewOwner = document.createElement("span");
                    spanNewOwner.textContent = `New Owner: ${newName}`;
                    newLi.appendChild(spanNewOwner);
                    let checkedButton = document.createElement("button");
                    checkedButton.textContent = "Checked";
                    checkedButton.addEventListener("click", () => {
                        newLi.remove();
                    })
                    newLi.appendChild(checkedButton);
 
                    newOwnerOutput.appendChild(newLi);
                   }
                })
                newDiv.appendChild(newButton);
                newLi.appendChild(newDiv);
            })
            newLi.appendChild(button);
            output.appendChild(newLi);

            allInputs[0].value = "";
            allInputs[1].value = "";
            allInputs[2].value = "";
            allInputs[3].value = "";
        }
    }
}

