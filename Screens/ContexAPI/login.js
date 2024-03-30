import React, { useContext, useState, } from "react"
import { View,Text, Pressable,StyleSheet,} from "react-native";
import { TextInput, IconButton,} from "react-native-paper";
import { ChangeMode } from "./context";



const Input = ({navigation}) =>{
    const {handleChange , light} = useContext(ChangeMode);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [emailerror, setemailError] = useState(false);
    const [passworderror, setPasswordError] = useState(false)

    const isValidate = () =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    const Validate = () => {
        let isValid = true
        
        if (!email.trim()) {
            setemailError("Email is required")
         
        } else if (!isValidate(email)) {
            setemailError("Invalid email format")
    
        } else {
            setemailError("")
        }
    
        if (!password.trim()){
        setPasswordError('password is required')
        
     } else if (password.length < 8) {
        setPasswordError('password must be at least 8 charactres')
     } else{
        setPasswordError('')
     }
    }
    const handleSubmit = async () => {
        if (Validate()) {

            console.log("Login successful");
            navigation.navigate('welcome');
        } 
    }

    return(
        <View style={{  
            backgroundColor: light ? 'pink'  : 'black',
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
                color: light ? 'black' : 'white'}}>Please sign in</Text>
            <TextInput style={styles.input}
            label='email'
            mode="flat"
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            />
            {emailerror ? <Text style={{fontSize:15,color: 'red'}}>{emailerror}</Text> : null}
           <TextInput style={styles.input}
            label='password'
            mode="flat"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            right={<TextInput.Icon icon={'eye'} size={25}/>}
            />
            {passworderror ? <Text>{passworderror}</Text> : null}
            <Pressable onPress={() => {
                handleSubmit();
            }}>
                <Text style={{backgroundColor:'red',fontSize: 18,width: 340,height:40,textAlign:'center',paddingTop:8,color:'white',fontWeight:'600',top:20}}>
                    Login
                </Text>
            </Pressable>

            <Pressable onPress={() => {
                navigation.navigate("signup");
            }}>
                <Text style={{paddingVertical:40,top:20,color:light ? 'blue' : 'green',fontSize: light ? 25 : 20}}>Sign Up</Text>
            </Pressable> 
        </View>
    
        </View>
    )
}
export default Input;

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