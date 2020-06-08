import React from 'react'

import { View, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {

    const [colors, setColors] = React.useState([]);

    const handleAddColorPress = () => {

        const red = Math.floor(Math.random() * Math.floor(255));
        const green = Math.floor(Math.random() * Math.floor(255));
        const blue = Math.floor(Math.random() * Math.floor(255));

        const newColor = `rgb(${red}, ${green}, ${blue})`

        setColors([...colors, newColor])
    }

    return (
        <View>
            <Button title="Add Random Color" onPress={handleAddColorPress} />
            { 
                colors && 
                <FlatList
                    keyExtractor={(item) => item}
                    data={colors}
                    renderItem={({ item }) => {
                        return <View style={{ height: 100, width: '100%', backgroundColor: item }} />
                    }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorScreen
