function submitData() {
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');
    let genderDOM = document.querySelector('input[name="gender"]:checked');
    let interestsDOMs = document.querySelectorAll('input[name="interests"]:checked');
    let descriptionDOM = document.querySelector('textarea[name="description"]');

    let interest = ''
    for (let i = 0; i < interestsDOMs.length; i++) {
        interest += interestsDOMs[i].value + ' ';
        if (i != interestsDOMs.length - 1) {
            interest += ', ';
        }
}

   let userData = {
        firstname: firstNameDOM.value,
        lastname: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests: interest
   }
    console.log('submitData', userData);
} 