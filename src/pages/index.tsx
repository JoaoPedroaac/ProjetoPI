import { Link } from 'react-router-dom';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookie from 'cookiejs';
import { useState } from 'react';
const Index = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleLogin = async () => {
    if (!email || !password) return;
    const { data } = await axios.post(
      'http://localhost:3000/auth/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (data) {
      cookie.set('token', data.access_token);
      navigate('/todo');
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className='cabecalho'>
        <a style={{ fontSize: ' 32px' }}>Antler Moose</a>
      </div>
      <div className='redes'>
        <img className='Logo' src='/assets/img/WithoutBackground.png' alt='' />
      </div>

      <form className='ipt'>
        <input
          className='nome'
          type='text'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className='nome nome2'
          type={showPassword ? 'text' : 'password'}
          placeholder='Senha'
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <fieldset>
          <input
            type='checkbox'
            name='showPassword'
            id='show-password'
            onClick={() => setShowPassword(!showPassword)}
            checked={showPassword}
          />
          Mostrar Senha
        </fieldset>
        <Link className='ResetS' to={'/Todo'}>
          Esqueceu sua senha?
        </Link>
        <button
          style={{ textAlign: 'center' }}
          className='nome nome3'
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Index;
