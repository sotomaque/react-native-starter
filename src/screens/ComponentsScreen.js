import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const myName = 'Enrique'

    return (
        <View>
            <Text style={styles.titleStyle}>Getting Started with React Native</Text>
            <Text style={styles.subtitleStyle}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        fontSize: 45
    },
    subtitleStyle: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default ComponentsScreen;
