const callback = () => {
  // Get the values of the first name and last name input fields
  const fname = document.querySelector("#fname").value.trim();
  const lname = document.querySelector("#lname").value.trim();

  // Validation: Check if both fields are filled
  if (!fname || !lname) {
    alert("Please fill in both the first name and last name.");
    return;
  }

  // Capitalize the first letter of the first name and make the rest lowercase
  const firstCharOfFirstName = fname.slice(0, 1).toUpperCase();
  const restOfChar = fname.slice(1).toLowerCase();
  const firstname = `${firstCharOfFirstName}${restOfChar}`;

  // Capitalize the first letter of the last name and make the rest lowercase
  const firstCharOfLastname = lname.slice(0, 1).toUpperCase();
  const restOfCharOfLastname = lname.slice(1).toLowerCase();
  const lastname = `${firstCharOfLastname}${restOfCharOfLastname}`;

  // Combine the first name and last name
  const name = `${firstname} ${lastname}`;

  // Display the formatted name in the span element
  document.querySelector("span").innerHTML = name;

  // Log the formatted name to the console
  console.log(name);
};

// Add an event listener to the button to call the callback function on click
const btn = document.querySelector(".btn");
btn.addEventListener("click", callback);