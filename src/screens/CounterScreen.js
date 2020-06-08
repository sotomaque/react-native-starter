import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {

    const [count, setCount] = React.useState(0)

    return (
        <View>
            <Button title="Increase" onPress={() => setCount(prev => prev + 1)} />
            <Button title="Decrease" onPress={() => setCount(prev => prev - 1)} />
            <Text>{count}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreen
