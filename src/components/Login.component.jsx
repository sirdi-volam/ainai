import '../assets/styles/Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
      <container className="login-container">
        <div className="login">
          <h1 className="login-title">Вход</h1>
          <form className="login-form">
            <input
              type="text"
              placeholder="Логин или почта"
              required
              className="login-input"
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              className="login-input"
            />
            <button type="submit" className="login-button">
              Войти
            </button>
            <p className="login-text">
              Нет аккаунта? <Link className="login-text__link" to="/register">Зарегистрироваться</Link>
            </p>
          </form>
        </div>
      </container>
    </>
  )
}
