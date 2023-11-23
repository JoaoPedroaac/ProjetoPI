import { Link } from 'react-router-dom';
import '../styles/pag2.css';

const Avaliacao = () => {
  return (
    <div className='container'>
      <header>
        <div className='Cabeçalho'>
          <img src='./IMG/bitmap.png' alt='' width='110px' />
        </div>
      </header>

      <div className='inicio'>
        <div className='Notificação'>
          <h2>Avaliação de Funcionalidade</h2>
        </div>
        <div className='Notificação2'>
          <h3>O que achou das Funcionalidades do Todo list Antler Moose </h3>
        </div>
      </div>

      <Link to={'/avaliacao/facilidade'} className='button btnClick'>
        Excelentes
      </Link>
      <Link to={'/avaliacao/facilidade'} className='button button2 btnClick'>
        Boas
      </Link>
      <Link to={'/avaliacao/facilidade'} className='button button3 btnClick'>
        Medianas
      </Link>
      <Link to={'/avaliacao/facilidade'} className='button button4 btnClick'>
        Ruins
      </Link>
      <Link to={'/avaliacao/facilidade'} className='button button5'>
        Muito Ruins
      </Link>

      <Link className='but' to={'/home'}>
        Voltar
      </Link>
    </div>
  );
};

export default Avaliacao;
