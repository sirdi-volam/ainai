import { useState } from 'react';
import '../assets/styles/Login.css'
import { useAuthStore } from '../store/authUser';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoggingIn } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <>
      <container className="login-container">
        <div className="login">
          <h1 className="login-title">Вход</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Логин или почта"
              required
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-agreement">
              <input
                type="checkbox"
                className="login-agreement__checkbox"
              />
              <p className="login-agreement__text">
                Запомнить меня
              </p>
            </div>
            <button type="submit" className="login-button" disabled={isLoggingIn}>
              {isLoggingIn ? "Вход..." : "Войти"}
            </button>
            <div className="login-footer">
              <Link to="/forgot-password" className="login-text__link-forgotPassword">Забыли пароль?</Link>
              <p className="login-text">
                Нет аккаунта? <Link className="login-text__link" to="/register">Зарегистрироваться</Link>
              </p>
            </div>
          </form>
        </div>
      </container>
    </>
  )
}
