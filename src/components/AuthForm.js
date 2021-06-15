import React ,{useState} from 'react'
import {Text,Button,Input} from 'react-native-elements'
import {StyleSheet} from 'react-native'
import Spacer from './Spacer'
const AuthForm = ({headerText,errorMessage,onSubmit,submitButtonTitle}) =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <>
          <Spacer>
                <Text h4>{headerText}</Text>
            </Spacer>
           <Input 
                label ="Email" 
                value = {email} 
                onChangeText = {setEmail}
                autoCapitalize = 'none' 
                autoCorrect ={false}>
            </Input>
           <Spacer/>
           <Input  
                label ="Password" 
                value = {password}
                secureTextEntry
                onChangeText = {setPassword}>

            </Input>
           <Spacer>
           
            {errorMessage ? <Text h5 style = {styles.errorMessage}>{errorMessage}</Text> : null}
           <Button title ={submitButtonTitle} onPress ={()=>{
               onSubmit(email,password)
           }}/>
           </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:200
    },
    errorMessage:{
        fontSize:16,
        color:'red',
        marginTop:15,
        marginLeft:15
    }
})


export default AuthForm;