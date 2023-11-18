'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import style from './Form.module.scss';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<undefined | string>();
  const disabled = email && phone && phone?.length > 5 ? false : true;
  const [result, setResult] = useState<{
    response: null | string;
    error: null | string;
  }>({
    response: null,
    error: null,
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'logoped_service',
        'contactform_logoped',
        form.current!,
        process.env.emailKey
      )
      .then(
        (result) => {
          setResult((prev) => {
            return { ...prev, response: result.text };
          });
        },
        (error) => {
          setResult((prev) => {
            return { ...prev, error: error.text };
          });
        }
      );
  };

  return (
    <form ref={form} className={style.form} onSubmit={sendEmail} id="form">
      <input
        type="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="from_name"
        placeholder="Ваше имя"
      />
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone_number"
        placeholder="Номер телефона"
      />
      {result.response && (
        <p className={style.response}>Заявка успешно отправлена</p>
      )}
      {result.error && (
        <p className={style.response}>Ошибка, данные не получены</p>
      )}
      <button
        className={disabled ? style.disabled : undefined}
        disabled={disabled}
      >
        {disabled ? 'Введите данные' : 'Оставить заявку'}
      </button>
    </form>
  );
};

export default Form;
