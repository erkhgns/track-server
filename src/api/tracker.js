import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'



const instance = axios.create({
    baseURL:'http://192.168.100.53:3000'
})

instance.interceptors.request.use(
async (config)=>{
    // run the function every time we make a request
    const token = await AsyncStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},(err)=>{
    // run the function every time a request has an error

    return Promise.reject(err)
})


export default instance;