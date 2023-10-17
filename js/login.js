// common functions
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
}

// registation section
document.getElementById('register').addEventListener('click', () => {
  const FormRegistation = document.getElementById('FormRegistation');
  const FormLogin = document.getElementById('Form');
  FormRegistation.style.right = '0';
  FormLogin.style.left = '-100vw';
});
document.getElementById('loginPage').addEventListener('click', () => {
  const FormRegistation = document.getElementById('FormRegistation');
  const FormLogin = document.getElementById('Form');
  FormLogin.style.left = '0';
  FormRegistation.style.right = '-100vw';
});
// registation page
const userInfo = [];
document.getElementById('btnRegister').addEventListener('click', () => {
  const username = getInputValue('username');
  const EmailRegister = getInputValue('EmailRegister');
  const regiPass = getInputValue('regiPass');
  const newregiPass = getInputValue('newpassword');
  const regMassage = document.getElementById('regMassage');
  if (
    username === '' ||
    EmailRegister === '' ||
    regiPass === '' ||
    newregiPass === ''
  ) {
    alert('please enter your valid data');
    return;
  } else if (newregiPass != regiPass) {
    alert('Please Enter a similar password');
    return;
  } else {
    regMassage.innerText = 'Registation succesful';
    regMassage.style.color = 'green';
    setTimeout(() => {
      regMassage.innerText = ' ';
    }, 2000);
    const userInformation = {
      name: username,
      email: EmailRegister,
      pass: regiPass,
    };
    userInfo.push(userInformation);
  }
});
// login the page section
document.getElementById('LoginBtn').addEventListener('click', () => {
  const loginEmail = getInputValue('EmailLogin');
  const loginPass = getInputValue('passLogin');
  if (loginEmail === '' || loginPass === '') {
    alert('please enter your valid data');
    return;
  }
  for (const element of userInfo) {
    if (loginEmail == element.email && loginPass == element.pass) {
      window.location.href = 'index.html';
      return;
    } else if (loginEmail == 'foisal@gmail.com' && loginPass == 'foisal') {
      window.location.href = 'index.html';
      return;
    } else {
      alert('tumar information valid noi');
    }
  }
});
