import React, {useContext} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context} from '../context/AuthContext'
import {SafeAreaView} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'
const AccountScreen = () =>{
    const {signout} = useContext(Context)
    return (
        <SafeAreaView forceInset = {{top:'always'}}>
            <Text>Account Screen</Text>
            <Spacer>
            <Button title = "Sign out" onPress ={signout}/>
            </Spacer>

        </SafeAreaView>
    )
}
AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon:<FontAwesome name = "gear" size = {20}/>
}
const styles = StyleSheet.create({})

export default AccountScreen;