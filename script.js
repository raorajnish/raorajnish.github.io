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
});

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// Form validation
function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Name validation
    if (!validateName(nameInput.value)) {
        document.getElementById('name-error').textContent = 'Please enter a valid name (letters and spaces only)';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // Email validation
    if (!validateEmail(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid SAKEC email address';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Phone validation
    if (!validatePhone(phoneInput.value)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }

    return isValid;
}
