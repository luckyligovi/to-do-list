let texBoxValue = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if(texBoxValue.value === ""){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = texBoxValue.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

}

texBoxValue.value = ""

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()

    }
},false)

