import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import './App.css';

const App = () => (
	<BrowserRouter>
		<Header />
		<Home />
	</BrowserRouter>
);

export default App;
