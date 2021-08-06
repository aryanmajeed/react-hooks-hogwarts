import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from './Filter'

function App() {
	const [filterGreased, setFilterGreased] = useState(false)
	const [sort, setSort] = useState('name')

	const hogsToDisplay = hogs.filter((hog) => filterGreased ? hog.greased : true)
		.sort((hog1, hog2) => {
			if (sort === "weight") {
				return hog1.weight - hog2.weight
			} else {
				return hog1.name.localeCompare(hog2.name);
			}
		});
	return (
		<div className="App">
			<Nav />
			<Filter hanldeFilterGrease={setFilterGreased} handleSort={setSort} />
			<HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
