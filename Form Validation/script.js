const form = document.querySelector("body form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("asd");
  forTheForm();
});

const forTheForm = () => {
  if (form.checkValidity()) {
    alert("Form Submitted");
  } else {
    alert("Please enter the reqiure feilds");
  }
};

