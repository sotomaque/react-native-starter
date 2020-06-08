import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {

    const [password, setPassword] = React.useState('')


    return (
        <View>
            
            <Text style={styles.label}>Enter Password:</Text>
            <TextInput 
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInputStyle}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder='Enter Password'
            />
            {
                password.length && password.length < 6 
                    ? <Text style={styles.error}>Your password must be at least 6 characters long</Text>
                    : null
            }
                  
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        margin: 15,
        marginTop: 5,
        padding: 10
    },
    label: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'left',
        margin: 15,
        marginBottom: 0
    },
    error: {
        textAlign: 'center',
        color: 'red',
        fontSize: 14
    }
})

export default TextScreen
