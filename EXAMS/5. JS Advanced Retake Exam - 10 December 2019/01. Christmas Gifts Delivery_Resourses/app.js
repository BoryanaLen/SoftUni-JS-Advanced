function solution() {
    let sections = document.getElementsByTagName("section");
    let sectionAdd = sections[0];
    let sectionList = sections[1];
    let sentList = sections[2];
    let discardList = sections[3];
    let gifts = [];
 
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", add);
 
    function add(event){
        let input = sectionAdd.getElementsByTagName("input")[0].value;         
        gifts.push(input);
        gifts.sort((a, b) => a.localeCompare(b));
 
        sectionList.querySelector("ul").innerHTML = "";
        gifts.forEach(element => {

            let newLi = document.createElement("li");
            newLi.className = "gift";
            newLi.textContent = element;
            let sendButton = document.createElement("button");
            sendButton.textContent = "Send";
            sendButton.id = "sendButton";
            newLi.appendChild(sendButton);
            let discardButton = document.createElement("button");
            discardButton.textContent = "Discard";
            discardButton.id = "discardButton";
            newLi.appendChild(discardButton);           
            sectionList.querySelector("ul").appendChild(newLi);
           
            sendButton.addEventListener("click", send);
            discardButton.addEventListener("click", discard);
 
            function send(){
                discardButton.remove();
                sendButton.remove();
                sentList.querySelector("ul").appendChild(newLi);
                gifts = gifts.filter(x => x !==  newLi.textContent);
            }
 
            function discard(){
                discardButton.remove();
                sendButton.remove();
                discardList.querySelector("ul").appendChild(newLi);
                gifts = gifts.filter(x => x !== newLi.textContent);
            }

            sectionAdd.getElementsByTagName("input")[0].value = "";
        });
    }
 }