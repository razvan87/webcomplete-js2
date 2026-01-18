const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");
const userName = document.getElementById("userName");
const closeBanner = document.getElementById("closeBanner");
const inputs = form.querySelectorAll("input[required], textarea");
const genderGroup = document.querySelector(".gender");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate text inputs & textarea
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  // Validate radio buttons
  const genderChecked = form.querySelector("input[name='gender']:checked");
  if (!genderChecked) {
    genderGroup.classList.add("error");
    isValid = false;
  } else {
    genderGroup.classList.remove("error");
  }

  if (!isValid) return;

  // Collect data
  const formData = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    gender: genderChecked.value,
    message: form.message.value,
  };

  // Print to console
  console.log("Form submitted:", formData);

  // Show confirmation banner
  userName.textContent = formData.firstName + " " + formData.lastName;
  confirmation.classList.remove("hidden");

  form.reset();
});

// Remove error on input correction
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error");
    genderGroup.classList.remove("error");
  });
});

// Close banner
closeBanner.addEventListener("click", () => {
  confirmation.classList.add("hidden");
});
