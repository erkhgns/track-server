import React ,{useContext}from 'react'
import {View,StyleSheet} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {NavigationEvents} from 'react-navigation'
const SignUpScreen = () =>{
 
    const {state,signup,clearErrorMessage} = useContext(AuthContext)


  
    return (
        <View style = {styles.container}>
            <NavigationEvents
                onWillFocus ={clearErrorMessage}
            />
          <AuthForm 
                headerText = "Sign Up For Tracker" 
                errorMessage = {state.errorMessage} 
                submitButtonTitle = "Sign Up"
                onSubmit = {(email,password)=>{
                    signup(email,password)
                }}
            />
            <NavLink text = "Already have an account? Sign in instead!" routeName = "SignIn"/>
          
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:200
    }
})

export default SignUpScreen;