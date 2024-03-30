import React, { useContext,useState } from "react"
import { View, Image, Text, Pressable,StyleSheet,Button,useColorScheme,Switch,Statusbar } from "react-native";
import { TextInput, IconButton, Icon } from "react-native-paper";
import { ChangeMode } from "./context";
import { RegisterSchema } from "../Validations/signup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";



const SignUp = ({navigation}) =>{

    const auth = FIREBASE_AUTH
    
    const {handleChange , light,} = useContext(ChangeMode)

    const [username,setUsername]=useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailerror, setemailError] = useState(false);
    const [passworderror, setPasswordError] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passWordSecurity, setPassWordSecurity] = useState(true)

    const isValidate = (email, password) =>{
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
 if (password !== confirmPassword){
    setPasswordsMatch(false)
 } else {
    setPasswordsMatch(true)
 }
 return isValid
 };

    const handleSubmit = async () => {
        if (Validate()) {
            try {
                const response = await createUserWithEmailAndPassword(auth,email,password)
                console.log(response);
                console.log('Successfully created');
            }
            catch (err) {
                console.log(err)
                console.log('error creating user');
            }
    
        console.log(username,email,password);
        navigation.navigate('input')

         } 
     } 
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
            label=' Username'
            value={username}
            onChangeText={setUsername}
            mode="flat"
            placeholder="Enter your username"
            /> 
            <TextInput style={styles.input}
            label='email'
            mode="flat"
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            />
            {emailerror ? <Text style={{fontSize: 15,color:'red'}}>{emailerror}</Text> : null}
           <TextInput style={styles.input}
            label='password'
            mode="flat"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            right={<TextInput.Icon icon={'eye'} size={25}/>}
            />
           {passworderror ? <Text style={{fontSize:15,color:"red"}}>{passworderror}</Text> : null}
           <TextInput style={styles.input}
            label='Confirm password'
            mode="flat"
            value={confirmPassword}
            onChangeText={text => {
                setConfirmPassword(text);
                setPasswordsMatch(text === password);
            }}
            placeholder="Confirm password"
            right={<TextInput.Icon icon={'eye'} size={25}/>}
            />
            {!passwordsMatch && <Text style={{fontSize:15, color:'red'}}>password don't match</Text>}

            <Pressable onPress={()=>{
                handleSubmit();
            }}>
                <Text style={{backgroundColor:'red',fontSize: 18,width: 340,height:40,textAlign:'center',paddingTop:8,color:'white',fontWeight:'600',top:20}}>
                    Register
                </Text>
            </Pressable>

            <Pressable onPress={()=>{
                handleSubmit();
            }} >
                <Text style={{paddingVertical:40,top:20,color:light ? 'blue' : 'green',fontSize: light ? 25 : 20}}>Sign In</Text>
            </Pressable> 
        </View>
    
        </View>
    )
 }
export default SignUp;

const styles = StyleSheet.create({

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