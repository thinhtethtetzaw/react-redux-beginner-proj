import "./App.css";
import FoodContainer from "../containers/food-list";
import FoodDetailContainer from "../containers/food-detail";

function App() {
	return (
		<div className="App">
			<h2>
				List of foods:
				<FoodContainer />
				<FoodDetailContainer />
			</h2>
		</div>
	);
}

export default App;
