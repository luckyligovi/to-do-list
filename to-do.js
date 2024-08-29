let texBoxValue = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
  if (texBoxValue.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = texBoxValue.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  texBoxValue.value = "";
  saveData();
  
}

texBoxValue.value = "";

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
      console.log(saveData());
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()