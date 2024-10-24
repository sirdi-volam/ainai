import '../assets/styles/ForgotPass.css'
import { Link } from 'react-router-dom'
import { Alert } from './Alert.jsx'

export const ForgotPassword = () => {
  return (
    <>
      <container className="forgotPassword-container">
        <div className="forgotPassword">
          <h1 className="forgotPassword-title">Восстановление пароля</h1>
          <form className="forgotPassword-form">
            <input
              type="text"
              placeholder="Логин или почта"
              required
              className="forgotPassword-input"
            />
            <button type="submit" className="forgotPassword-button" onClick={Alert}>
              Восстановить
            </button>
          </form>
          <Link to="/login" className="forgotPassword-text__link">
            Вернуться назад
          </Link>
        </div>
      </container>
    </>
  )
}
