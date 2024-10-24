import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.component'
import { Home } from './components/Home.component'
import { Login } from './components/Login.component'
import { Register } from './components/Register.component';
import { ForgotPassword } from './components/forgotPass.component';
import { Toaster } from 'react-hot-toast';
// import { Profile } from './components/Profile.components';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Toaster />
    </>
  )
}

export default App
