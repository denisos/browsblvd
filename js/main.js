
(function() {
  // form handling
  const formContainer = document.getElementById("bookingFormContainer"); 
  const form = document.getElementById("bookingForm");                    // the form itself
  const formConfimation = document.getElementById("bookingConfirmation"); // confirm view

  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const clientDetails = Object.fromEntries(formData);

    console.log("form data ", formData);
    console.log("form data ", formData.get('name'));

    fetch('/saveprospect', { 
      method: 'POST', 
      mode: 'cors',
      body: JSON.stringify(formData) 
    });

    // on success, hide the form and show confirmation
    form.classList.add("hideIt");
    formConfimation.classList.remove("hideIt");   
  });

})();