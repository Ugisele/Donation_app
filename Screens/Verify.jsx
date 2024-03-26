import React from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "./Button";


const ForgetPW = () => {
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <MaterialIcons name="arrow" size={25} color={"#1ebb61"} />
                <Text>Forgot Password</Text>

            </View>
            <Text> <style>={{ fontSize: 15, paddingVertical: 20 }}</style>Code have been sent to number +250*******00</Text>
            <View style={{ display: "flex", flexDirection: 'row', gap: 10 }}>
                <TextInput placeholder="2" style={{ borderWidth: 1, borderRadius: 10 }} />
                <TextInput style={{ borderWidth: 1, borderRadius: 10 }} />
                <TextInput style={{ borderWidth: 1, borderRadius: 10 }} />
                <TextInput style={{ borderWidth: 1, borderRadius: 10 }} />
            </View>

            <Text>Resend the code in 56 S</Text>

            <Button title={'Verify'} />

        </View>

    )
}