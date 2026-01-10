import {View, Text, Button} from 'react-native'
import React from 'react'
import {router} from "expo-router";

const SingUp = () => {
    return (
        <View>
            <Text>SingUp</Text>
            <Button title="Sing In" onPress={()=> router.push("/sing-in")} />
        </View>
    )
}
export default SingUp
