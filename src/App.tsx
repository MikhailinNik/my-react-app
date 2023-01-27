import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails/CardDetails';
import Login from './components/Login/Login';

import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="/login" />
				<Route element={<CardDetails />} path="/card" />
			</Routes>
		</div>
	);
}

export default App;
