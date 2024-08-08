function inputToDo() {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const toDoInputValue = document.getElementById("todoValue").value; // Get the value inside the event listener
    console.log(toDoInputValue); // Now this logs the current value of the input field
  });

  console.log("working1");
}

export default inputToDo;
