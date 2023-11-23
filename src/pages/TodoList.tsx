import { Link } from 'react-router-dom';
import '../styles/styles.css';

const TodoList = () => {
  return (
    <div className='box'>
      <h1 className='titulo'>
        <i className='fa-regular fa-file'></i>
        Todo List
      </h1>
      <div className='header'>
        <input
          type='text'
          id='todoInput'
          placeholder='Adicione aqui suas tarefas'
          maxLength={50}
        />
        <button id='btnAdd'> + </button>
      </div>
      <div id='content'>{/* CONTENT */}</div>
      <div className='footer'>
        <p>
          Você tem <span id='count'>4</span> Tarefas
        </p>
        <button id='btnClearAll'> Limpar </button>
      </div>
      <div className='ava'>
        <Link className='voltar' to='/'>
          Voltar
        </Link>
        <Link className='voltar avaliacao' to='/home'>
          Avaliação
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
