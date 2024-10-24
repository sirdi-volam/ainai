import { useState } from 'react'
import '../assets/styles/Register.css'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser';

export const Register = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isSigningUp } = useAuthStore();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({ email,username, password });
  };
  return (
    <>
      <container className="register-container">
        <div className="register">
          <h1 className="register-title">Регистрация</h1>
          <form className="register-form" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Логин или почта"
              required
              className="register-input"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="username"
              placeholder="Имя пользователя"
              required
              className="register-input"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              className="register-input"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            {/* <input
              type="password"
              placeholder="Повторите пароль"
              required
              className="register-input"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            /> */}

            <div className="register-checkbox">
              <input
                type="checkbox"
                className="register-checkbox-input"
                required
              />

              <p className="register-checkbox__text">
                Я согласен с
                  <Link
                    to="/policy"
                    className="register-checkbox__link"
                  >
                    Политикой конфиденциальности
                  </Link>
              </p>
            </div>
            <button type="submit" className="register-button" disabled={isSigningUp}>
              {isSigningUp ? "Загрузка..." : "Зарегистрироваться"}
            </button>
            <div className="register-agreement">
              <p className="register-agreement__text">
                Уже зарегистрированы?
                <Link to="/login" className="register-agreement__link">
                  Войти
                </Link>
              </p>
            </div>
          </form>
        </div>
      </container>
    </>
  )
}
