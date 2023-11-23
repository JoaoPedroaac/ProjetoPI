import { Link } from 'react-router-dom';
import '../styles/style.css';

const Index = () => {
  return (
    <>
      <div className='Cabecalho'>
        <a>Antler Moose</a>
      </div>
      <div className='redes'>
        <img className='Logo' src='/assets/img/WithoutBackground.png' alt='' />
      </div>

      <form
        className='ipt'
        action='http://127.0.0.1:5500/TodoList.html'
        method='get'
      >
        <input className='nome' type='text' placeholder='E-mail' />
        <input className='nome nome2' type='password' placeholder='Senha' />
        <Link className='ResetS' to={'/Todo'}>
          Esqueceu sua senha?
        </Link>
        <input className='nome nome3' type='submit' />
      </form>
    </>
  );
};

export default Index;
