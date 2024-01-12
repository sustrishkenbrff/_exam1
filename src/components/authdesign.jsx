import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css'


function Design() {
const [nick, setNick] = useState('')
const [password, setPassword] = useState('')
const [nickBlack, setNickBlack] = useState(false)
const [passwordBlack, setPasswordBlack] = useState(false)
const [nickError, setNickError] = useState('Нік не може бути пустим')
const [passwordError, setPasswordError] = useState('Пароль не може бути пустим')
const blurHandler = (e) => {
    switch (e.target.name) {
        case 'nick':
            setNickBlack(true)
            break
        case 'password':
            setPasswordBlack(true)
            break
    }
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
    const passw =  /^[A-Za-z0-9]\w{2,15}$/;
    if(!passw.test(String(e.target.value).toLowerCase())) {
        setPasswordError ('Пароль повинен містити букви A-Z та цифри 0-9, і довжина повинна бути від 3 до 16 символів')
    }   else {
        setPasswordError('')
    }
    
}

const nickHandler = (e) => {
    setNick(e.target.value)
    const nickw =  /^[A-Za-z0-9]\w{2,15}$/;
    if(!nickw.test(String(e.target.value).toLowerCase())) {
        setNickError ('Нік повинен містити букви A-Z та цифри 0-9, і довжина повинна бути від 3 до 16 символів')
    }   else {
        setNickError('')
    }
    
}

  const [isContainerActive, setContainerActive] = useState(false);

  const handleRegisterClick = () => {
    setContainerActive(true);
  };

  const handleLoginClick = () => {
    setContainerActive(false);
  };

  return (
    <div className="App">
      <div className={`container ${isContainerActive ? 'active' : ''}`} id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Реєстрація</h1>
            <span>з цими даними ви зможете зайти на сервер</span>
            <input onChange={e => nickHandler(e)} value={nick} onBlur={e => blurHandler(e)} name='nick'  type="text" placeholder="Нікнейм" />
            {(nickError &&  nickBlack ) && <div className="error-txt"> {nickError}</div>}

            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="Пароль" />
            {(passwordError &&  passwordBlack ) && <div className="error-txt"> {passwordError}</div>}

            <Link to="/news"><button>Зареєструватись</button></Link>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Вхід</h1>
            <span>використовуйте дані з серверу</span>

            <input onChange={e => nickHandler(e)} value={nick} onBlur={e => blurHandler(e)} name='nick' type="nick" placeholder="Нікнейм" />
            {(nickError &&  nickBlack ) && <div className="error-txt"> {nickError}</div>}

            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="Пароль" />
            {(passwordError &&  passwordBlack ) && <div className="error-txt"> {passwordError}</div>}

            <a>Забули пароль?</a>
            <Link to="/news"><button>Увійти</button> </Link>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Привіт, мандрівник!</h1>
              <p>Введіть свої дані з серверу, щоб використовувати всі функції сайту</p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Вхід
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Привіт, мандрівник!</h1>
              <p>Зареєструйся, щоб використовувати всі функції сайту!</p>
              <button className="hidden" id="register" onClick={handleRegisterClick}>
                Реєстрація
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
