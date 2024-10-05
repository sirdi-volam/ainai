import '../assets/styles/Register.css'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <>
      <container className="register-container">
        <div className="register">
          <h1 className="register-title">Регистрация</h1>
          <form className="register-form">
            <input
              type="text"
              placeholder="Логин или почта"
              required
              className="register-input"
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              className="register-input"
            />
            <input
              type="password"
              placeholder="Повторите пароль"
              required
              className="register-input"
            />

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
            <button type="submit" className="register-button">
              Зарегистрироваться
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
