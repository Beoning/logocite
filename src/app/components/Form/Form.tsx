'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import style from './Form.module.scss';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'logoped_service',
        'contactform_logoped',
        form.current!,
        'vQzrM4hn-5hZPoQOq'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className={style.form} onSubmit={sendEmail} id="form">
      <input type="name" name="from_name" placeholder="Ваше имя" />
      <input type="number" name="phone_number" placeholder="Номер телефона" />
      <button>Оставить заявку</button>
    </form>
  );
};

export default Form;
