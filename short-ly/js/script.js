const button = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errorMessage = document.getElementById("form-error");

const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    errorMessage.innerHTML = "Please enter a link.";
    input.classList.add("border-red");
  } else if (!isValidUrl(input.value)) {
    errorMessage.innerHTML = "Please enter a valid link.";
    input.classList.add("border-red");
  } else {
    errorMessage.innerHTML = "";
    input.classList.remove("border-red");
  }
});
