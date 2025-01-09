document.addEventListener("DOMContentLoaded", function () {
  const cartCountElement = document.querySelector(".cart-count");
  let cartCount = 0;

  document.querySelectorAll(".addtocartbtn").forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === "Add to Cart") {
        // Change button color to green and text to "Added"
        button.style.backgroundColor = "#41f1b6";
        button.textContent = "Added";

        // Increment cart count
        cartCount++;
      } else {
        // Change button color back to initial color and text to "Add to cart"
        button.style.backgroundColor = ""; // Reset to original color
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
