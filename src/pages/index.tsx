import { Link } from 'react-router-dom';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookie from 'cookiejs';
const Index = () => {
  const handleLogin = async () => {
    const { data } = await axios.post(
      'http://localhost:3000/auth/login',
      {
        email: 'dev@todo.com.br',
        password: 'my-secret',
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
        <a>Antler Moose</a>
      </div>
      <div className='redes'>
        <img className='Logo' src='/assets/img/WithoutBackground.png' alt='' />
      </div>

      <form className='ipt'>
        <input className='nome' type='text' placeholder='E-mail' />
        <input className='nome nome2' type='password' placeholder='Senha' />
        <Link className='ResetS' to={'/Todo'}>
          Esqueceu sua senha?
        </Link>
        <input
          className='nome nome3'
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        />
      </form>
    </>
  );
};

export default Index;
