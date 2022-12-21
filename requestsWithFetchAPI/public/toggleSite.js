// selecting elements to change after clicking the `toggleButton`
const toggleButton = document.querySelector("#toggle");
const title = document.querySelector("#title");
const css = document.querySelector("#css");
const prompt = document.querySelector("#prompt");
const id = document.querySelector("#logo");

// re-assigning values to elements that are changing
const renderToggle = () => {
  if (title.innerHTML === "Word Smith") {
    title.innerHTML = "byteSize";
    css.href = "public/byteSizeStyle.css";
    id.src =
      "https://content.codecademy.com/courses/intermediate-javascript-requests/bytesize_logo.svg";
    prompt.innerHTML = "Enter a URL";
    toggle.innerHTML = "Switch to GET requests!";
  } else {
    title.innerHTML = "Word Smith";
    css.href = "public/wordSmithStyle.css";
    id.src =
      "https://content.codecademy.com/courses/intermediate-javascript-requests/wordsmith_logo.svg";
    prompt.innerHTML = "Enter a Word";
    toggle.innerHTML = "Switch to POST requests!";
  }
  // clearing previous input
  inputField.value = "";
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
};

// adding the event handler to `toggleButton`
toggleButton.addEventListener("click", renderToggle);
