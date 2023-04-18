// App.js
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Games from './pages/Games';
import './App.css';
import NavBar from './components/NavBar';
import { UserProvider } from './context/user.context';
import PrivateRoute from './pages/PrivateRoute';
import Signup from './pages/Signup';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Loader from './components/Loader';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route element={<PrivateRoute />}>
            <Route path="/games" element={<Games />}/>
          </Route>
          <Route path="/loading" element={<Loader />}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
