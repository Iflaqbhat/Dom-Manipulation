var count = 0;

function updatePlaceholder() {
  document.getElementById("countInput").placeholder =
    "your current count is: " + count;
}

function increment() {
  count++;
  updatePlaceholder();
  clearError(); // Clear error if increment is pressed
}

function decrement() {
  if (count > 0) {
    count--;
    updatePlaceholder();
    clearError(); // Clear error if count is valid
  } else {
    showError("Error: cannot go below zero");
  }
}

function clearCount() {
  count = 0;
  updatePlaceholder();
  clearError(); // Clear error when count is reset
}

function showError(message) {
  const errorElement = document.getElementById("errorMessage");
  errorElement.textContent = message;
  errorElement.style.display = "block"; // Show the error message
}

function clearError() {
  const errorElement = document.getElementById("errorMessage");
  errorElement.style.display = "none"; // Hide the error message
}

// Add event listeners for buttons
document.getElementById("incrementBtn").addEventListener("click", increment);
document.getElementById("decrementBtn").addEventListener("click", decrement);
document.getElementById("clearBtn").addEventListener("click", clearCount);
