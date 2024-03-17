import React from "react";
import { View, Text, Pressable, Image,Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "./Button";


const height= Dimensions.get('screen').height
const width= Dimensions.get('screen').width


const ForgetPW = () => {
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 70,backgroundColor:'witesmoke',height:height,width:width}}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>

                <MaterialIcons name="arrow-back" size={25} color={"#1ebb61"} />
                <Text style={{fontSize:20,fontWeight:'bold'}}>Forgot Password</Text>

            </View>

            <View style={{ paddingVertical: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/forget.png')} style={{ width: 300, height: 250 }} />
            </View>

            <Text style={{fontSize:15,fontWeight:'400',marginBottom:19}}>Select which contact details should we use to reset password</Text>


            <View style={{ display: 'flex', flexDirection: 'row', gap: 15,marginBottom:10,height:100,borderWidth:2,borderRadius:10,borderColor:'#1ebb61'}}>
                <View style={{ backgroundColor:'#e8f8ef',marginTop:6,width:80,marginLeft:6,height:80, display: 'flex',justifyContent:'center',alignItems:'center',alignContent:'center',borderRadius:100}}>
                    <MaterialIcons name="message" color={'#1ebb61'} size={30}/>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontWeight:'200',}}> Via sms:</Text>
                    <Text style={{fontWeight:'700',}}> +250*******00</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15,marginBottom:10,height:100,borderRadius:10,}}>
                <View style={{ backgroundColor:'#e8f8ef',marginTop:6,width:80,marginLeft:6,height:80, display: 'flex',justifyContent:'center',alignItems:'center',alignContent:'center',borderRadius:100}}>
                    <MaterialIcons name="mail" color={'#1ebb61'} size={30} />
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontWeight:'200',}}> Via email:</Text>
                    <Text style={{fontWeight:'700',}}> ug*******@gmail.com</Text>
                </View>
            </View>

            <Pressable>
                <Button title={'Continue'}/>
            </Pressable>


        </View>
    )
}

export default ForgetPW;