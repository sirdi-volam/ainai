import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.component'
import { Home } from './components/Home.component'
import { Login } from './components/Login.component'
import { Register } from './components/Register.component';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
