import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
// const email = form.elements;
const [email, message, ...rest] = [...form.elements];
// const message = feedbackForm.textarea.value;

const userData = {
  email: email.value,
  message: message.value,
};

console.dir(email);
const updateData = event => {
  const data = event.target.value;
  // localstorage;
  console.log(data);
};
// form.addEventListener('input', throttle(updateData, 500));
