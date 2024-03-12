import React from "react";
import { View,StyleSheet } from "react-native";
import {TextInput,Icon} from "react-native-paper";
 
const TextInputComp = (label,placeholder,iconName,value,mode,onChangeText,) =>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            label={label}
            value={value}
            mode={mode}
            onChangeText={onChangeText}
            left={<TextInput.Icon Icon={iconName} size={25}/>}
            />
        </View>
    )

}
export default TextInputComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
})