import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImageDetail = ({ title, score, imageSource }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.textStyles}>{title} - Score: {score}</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        textAlign: 'center'
    }
})

export default ImageDetail;