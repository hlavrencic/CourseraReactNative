import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = (state, ownProps) => {
    return {
        leaders: state.leaders
    }
}

class About extends Component{
    constructor(props){
        super(props);

    }
  
    render(){

        const renderLeader = ({item, index}) => {

            return (
                <ListItem key={index} bottomDivider
                hideChevron={true}
                >
                    <Avatar rounded large source={{uri: baseUrl + item.image}} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.designation}</ListItem.Subtitle>
                        <Text>{item.description}</Text>
                    </ListItem.Content>
                </ListItem>
                
            );
        };
        

        return (
            <ScrollView>
                <Card>
                    <Card.Title>Our History</Card.Title>
                    <Card.Divider/>
                    <Text>
                        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                </Card>

                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider/>
                    <FlatList 
                                data={this.props.leaders.leaders}
                                renderItem={renderLeader}
                                keyExtractor={item => item.id.toString()}
                                />
                </Card>
            </ScrollView>
        );
    }
    
}

export default connect(mapStateToProps)(About);