import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const [email, message, ...rest] = [...form.elements];

const userData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  email.value = savedData.email || '';
  message.value = savedData.message || '';
}

const updateData = event => {
  userData[event.target.name] = event.target.value;
  console.log(userData);
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
    form.reset();
  }
};

form.addEventListener('input', throttle(updateData, 500));
form.addEventListener('submit', submitForm);
