import axios from 'axios';
import cookie from 'cookiejs';
import { useState } from 'react';

export default function TodoListController() {
  const [todo, setTodo] = useState();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState<string>('');
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/todoList', {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    });
    if (response.status === 200) setTodo(response.data.value[0]);
  };
  const fetchItems = async () => {
    const response = await axios.get(
      `http://localhost:3000/todoList/${todo?.id}`,
      {
        headers: {
          Authorization: `Bearer ${cookie.get('token')}`,
        },
      }
    );

    if (response.data) setItems(response.data.value.items);
  };
  const addItem = async () => {
    const response = await axios.post(
      `http://localhost:3000/todoItem/${todo?.id}`,
      { description: newItem },
      {
        headers: {
          Authorization: `Bearer ${cookie.get('token')}`,
        },
      }
    );
    if (response.data) {
      fetchData();
    }
  };
  const removeAll = async () => {
    if (items.length === 0) return;
    items.forEach(({ id }) => {
      removeItem(id);
    });
  };
  const removeItem = async (id: string) => {
    const response = await axios.delete(
      `http://localhost:3000/todoItem/${id}`,
      {
        headers: {
          Authorization: `Bearer ${cookie.get('token')}`,
        },
      }
    );
    if (response.data) {
      fetchData();
    }
  };
  return {
    removeItem,
    removeAll,
    todo,
    setNewItem,
    fetchItems,
    fetchData,
    addItem,
    items,
  };
}
