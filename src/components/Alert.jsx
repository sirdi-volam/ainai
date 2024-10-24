export const Alert = () => {

  return (
    <div className="alert">
      <p className="alert-text">Registration successful</p>
      <button className="alert-close" onClick={close}>X</button>
    </div>
  )
}