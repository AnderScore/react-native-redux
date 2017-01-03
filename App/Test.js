import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import * as actions from './actions'

class Test extends React.Component {

    londonWeather() {
         this.props.dispatch(actions.london())
    }

    render() {
        return (
            <View>
                <Text style={{margin: 20}}>Weather: {this.props.weather}</Text>
                <Button 
                    onPress={() => this.londonWeather()}
                    title="London"/>
            </View>
        )
    }
}

export default connect(
  state => ({
    weather: state.message
  })
)(Test);