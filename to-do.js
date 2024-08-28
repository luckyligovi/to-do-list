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
    }

    texBoxValue.value = ""

}
