
const savaData = () => {
    const arrayFields = ['first_name','last_name','mobile_phone','address','gender','username','password']
    const userObj = {}
    let arrayUsers = JSON.parse(localStorage.getItem('users'));

    if(arrayUsers === null) arrayUsers = [];

    arrayFields.forEach(field => {
        userObj[`${field}`] = document.getElementById(`${field}`).value;
    });

    arrayUsers.push(userObj);

    localStorage.setItem('users', JSON.stringify(arrayUsers))

    alert(localStorage.getItem('users'))
}


const logIn = () => {
    let arrayUsers = JSON.parse(localStorage.getItem('users'));
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let flag = false;

    if( arrayUsers !== null){
        //Recorrido 
        arrayUsers.forEach(user => {
            if(user.username === username && user.password === password){
                flag = true;
            }
        });
    }

    if(flag) alert('El usuario existe')
    else alert('No existen usuarios con esas credenciales')
}