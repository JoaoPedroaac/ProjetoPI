import { Link } from 'react-router-dom';
import '../styles/pag3.css';
const Home = (): JSX.Element => {
  return (
    <div className='container'>
      <div className='Cabeçalho'>
        <img src='/assets/img/WithoutBackground.png' alt='Logo' />
      </div>

      <div className='Agradecimento'>
        <div className='Notificação'>
          <h2>Pesquisa de Funcionalidade!</h2>
        </div>
        <div className='Notificação2'>
          <h3>A sua opinião é fundamental para o nosso aprimoramento.</h3>
          <Link className='but' to={'/avaliacao'}>
            Iniciar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
