import {View, Text, Button} from 'react-native'
import React from 'react'
import {router} from "expo-router";

const SingIn = () => {
    return (
        <View>
            <Text>SingIn</Text>
            <Button title="Sing Up" onPress={()=> router.push("/sing-up")} />
        </View>
    )
}
export default SingIn
