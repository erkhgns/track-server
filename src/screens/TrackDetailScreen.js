import React,{useContext} from 'react'
import {View,Button,Text,StyleSheet} from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import MapView, {Polyline} from 'react-native-maps'
const TrackDetailScreen = ({navigation}) =>{
    const id = navigation.getParam('id')
    const {state} = useContext(TrackContext)

    const track = state.find(t => t._id === id)
    const initialCoords = track.locations[0].coords
    return (
        <>
            <Text>{track.name}</Text>
            <MapView style = {styles.map} initialRegion ={{
                longitudeDelta:0.01,
                latitudeDelta:0.01,
                ...initialCoords
            }}>
            <Polyline coordinates ={track.locations.map(loc => loc.coords)}/>
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map:{
        height: 200
    }
})

export default TrackDetailScreen;