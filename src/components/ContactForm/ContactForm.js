import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const SERVICE_ID = "service_05hgukp";
const TEMPLATE_ID = "template_4slo5w8";
const USER_ID = "qcINO0KsT5V4Trw4x";

const  handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
  .then((result) => {
    console.log(result.text);

  }, (error) => {
    console.log(error.text);

  });
e.target.reset()
}

function Button(props) {

  return (
    <input
      id={props.ID}
      type='submit'
      value='Отправить'
      
      className='contact-form__submit'
    />
  );
}
function Input(props) {
  function Checker(event) {
    let value = event.target.value;
    let i = props.ID.toString();
    if (i === 'name') {
      //eslint-disable-next-line
      const re =  /^[a-zA-Zа-яА-Я]+$/ui;
      let ans = re.test(value);
      if (ans === false)
        document.getElementById(i).style = 'border: 1px solid red';
      else document.getElementById(i).style = 'border: 1px solid #00e600';
    } else if (i === 'phone') {
      //eslint-disable-next-line
      const re = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
      let ans = re.test(value);
      if (value.length < 11 || value.length > 13 || ans === false)
        document.getElementById(i).style = 'border: 1px solid red';
      else document.getElementById(i).style = 'border: 1px solid #00e600';
    } else if (i === 'email') {
      //eslint-disable-next-line
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let ans = re.test(value);
      if (ans === false)
        document.getElementById(i).style = 'border: 1px solid red';
      else document.getElementById(i).style = 'border: 1px solid #00e600';
    }
  }
  return (
    <input
      autoComplete='off'
      type={props.type}
      placeholder={props.hint}
      id={props.ID}
      onChange={Checker}
      className='contact-form__input'
      required={props.required}
      name={`from_${props.ID}`}
    />
  );
}

function Form(props) {
  return (
    <div className='form'>
      <form className='contact-form' onSubmit= {handleSubmit}>
        <h2 className='contact-form__title'>Свяжитесь с нами</h2> <br />
        <div>
          <label className='contact-form__label'>Имя*</label> <br />
          <Input hint='Введите имя' type='text' ID='name' required='required'/>
        </div>
        <div className='form-element'>
          <label className='contact-form__label'>E-mail*</label> <br />
          <Input hint='Адрес электронной почты' type='email' ID='email' required='required'/>
        </div>
        <div className='form-element'>
          <label className='contact-form__label'>Телефон</label> <br />
          <Input hint='Контактный номер телефона ' type='text' ID='phone' />
        </div>
        <div className='form-element'>
          <label className='contact-form__label'>Сообщение*</label> <br />
          <textarea
            id='message'
            rows='5'
            placeholder=''
            className='contact-form__textarea'
            required='required'
            name='from_message'
          ></textarea>
        </div>
        <Button ID='submit' />
      </form>
    </div>
  );
}

export default Form;
