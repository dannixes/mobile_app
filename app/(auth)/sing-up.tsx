import {View, Text, Button} from 'react-native'
import React, {useState} from 'react'
import {Link, router} from "expo-router";
import CostomButton from "@/components/CostomButton";
import CostomImput from "@/components/CostomImput";
import {Alert} from "react-native";

const SingUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: ''})

    const submit = async () => {
        if(!form.name || !form.email || !form.password) return  Alert.alert('Error', 'Please enter a valid email and password');


    setIsSubmitting(false);

    try {

        Alert.alert('Seccess', 'User signed up successfully!');
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
                placeholder="enter your full name"
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({...prev, name: text}))}
                label="Full name"

            />

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
                title="Sign Up"
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className="flex justify-center flex-row mt-5 gap-2">
                <Text className="base-regular text-gray-100">
                    Already have an account?
                </Text>
                <Link href="/sing-in" className="base-bold text-primary">
                    Sing in
                </Link>
            </View>
        </View>
    )
}

export default SingUp
