import React, { useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import styles from "./styles/LoginStyle";
styles

const Login = ({ navigation }) => {
  <FlashMessage position="top" />;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const auth =FIREBASE_AUTH

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let valid = true;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        showMessage({
          message: "successful",
          type: "success",
          duration: 3000,
        });
        setTimeout(() => {
          navigation.navigate("congratulation");
        }, 3000);
      } catch (error) {
        showMessage({
          message: "Failed",
          type: "danger",
          duration: 3000,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.img}>
        <Image
          source={require("../assets/wecare.png")}
          style={styles.image}
          
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign in to your account</Text>
      </View>
      <TextInput
        theme={{
          roundness: 20,
          colors: {
            primary: "#29c46b",
          },
        }}
        style={styles.input}
        mode="flat"
        placeholder="email"
        placeholderTextColor="gray"
        underlineColor="#fcfcfc"
        textColor="#eceeef"
        onChangeText={setEmail}
        error={emailError}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        theme={{
          roundness: 20,
          colors: {
            primary: "#29c46b",
          },
        }}
        style={styles.input}
        textColor="#eceeef"
        placeholder="password"
        placeholderTextColor="gray"
        secureTextEntry={!showPassword}
        value={password}
        underlineColor="#fcfcfc"
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={togglePasswordVisibility}
            color="#90959d"
          />
        }
        onChangeText={setPassword}
        error={passwordError}
      />
       {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <Pressable onPress={handleSubmit} style={styles.get}>
        <Text
          style={{
            color: "#b7e1c9",
            backgroundColor: "#54ae7a",
            textAlign: "center",
            width: "100%",
            borderRadius: 20,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Sign In
        </Text>
      </Pressable>
      <Text style={{ color: "#71d19a", marginTop: 20, marginBottom: 20 }}>
        Forgot password?
      </Text>
      <Text style={{ color: "#8a8e95", fontWeight: "500" }}>
        Or continue with
      </Text>
      <View style={styles.icon}>
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="facebook"
            type="font-awesome"
            size={20}
            backgroundColor="#277eff"
            color="#fff"
            padding={5}
            borderRadius={50}
          />
        </View>
        <View style={styles.bg}>
          <Image
            source={require("../assets/google.png")}
            style={styles.google}
          />
        </View>
        <View style={styles.bg}>
          <Icon
            style={styles.iconStyle}
            name="apple"
            type="font-awesome"
            size={25}
            color="#000"
          />
        </View>
      </View>

      <View style={styles.link}>
        <Text style={{ color: "#d6d7da" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("register")}>
          <Text style={{ color: "#66ce92" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
