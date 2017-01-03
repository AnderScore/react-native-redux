import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import createStore from './createStore'

import Test from './Test'

const store = createStore()

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Test />
            </Provider>
        )
    }
}

export default App;