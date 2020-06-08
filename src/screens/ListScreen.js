import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'enrique', age: 25 },
        { name: 'william', age: 23 },
        { name: 'mark', age: 26 },
        { name: 'adam', age: 24 }
    ]


    return (
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={friends} 
            renderItem={({ item }) => {
                return (
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age}</Text>
                    </View>
                )
            }}
            keyExtractor={(friend) => friend.name }
        />
    );
}


const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: "black",
        margin: 10
    },
    textStyle: {
        textAlign: "center"
    }
});

export default ListScreen;