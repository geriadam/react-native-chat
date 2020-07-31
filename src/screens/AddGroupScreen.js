import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function AddGroupScreen(){
    return (
        <View style={styles.container}>
            <Text>AddGroup Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default AddGroupScreen
