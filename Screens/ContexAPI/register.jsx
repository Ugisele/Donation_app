import React, { useContext, } from "react"
import { View, Image, Text, Pressable,StyleSheet,Button,useColorScheme,Switch,Statusbar } from "react-native";
import { TextInput, IconButton, Icon } from "react-native-paper";
import { ChangeMode } from "./context";



const SignUp = ({navigation}) =>{
    const {handleChange , light} = useContext(ChangeMode)
    // const [colorScheme,toggleColorScheme] = useColorScheme();

    return(
        <View style={{  
            backgroundColor: light ? 'green'  : 'black',
            paddingVertical:20,
            paddingHorizontal:20,
            height: "100%",}} >

            <Pressable onPress={() => {handleChange()}} style={{flexDirection:'row',alignSelf:'flex-end'}}>

            <IconButton icon = 'weather-night' size={25} />

            </Pressable>
       
       {/* <Switch value={{}} onValueChange={() => {}} /> */}
        
        <View style={styles.view}>
            <Text style={{ 
                fontSize: 24,
                fontWeight: "500",
                marginBottom: 20,
                color: light ? 'black' : 'white'}}>Please sign up</Text>
            <TextInput style={styles.input}
            label='email'
            mode="flat"
            placeholder="Email Address"
            />
           <TextInput style={styles.input}
            label='password'
            mode="flat"
            placeholder="Enter password"
            right={<TextInput.Icon icon={'eye'} size={25}/>}
            />
            <TextInput style={styles.input}
            label='email'
            mode="flat"
            placeholder="Email Address"
            />
           <TextInput style={styles.input}
            label='Confirm password'
            mode="flat"
            placeholder="Confirm password"
            right={<TextInput.Icon icon={'eye'} size={25}/>}
            />

            <Pressable>
                <Text style={{backgroundColor:'red',fontSize: 18,width: 375,height:40,textAlign:'center',paddingTop:8,color:'white',fontWeight:'600',top:20}}>
                    Register
                </Text>
            </Pressable>

            <Pressable onPress={ () => {
                navigation.navigate("input")
            }}>
                <Text style={{paddingVertical:40,top:20,color:light ? 'blue' : 'green',fontSize: light ? 25 : 20}}>Sign In</Text>
            </Pressable> 
        </View>
    
        </View>
    )
}
export default SignUp;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        paddingVertical:20,
        paddingHorizontal:20,
        height: "100%",
    },
    view: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 20,
    },
    input:{
        width: "95%",
        borderWidth: 1,
        backgroundColor: "#ffffff",
        marginBottom: 12,
    }
})