var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length
}

function createListElement() {
	//create an li element
	var li = document.createElement("li");
	// add the input to the li
	li.appendChild(document.createTextNode(input.value));
	// add the li to the ul
	ul.appendChild(li);
		
	// toggle the done class of li
	li.addEventListener("click", function() {
		var finished = this.classList.toggle("done");
		// create remove button
		var removeButton = document.createElement("button");
		// add it to a class
		removeButton.classList.add("deleteButton");
		// if true:
		
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			//add a remove button
			// add it to a class
			removeButton.ClassList = "deleteButton";
		// add it to the list item
			li.appendChild(removeButton);

			// on the click of the button, remove it, with parent
			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			})
			// else remove the button only
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
			}
		})
	// remove the input
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




