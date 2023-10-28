import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const [email, message, ...rest] = [...form.elements];

const userData = {
  email,
  message,
};

if (localStorage.getItem('feedback-form-state')) {
  userData.email = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  userData.message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;

  email.value = userData.email;
  message.value = userData.message;
}

const updateData = event => {
  if (event.target.name === 'email') {
    userData.email = event.target.value;
  }
  if (event.target.name === 'message') {
    userData.message = event.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const submitForm = event => {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Заповніть всі поля форми');
  } else {
    console.log(userData);
    localStorage.removeItem('feedback-form-state');
    userData.email = '';
    userData.message = '';
  }
};

form.addEventListener('input', throttle(updateData, 500));
form.addEventListener('submit', submitForm);
