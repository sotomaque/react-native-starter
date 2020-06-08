import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const reducer = (state, action) => {

    switch (action.type) {
        case 'increment_count':
            return {...state, count: state.count + action.payload}

        case 'decrement_count':
            return {...state, count: state.count + action.payload}

        default:
            return state
    }
}


const CounterScreen = () => {

    const [state, dispatch] = React.useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ type: 'increment_count', payload: 1 })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrement_count', payload: -1 })} />
            <Text style={{marginTop: 20, textAlign: 'center'}}>{state.count}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreen
