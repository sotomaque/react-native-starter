import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    // state: { red: number, green: number, blue: number }
    // action: { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    switch (action.type) {

        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state
                : { ...state, red: state.red + action.payload }

        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
                ? state
                : { ...state, green: state.green + action.payload }

        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state
                : { ...state, blue: state.blue + action.payload }

        default:
            return state
    }

}

const SquareScreen = () => {

    const [state, dispatch] = React.useReducer(reducer, { red: 0, green: 0, blue: 0 });

    const color = `rgb(${state.red}, ${state.green}, ${state.blue})`

    return (
        <View>
            <AdjustColor 
                color="Red" 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })} 
            />
            <AdjustColor 
                color="Green" 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })} 
            />
            <AdjustColor 
                color="Blue" 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
            />
            <View style={{ height: 100, width: '100%', backgroundColor: color }} />
            <Text style={{ textAlign: 'center' }}>{color}</Text>
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
