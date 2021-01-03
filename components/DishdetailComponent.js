import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { DISHES } from '../shared/dishes';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={ require('./images/uthappizza.png') } />
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component {

    constructor({ route, props}) {
        super(props);
        this.route = route;
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const { dishId } = this.route.params;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <RenderDish dish={this.state.dishes[+dishId]} />
            </View>
            
        );
    }
}

export default Dishdetail;