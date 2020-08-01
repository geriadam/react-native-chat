import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'
import Color from '../utils/Colors'
import Constant from '../const/Constants'

const PasswordTextField = ({term, placeholder, onTermChange, onValidatePasswordField, error}) => {
    return (
        <View>
            <Text style={styles.ErrorText}>{error}</Text>
            <View style={styles.TextFieldView}>
                <TextInput 
                    style={styles.TextField} 
                    autoCorrect={false} 
                    secureTextEntry
                    placeholder={placeholder}
                    onChangeText={onTermChange}
                    onEndEditing={onValidatePasswordField}
                    value={term}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextField: {
        fontSize: 14,
        flex: 1,
        marginHorizontal: 20,
    },
    TextFieldView: {
        height: Constant.screenHeight * 0.06,
        width: Constant.screenWidth,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
        borderColor: Color.black,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: Color.smoke
    },
    ErrorText: {
        fontSize: 12,
        color: Color.red,
        marginBottom: -5,
        marginHorizontal: 20
    }
})

export default PasswordTextField
