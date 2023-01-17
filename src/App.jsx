import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Write } from './pages/write/Write';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Detail } from './pages/detail/Detail';
import { Settings } from './pages/settings/Settings';
import './App.css';

const App = () => (
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<Home />} />
			<Route path='/contact' element={<Home />} />
			<Route path='/write' element={<Write />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/post/:id' element={<Detail />} />
			<Route path='/settings' element={<Settings />} />
		</Routes>
	</BrowserRouter>
);

export default App;
