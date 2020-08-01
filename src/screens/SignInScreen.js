import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import String from '../const/String'
import Button from '../components/Button'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'

function SignInScreen(){
    return (
        <View style={styles.container}>
            <Text>SignIn Screen</Text>
            <Button title={String.join}></Button>
            <EmailTextField></EmailTextField>
            <PasswordTextField></PasswordTextField>
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

export default SignInScreen
