import { Link } from 'react-router-dom';
import '../styles/pag2.css';

const AvaliacaoFacilidade = () => {
  return (
    <div className='container'>
      <div className='Cabeçalho'>
        <img src='/assets/img/WithoutBackground.png' alt='' width='110px' />
      </div>

      <header>
        <div className='Cabeçalho'>
          <img src='./IMG/bitmap.png' alt='' width='110px' />
        </div>
      </header>

      <div className='Nome'>
        <div className='Notificação4'>
          <h3>
            Por fim, em uma escala de 0 a 10, qual seu nível de satisfação com a
            facilidade de utilização do site?
          </h3>
        </div>
      </div>

      <div className='selecione'>
        {[...Array(11).keys()].map((valor) => (
          <Link
            to='/agradecimentos'
            key={valor}
            className={`opcao opção${valor} btnClick`}
          >
            {valor}
          </Link>
        ))}
      </div>

      <Link className='but' to={'/avaliacao'}>
        Voltar
      </Link>
    </div>
  );
};

export default AvaliacaoFacilidade;
