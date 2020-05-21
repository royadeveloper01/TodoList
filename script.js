var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);

	li.addEventListener("click", function() {
		var doneTask = this.classList.toggle("done");

		var removeBtn = document.createElement("button");
		removeBtn.classList.add("delete");

		if(doneTask){
			removeBtn.appendChild(document.createTextNode("Remove"));
			removeBtn.classList = "delete";
			li.appendChild(removeBtn);

			removeBtn.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("delete")[0].remove();
		}
	})
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

// function doneTask(){
// 	this.classList.toggle("done");
// }

// for(var i = 0; i < li.length; i++){
// 	li[i].addEventListener("click", doneTask);
// }

// for(var i = 0; i < deleteTasks.length; i++){
// 	deleteTasks[i].addEventListener("click", deleteDoneTask, false);
// }
//  function deleteDoneTask(event){
// 	event.target.removeEventListener("click", deleteDoneTask, false);
// 	event.target.parentNode.remove();
// }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




