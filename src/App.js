import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import CreateFavor from './components/favor/CreateFavor';
import Register from './components/user/Register';
import { UserProvider } from './components/context/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/create-favor" element={<CreateFavor />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
