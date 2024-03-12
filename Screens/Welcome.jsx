import React from "react";
import { Image, Text, TouchableOpacity, View ,Dimensions} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "./BottonComp";


export const height = Dimensions.get("window").height
const width = Dimensions.get("window").width


const Welcome = () => {
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 30,height:height,width:width}}>
            <View style={{ paddingVertical: 50, }}>
                <Image style={{ width: 300, height: 200, alignItems: 'center' }} source={require('../assets/welcom.png')} />
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', }}>Let's you in</Text>
            <View style={{ paddingVertical: 40 }}>
                <TouchableOpacity style={{ borderRadius: 10, borderWidth: 0.03, padding: 10, display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 10 }}>
                    <MaterialIcons name='facebook' size={32} color='#3b5e99' />
                    <Text style={{ fontSize: 16, marginTop: 4 }}>Facebook</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, borderWidth: 0.03, padding: 10, display: 'flex', marginRight: 25, flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 8 }}>
                    <Image source={require('../assets/google.png')} style={{ height: 32, width: 32 }} />
                    <Text style={{ fontSize: 16, marginTop: 2 }}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 10, borderWidth: 0.03, padding: 10, display: 'flex', marginRight: 25, flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 8 }}>
                    <MaterialIcons name='apple' size={32} />
                    <Text style={{ fontSize: 16, marginTop: 3 }}>Apple</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, marginTop: 20, fontWeight: '300', textAlign: 'center', marginBottom: 20 }}>Or</Text>

                <Button title='sign in with Password' style={{}} />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, paddingVertical: 20, alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, }}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, color: '#64cd91' }}>Sign Up</Text>

                    </TouchableOpacity>


                </View>



            </View>
        </View>
    )
}

export default Welcome;