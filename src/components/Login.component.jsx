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
              placeholder="Логин"
              required
              className="login-input"
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              className="login-input"
            />
            <div className="login-checkbox__container">
              <input type="checkbox" className="login-checkbox" />
              <label className="login-checkbox-label">Сохранить вход</label>
              <div className="login-checkbox__dropdown" aria-label="Сохранить вход" aria-expanded="true">
                <span aria-hidden="false">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12zm.64-5c-.08.36-.28.57-.66.57-.45 0-.71-.32-.71-.76v-.07c0-.64.32-1.06.95-1.43.68-.41.89-.68.89-1.17 0-.53-.4-.9-.99-.9-.52 0-.87.26-1.04.74-.13.35-.37.5-.7.5-.41 0-.67-.27-.67-.68 0-.23.05-.43.16-.64C4.2 2.46 5.05 2 6.19 2c1.5 0 2.52.84 2.52 2.09 0 .81-.39 1.36-1.13 1.81-.7.41-.87.64-.94 1.1zm.22 2.16A.85.85 0 0 1 6 10a.85.85 0 0 1-.86-.84.85.85 0 0 1 .86-.85.85.85 0 0 1 .87.85z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
            </div>
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
