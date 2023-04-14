//your JS code here. If required.
function removeColor() {
  // Get dropdown list element
  var dropdown = document.getElementById("colorSelect");
  
  // Get selected option index
  var selectedOptionIndex = dropdown.selectedIndex;
  
  // Remove selected option from dropdown list
  dropdown.remove(selectedOptionIndex);
}