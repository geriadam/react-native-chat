import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignInScreen from '../screens/SignInScreen'
import ChatScreen from '../screens/ChatScreen'
import GroupScreen from '../screens/GroupScreen'
import AddGroupScreen from '../screens/AddGroupScreen'

const Stack = createStackNavigator()

function ChatFlow() {
    return (
        <NavigationContainer>
            <Stack.Navigator name="chat">
                <Stack.Screen name="SignInScreen" component={SignInScreen} option={{headerShow: false}} />
                <Stack.Screen name="Group Screen" component={GroupScreen} option={{title: "Groups"}} />
                <Stack.Screen name="Add Group Screen" component={AddGroupScreen} option={{title: "Add Group Screen"}} />
                <Stack.Screen name="Chat Screen" component={ChatScreen} option={{title: "Chats"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MainStackNavigator(){
    return(
        ChatFlow()
    )
}

export default MainStackNavigator
