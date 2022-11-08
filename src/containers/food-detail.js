import React,{Component} from 'react';
import { connect } from 'react-redux';

class FoodDetail extends Component {
    render (){
        if(!this.props.activeFood){
            return <h2>Select food!</h2>
        }
        return(
            <div>
                {this.props.activeFood.desc}
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
         activeFood: state.activeFood
    }
}

// container component to connect the presentational component to redux
let FoodContainer = connect(mapStateToProps)(FoodDetail);

export default FoodContainer;