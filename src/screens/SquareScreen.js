import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    // state: { red: number, green: number, blue: number }
    // action: { type: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.type) {
        
        case 'red':
            return {...state, red: state.red + action.amount}

        case 'green':
            return {...state, green: state.green + action.amount}

        case 'blue':
            return {...state, blue: state.blue + action.amount}

        default:
            return state
    }
        
}

const SquareScreen = () => {

    const [{red, green, blue}, dispatch] = React.useReducer(reducer, { red: 0, green: 0, blue: 0 });

    const color = `rgb(${red}, ${green}, ${blue})`

    return (
        <View>
            <AdjustColor color="Red" onIncrease={() => dispatch({ type: 'red', amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'red', amount: -1 * COLOR_INCREMENT }) } />
            <AdjustColor color="Green" onIncrease={() => dispatch({ type: 'green', amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'green', amount: -1 * COLOR_INCREMENT }) } />
            <AdjustColor color="Blue" onIncrease={() => dispatch({ type: 'blue', amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'blue', amount: -1 * COLOR_INCREMENT }) } />
            
            <View style={{ height: 100, width: '100%', backgroundColor: color }} />
            <Text style={{textAlign: 'center'}}>{color}</Text>
        </View>
    )
}


const AdjustColor = ({ color, onIncrease, onDecrease }) => {

    return (
        <React.Fragment>
            <Text>{color}</Text>
            <Button title={`More ${color}`} onPress={onIncrease} />
            <Button title={`Less ${color}`} onPress={onDecrease} />
        </React.Fragment>
    )
}



const styles = StyleSheet.create({

})

export default SquareScreen
