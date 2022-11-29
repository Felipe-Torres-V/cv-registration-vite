import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import { FormsProvider } from './Components/Context/Context';
import Header from './Components/Header/Header';
import CadastroPage from './Components/Pages/CadastroPage';
import ListaPage from './Components/Pages/ListaPage';

function App() {
  return (
    <FormsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CadastroPage />} />
          <Route path="/listaCadastros" element={<ListaPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </FormsProvider>
  );
};

export default App;
