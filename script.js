var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.getElementsByTagName("li");
var deleteTasks = document.getElementsByClassName("delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(){
	this.classList.toggle("done");
}

for(var i = 0; i < li.length; i++){
	li[i].addEventListener("click", doneTask);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for(var i = 0; i < deleteTasks.length; i++){
	deleteTasks[i].addEventListener("click", deleteDoneTask, false);
}
 function deleteDoneTask(event){
	event.target.removeEventListener("click", deleteDoneTask, false);
	event.target.parentNode.remove();
 }


