import React from 'react';
import { Text, View, StyleSheet } from 'react-native'


const BoxScreen = () => {
    return (
        <>
            <View style={styles.viewStyle}>
                <View style={styles.text1Style} />
                <View style={styles.text2Style} />
                <View style={styles.text3Style} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1Style: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    text2Style: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        alignSelf: 'flex-end'
    },
    text3Style: {
        height: 100,
        width: 100,
        backgroundColor: 'green'
    }
})

export default BoxScreen