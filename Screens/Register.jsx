import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "./BottonComp";
import TextInputComp from "./InputComp";

export const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const SignUp = () => {
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 30,width:width,height:height }}>
            <View style={{ paddingVertical: 50, paddingHorizontal: 26 }}>

                <Image style={{ width: 300, height: 200, alignItems: 'center' }} source={require('../assets/logo.png')} />

            </View>

            <Text style={{fontSize: 20,textAlign:'center',fontWeight:'bold'}}> Sign Up for free</Text>
            <View>
                
            </View>


        </View>
    )
}

export default SignUp;