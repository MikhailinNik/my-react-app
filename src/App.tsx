import Header from './components/Header/Header.jsx';
import Filter from './components/Filter/Filter.jsx';
import CardList from './components/CardList/CardList.jsx';

import './App.scss';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className="content">
				<Filter />
				<CardList />
			</div>
		</div>
	);
}

export default App;
