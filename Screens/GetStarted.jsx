import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "./BottonComp";


const Started = () => {
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 30, }}>

            <View style={{ paddingVertical: 50, paddingHorizontal: 26 }}>

                <Image style={{ width: 300, height: 200, alignItems: 'center' }} source={require('../assets/getstarted.png')} />

            </View>

            <View style={{ paddingVertical: 50 }}>

                <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '800', color: '#64cd91', paddingVertical: 15, }}>Donate easily,quickly,right on target all over the world </Text>
                <Text style={{ textAlign: 'center' }}>Welcome to Donate, where making a difference is easier than ever. With our app, you can donate easily,
                    quickly, and directly to causes that matter,no matter where you are in the world.
                    Join us in making an impact right on target, one donation at a time.</Text>

            </View>
            <View style={{ height: 40 }}></View>
            <View >
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#64cd91', marginBottom: 10 }}>Skip</Text>
                </TouchableOpacity>

                <Button title={'Next'} />
            </View>


        </View>

    )
}

export default Started;