var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var input = document.getElementById("userinput");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
	li.addEventListener("click", function() {
		var finished = this.classList.toggle("done");
		var deleteButton = document.createElement("button");
		deleteButton.classList.add("gone");
		
		if (finished) {
			deleteButton.appendChild(document.createTextNode("remove"));
			//deleteButton.classList = "gone";
			li.appendChild(deleteButton);
			deleteButton.addEventListener("click", function() {
				this.parentElement.remove();
			})
		} else {
			this.getElementsByClassName("gone")[0].remove();
		}
	})
}

function addOnClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addOnEnter(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

button.addEventListener("click", addOnClick);
input.addEventListener("keypress", addOnEnter);