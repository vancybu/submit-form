$(document).ready(function () {
  // Real-time validation for first name and last name
  const validateInput = (inputId, errorId, errorMessage) => {
    const value = $(`#${inputId}`).val().trim();
    if (!value) {
      $(`#${errorId}`).text(errorMessage).show();
      return false;
    } else {
      $(`#${errorId}`).hide();
      return true;
    }
  };

  // Character counter for the message field
  $("#message").on("input", function () {
    const maxLength = $(this).attr("maxlength");
    const currentLength = $(this).val().length;
    $("#char-counter").text(`${currentLength}/${maxLength}`);
  });

  // Submit button click event
  $(".submit-btn").on("click", function (e) {
    e.preventDefault();

    const isFnameValid = validateInput("fname", "fname-error", "First name is required.");
    const isLnameValid = validateInput("lname", "lname-error", "Last name is required.");

    if (isFnameValid && isLnameValid) {
      const fname = $("#fname").val().trim();
      const lname = $("#lname").val().trim();
      const message = $("#message").val().trim();

      // Display the results
      $(".result-text").text(`Name: ${fname} ${lname}, Message: ${message}`);
      $("#success-message").fadeIn().delay(3000).fadeOut();
    }
  });

  // Reset button click event
  $("#reset-btn").on("click", function () {
    // Clear all input fields
    $("#fname").val("");
    $("#lname").val("");
    $("#message").val("");

    // Reset error messages and character counter
    $(".error-message").hide();
    $("#char-counter").text("0/200");

    // Clear results and success message
    $(".result-text").text("");
    $("#success-message").hide();
  });
});