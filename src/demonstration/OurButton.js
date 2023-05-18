import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const OurButtoon = () => {
    const onPress    = () => {
        console.log('press')
    }
    return(
        <TouchableOpacity style={styles.conatiner} onPress={onPress}>
            <Text style={styles.buttonText}>
                hello
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        elevation: 8,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding:5
    },
    buttonText:{
        fonatsize:15,
        color: "white",
        alignSelf: 'center',

    }
})

export default OurButtoon