import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from './Filter'

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter />
			<HogList hogs={hogs} />
		</div>
	);
}

export default App;
