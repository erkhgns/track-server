import * as Location from 'expo-location'

const tenMeterWithDegrees = 0.0001;

const getLocation = increment =>{
    return{
        timestamp: 10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            longitude:121.14442655247066 + increment * tenMeterWithDegrees,
            latitude: 14.549647939976285 + increment * tenMeterWithDegrees
        }
    }
}

let counter = 0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++;
},1000)