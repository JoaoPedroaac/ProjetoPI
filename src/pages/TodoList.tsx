import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoListController from '../controllers/TodoListController';

const TodoList = () => {
  const {
    fetchData,
    todo,
    items,
    setNewItem,
    addItem,
    removeItem,
    removeAll,
    fetchItems,
  } = TodoListController();

  useEffect(() => {
    fetchData();
  }, [typeof window !== undefined]);
  useEffect(() => {
    fetchItems();
  }, [todo]);
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div className='box'>
      <h1 className='titulo'>
        <FontAwesomeIcon icon={faFile} />
        Todo List
      </h1>
      <div className='header'>
        <input
          type='text'
          id='todoInput'
          placeholder='Adicione aqui suas tarefas'
          onChange={(e) => setNewItem(e.currentTarget.value)}
          maxLength={50}
        />
        <button onClick={addItem} id='btnAdd'>
          {' '}
          +{' '}
        </button>
      </div>
      {items?.length > 0 ? (
        <>
          <div id='content'>
            {items.map(({ id, description }) => (
              <div className='todo'>
                <p>{description}</p>
                <button
                  className='btnClear'
                  data-target={id}
                  onClick={() => removeItem(id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <div className='footer'>
            <>
              <p>
                Você tem <span id='count'>{items?.length}</span> Tarefas
              </p>
              <button id='btnClearAll' onClick={removeAll}>
                {' '}
                Limpar{' '}
              </button>
            </>
          </div>
        </>
      ) : null}
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
