function solve() {
    let buttonAdd = document.getElementById("add");   
    let openArticlesOutput = (Array.from(document.querySelectorAll(".wrapper section"))[1].children[1]);
    let inProgressArticlesOutput = (Array.from(document.querySelectorAll(".wrapper section"))[2].children[1]);
    let cpmpleteArticlesOutput = (Array.from(document.querySelectorAll(".wrapper section"))[3].children[1]);


    buttonAdd.addEventListener("click", addArticle);
    openArticlesOutput.addEventListener("click", start);
    inProgressArticlesOutput.addEventListener("click", complete);

    function addArticle(event){

        event.preventDefault();

        let task = document.getElementById("task").value;
        let description = document.getElementById("description").value;
        let dueDate = document.getElementById("date").value;

        if(task !== "" && description !== "" && dueDate !== ""){
            let newArticle = document.createElement("article");

            let articleH3 = document.createElement("h3");
            articleH3.textContent = task;
            newArticle.appendChild(articleH3);

            let articleP1 = document.createElement("p");
            articleP1.textContent = "Description: " + description;
            newArticle.appendChild(articleP1);

            let articleP2 = document.createElement("p");
            articleP2.textContent = "Due Date: " + dueDate; 
            newArticle.appendChild(articleP2);

            let articleDiv = document.createElement("div");
            articleDiv.className = "flex";
            let btnStart = document.createElement("button");
            btnStart.innerHTML = "Start";
            btnStart.className = "green";
            articleDiv.appendChild(btnStart);
            let btnDelete = document.createElement("button");
            btnDelete.innerHTML = "Delete";
            btnDelete.className = "red";
            articleDiv.appendChild(btnDelete);
            newArticle.appendChild(articleDiv);

            openArticlesOutput.appendChild(newArticle);  
            
            event.preventDefault();
        } 
    }

    function start(event){    
        
        event.preventDefault();
        let eventClass = event.target.className;
        let article = event.target.parentNode.parentNode;

        if(eventClass === "green"){
            let clonedArticle = article.cloneNode(true);
            clonedArticle.getElementsByClassName("red")[0].textContent = "Finish";
            clonedArticle.getElementsByClassName("red")[0].className = "orange";
            clonedArticle.getElementsByClassName("green")[0].textContent = "Delete";
            clonedArticle.getElementsByClassName("green")[0].className = "red";

            inProgressArticlesOutput.appendChild(clonedArticle);
            article.remove();
        }
        else if(eventClass === "red"){
           article.remove();
        }

        event.preventDefault();
    }

    function complete(event){
        event.preventDefault();
        let eventClass = event.target.className;
        let article = event.target.parentNode.parentNode;

        if(eventClass === "orange"){
            let clonedArticle = article.cloneNode(true);
            let buttons = clonedArticle.getElementsByClassName("flex")[0];
            buttons.remove();

            cpmpleteArticlesOutput.appendChild(clonedArticle);
            article.remove();
        }
        else if(eventClass === "red"){
           article.remove();
        }

        event.preventDefault();
    }
}