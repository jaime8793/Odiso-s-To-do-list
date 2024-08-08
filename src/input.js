function inputToDo() {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (event) => {
    // Prevents the default form submission behavior
    event.preventDefault();

    // Get the value inside the event listener
    const toDoInputValue = document.getElementById("todoValue").value;
    const listDetailDate = document.getElementById("dateTime").value;

    // Create elements
    const listArea = document.getElementById("content");
    const listDiv = document.createElement("div");
    const listDetail = document.createElement("p");
    const listDetail2 = document.createElement("p");
    const checkBox = document.createElement("button");

    // Set the inner text of the elements
    listDetail.innerText = toDoInputValue;
    listDetail2.innerText = listDetailDate;
    checkBox.innerText = "Done";

    // Append elements to the DOM
    listDiv.appendChild(listDetail);
    listDiv.appendChild(listDetail2);
    listDiv.appendChild(checkBox);
    listArea.appendChild(listDiv);

    // Attach event listener to the button
    checkBox.addEventListener("click", () => {
      console.log("button working");
      alert("Done");
      // Optionally, remove the item from the list
      listArea.removeChild(listDiv);
    });

    // Restore input fields
    document.getElementById("todoValue").value = "";
    document.getElementById("dateTime").value = "";
  });
}

export default inputToDo;
