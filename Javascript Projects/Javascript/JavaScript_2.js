function validateForm() {
    var x = document.forms["validation"]["fname"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
  }
  