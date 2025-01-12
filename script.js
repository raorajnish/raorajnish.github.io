document.addEventListener("DOMContentLoaded", function () {
  const cartCountElement = document.querySelector(".cart-count");
  let cartCount = 0;

  document.querySelectorAll(".addtocartbtn").forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === "Add to Cart") {
        // Change button color to green and text to "Added"
        button.style.backgroundColor = "#59ae92";
        button.textContent = "Added";

        // Increment cart count
        cartCount++;
      } else {
        // Change button color back to initial color and text to "Add to cart"
        button.style.backgroundColor = "#ecb16e"; // Reset to original color
        button.textContent = "Add to Cart";
        // Decrement cart count only if it's greater than 0
        if (cartCount > 0) {
          cartCount--;
        }
      }

      // Update cart count display
      cartCountElement.textContent = cartCount;
    });
  });

  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
    });
  });

  // Form validation with real-time input check
  function validateName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
  }

  function validateEmail(email) {
    return /^[a-zA-Z0-9._-]+@sakec\.ac\.in$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
  }

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  nameInput.addEventListener("input", function () {
    if (validateName(nameInput.value)) {
      document.getElementById("name-error").textContent = "";
    } else {
      document.getElementById("name-error").textContent =
        "Please enter a valid name (letters and spaces only)";
    }
  });

  emailInput.addEventListener("input", function () {
    if (validateEmail(emailInput.value)) {
      document.getElementById("email-error").textContent = "";
    } else {
      document.getElementById("email-error").textContent =
        "Please enter a valid SAKEC email address";
    }
  });

  phoneInput.addEventListener("input", function () {
    if (validatePhone(phoneInput.value)) {
      document.getElementById("phone-error").textContent = "";
    } else {
      document.getElementById("phone-error").textContent =
        "Please enter a valid 10-digit phone number";
    }
  });
});
