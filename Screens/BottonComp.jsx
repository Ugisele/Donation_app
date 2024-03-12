import * as React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";


const Button = ({title}) =>{
    return(
        <TouchableOpacity style={styles.btn} >
            <Text style={styles.btntext}>{title}</Text>
        </TouchableOpacity>
    )
}
 export default Button;

 const styles = StyleSheet.create({
    btn: {
        backgroundColor:'#25c067',
        height:50,
        borderRadius:30,
        marginTop:30
        
    },
    btntext: {
        textAlign:'center',
        fontSize: 18, 
        fontWeight: '400',
        color:'whitesmoke',
        paddingTop:10
    },

 })

 