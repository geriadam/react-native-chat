import React from 'react'
import { TouchableOpacity, StyleSheet, Text, ActivityIndicator, View } from 'react-native'
import Color from '../utils/Colors'

const Button = (props) => {
    const { title = "Enter", style = {}, textStyle = {}, onPress, isLoading } = props
    const loader = () => {
        return (
            <ActivityIndicator animating={isLoading}></ActivityIndicator>
        )
    }

    const button = () => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.button, style]}>
            {isLoading ? loader() : button()}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: Color.green,
        shadowColor: Color.green,
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: Color.white
    }
})

export default Button
