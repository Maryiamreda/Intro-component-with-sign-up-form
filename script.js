const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const passward = document.getElementById('passward');



form.addEventListener('submit', e => {
    e.preventDefault();
    var firstname = fname.value.trim();
    var lastname = lname.value.trim();
    var emailvalue = email.value.trim();
    var passwardvalue = passward.value.trim();

    if (firstname === '') {
        errorFunc(fname, 'first name cannot be empty')
    } else {
        successFun(fname);
    }
    if (lastname === '') {
        errorFunc(lname, 'last name cannot be empty')
    } else {
        successFun(lname);
    }
    if (emailvalue === '') {
        errorFunc(email, 'email name cannot be empty')
    } else if (!emailvalue.match(pattern)) {
        errorFunc(email, 'Looks Like not an email');
    }
    else {
        successFun(email);
    }
    if (passwardvalue === '') {
        errorFunc(passward, 'pass cannot be empty')
    } else {
        successFun(passward);
    }

})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if (req !== email) {
        req.value = '';
    } else {
        req.style.color = "hsl(0, 100%, 50%)";
    }


}
function successFun(req) {
    req.className += 'sucess';
}