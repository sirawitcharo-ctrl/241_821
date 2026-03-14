const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ:  ')
    }
    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล: ')
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ')
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศของคุณ')
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรกของคุณ')
    }
    if (!userData.description) {
        errors.push('กรุณาใส่คำอธิบายของคุณ')
    }
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked') || {};
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked') || {};
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');

    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }


        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }
        const errors = validateData(userData)
        if (errors.length > 0) {
            //ถ้ามี error 
            throw {
                message: 'กรอกข้อมูลไม่ครบถ้วน',
                errors: errors
            }
        }
        const response = await axios.post('http://localhost:8000/users', userData)
        console.log('submitData response', response.data);
        messageDOM.innerText = "บันทึกข้อมูลสำเร็จ";
        messageDOM.className = "message success";

        if (node == 'CREATE') {
            const response = await axios.post(`${BASE_URL}/users`, userData);
            console.log('response', response.data);
        } else {
            const respone = await axios.put(`${BASE_URL}/users/${selectedId}`, userData);
            message = "แก้ไขข้อมูลสำเร็จ";
            Console.log('response', response.data);
        }

    } catch (error) {
        console.log('error message', error.message)
        console.log('error', error.errors)
        if (error.response) {
            console.log('Error response data:', error.response.data.message);
            error.message = error.response.data.message;
            error.error.response.data.errors;
        }
        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>`
        htmlData += '<ul>'
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>`
        }
        htmlData += '/ul'
        htmlData += '</div>'
        messageDOM.innerHTML = htmlData
        messageDOM.className = "message danger";
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

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('id', id);
    if (id) {
        mode = 'edit';
        selectedId = id;

        // 1. ดึงข้อมูล user ที่ต้องการแก้ไข
        try {
            const respone = await axios.get(`${BASE_URL}/users/${id}`);
            const user = respone.data;
            // 2. แสดงข้อมูล user ใน form เพื่อให้ผู้ใช้แก้ไข
            let FirstNameDom = document.querySelector('input[name="FirstName"]');
            let LastNameDom = document.querySelector('input[name="LastName"]'); 
            let ageDom = document.querySelector('input[name="age"]');
            let descriptionDom = document.querySelector('textarea[name="description"]');
            
            FirstNameDom.value = user.FirstName;
            LastNameDom.value = user.LastName;
            ageDom.value = user.age;
            descriptionDom.value = user.description;

            let genderDom = document.querySelectorAll('input[name=gender]');
            let interestDom = document.querySelectorAll('input[name=interest]');

            for (let i = 0; i < genderDom.length; i++) {
                if (genderDom[i].value == user.gender) {
                    genderDom[i].checked = true;
                }
            }

            for (let i = 0; i < interestDom.length; i++) {
                if(user.interests.includes(interestDom[i].value)) {
                    interestDom[i].checked = true;
                }
            }

    } catch (error) {
        console.log('error', error);
    }
}
}
