function saveCheckboxValue() {
  const checkbox = document.getElementById("myCheckbox");
  localStorage.setItem("myCheckboxValue", checkbox.checked);
}

window.onload = function() {
  const checkbox = document.getElementById("myCheckbox");
  const storedValue = window.globalStorage.getItem("myCheckboxValue");
  if (storedValue === "true") {
    checkbox.checked = true;
  }
}
