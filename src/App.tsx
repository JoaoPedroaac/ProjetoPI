import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages';
import TodoList from './pages/TodoList';
import Home from './pages/home';
import Avaliacao from './pages/pagina2';
import AvaliacaoFacilidade from './pages/pagina3';
import Agradecimento from './pages/final';

const router = createBrowserRouter([
  { path: '/', Component: Index, index: true },
  { path: '/todo', Component: TodoList },
  { path: '/home', Component: Home },
  { path: '/avaliacao', Component: Avaliacao },
  { path: '/avaliacao/facilidade', Component: AvaliacaoFacilidade },
  { path: '/agradecimentos', Component: Agradecimento },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
