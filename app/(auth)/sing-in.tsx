import {View, Text, Button} from 'react-native'
import React, {useState} from 'react'
import {Link, router} from "expo-router";
import CostomButton from "@/components/CostomButton";
import CostomImput from "@/components/CostomImput";
import {Alert} from "react-native";

const SingIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({email: '', password: ''})

    const submit = async () => {
        if (!form.email || !form.password) return Alert.alert('Error', 'Please enter a valid email and password');


    setIsSubmitting(true);

    try {

        Alert.alert('Seccess', 'User signed in successfully!');
        router.replace('/');
    } catch (error: any) {
        Alert.alert('Error', error.message);
    } finally {
        setIsSubmitting(false);
    }
}

    return (
        <View className=" gap-10 bg-white rounded-lg p-5 mt-5">
            <CostomImput
                placeholder="enter your email"
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({...prev, email: text}))}
                label="Email"
                keyboardType="email-address"

            />

            <CostomImput
                placeholder="enter your password"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({...prev, password: text}))}
                label="Password"
                secureTextEntry={true}

            />

            <CostomButton
                title="Sign in"
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className="flex justify-center flex-row mt-5 gap-2">
                <Text className="base-regular text-gray-100">
                    Don't have an account?
                </Text>
                <Link href="/sing-up" className="base-bold text-primary">
                    Sing up
                </Link>
            </View>
        </View>
    )
}
export default SingIn
