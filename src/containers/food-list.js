import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectFood } from "../actions";

class FoodList extends Component {
	createFoodListItems() {
		let listItems = this.props.foods.map((food) => {
			return (
				<li
					key={food.id}
					onClick={() => {
						this.props.selectFood(food);
					}}
				>
					{food.name}
				</li>
			);
		});
		return listItems;
	}

	render() {
		return <ul>{this.createFoodListItems()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		foods: state.foods,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectFood: selectFood }, dispatch);
}

// container component to connect the presentational component to redux
let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;
