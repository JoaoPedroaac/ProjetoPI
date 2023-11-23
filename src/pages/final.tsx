import { Link } from 'react-router-dom';
import '../styles/pag3.css';

const Agradecimento = () => {
  return (
    <div className='container'>
      <header>
        <div className='Cabeçalho'>
          <img src='/assets/img/WithoutBackground.png' alt='' width='110px' />
        </div>
      </header>

      <div className='Agradecimento'>
        <h2>Obrigado!</h2>
        <h2>
          Siga a To Do nas redes sociais e fique por dentro de todas as
          novidades.
        </h2>
        <p>
          Conheça mais sobre a To Do:{' '}
          <a className='cor' href=''>
            Clique Aqui
          </a>
        </p>
      </div>

      <div className='icons'>
        <a href=''>
          <img src='/assets/img/facebook.png' alt='Facebook' />
        </a>
        <a href=''>
          <img src='/assets/img/instagram.png' alt='Instagram' />
        </a>
        <a href=''>
          <img src='/assets/img/youtube.png' alt='YouTube' />
        </a>
      </div>

      <Link className='but' to={'/index'}>
        Voltar ao início
      </Link>
    </div>
  );
};

export default Agradecimento;
