import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import String from '../const/String'
import Button from '../components/Button'
import Color from '../utils/Colors'
import Utility from '../utils/Utility'
import Constant from '../const/Constants'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import DismissKeyboard from '../components/DismissKeyboard'

function SignInScreen(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    validateEmailAddress = () => {
        const isValidEmail = Utility.isEmailValid(email)
        isValidEmail ? setEmailError('') : setEmailError(String.invalidEmailAddress)
        return isValidEmail
    }

    validatePasswordField = () => {
        const isValidField = Utility.isValidField(password)
        isValidField ? setPasswordError('') : setPasswordError(String.passwordFieldEmpty)
        return isValidField
    }

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={styles.container} enabled>
                <View>
                    <SafeAreaView>
                        <View style={styles.headerLogin}>
                            <Text style={styles.loginText}>Login</Text>
                        </View>
                        <EmailTextField
                            term={email}
                            error={emailError}
                            placeholder={String.emailPlaceholder}
                            onTermChange={(newEmail) => setEmail(newEmail)}
                            onValidateEmailAddress={validateEmailAddress}
                        />
                        <PasswordTextField
                            term={password}
                            error={passwordError}
                            placeholder={String.passwordPlaceholder}
                            onTermChange={(newPassword) => setPassword(newPassword)}
                            onValidatePasswordField={validatePasswordField}
                        />
                        <Button
                            title={String.join}
                        />
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.theme,
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    headerLogin: {
        marginBottom: 20,
    },
    loginText: {
        fontSize: 28,
        textAlign: 'center',
        color: Color.white
    }
})

export default SignInScreen
