import React from 'react'
import { View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
    return (
        <View>

            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={9} />
            <ImageDetail title="Forrest" imageSource={require('../../assets/forest.jpg')} score={5} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={2} />

        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        textAlign: 'center'
    }
})

export default ImageScreen;