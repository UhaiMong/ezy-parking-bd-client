import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Router/Router';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
