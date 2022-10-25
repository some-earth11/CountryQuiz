import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Landing from './pages/Landing';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
