import React, { useContext, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import { ChangeMode } from "./context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Input = ({ navigation }) => {
    const { handleChange, light } = useContext(ChangeMode);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const auth = FIREBASE_AUTH;

    const isValidate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const Validate = () => {
        let isValid = true;

        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!isValidate(email)) {
            setEmailError("Invalid email format");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const handleSubmit = async () => {
        if (Validate()) {
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                console.log(response);
                console.log("You are now signed in");

                navigation.navigate("congratulation");
            } catch (err) {
                console.log(err);
                console.log("Invalid email or password");
            }
        }
    };

    return (
        <View
            style={{
                backgroundColor: light ? "pink" : "black",
                paddingVertical: 20,
                paddingHorizontal: 20,
                height: "100%",
            }}
        >
            <Pressable onPress={() => handleChange()} style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <IconButton icon="weather-night" size={25} />
            </Pressable>

            <View style={styles.view}>
                <Text style={{ fontSize: 24, fontWeight: "500", marginBottom: 20, color: light ? "black" : "white" }}>Please sign in</Text>
                <TextInput
                    style={styles.input}
                    label="Email"
                    mode="flat"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                />
                {emailError ? <Text style={{ fontSize: 15, color: "red" }}>{emailError}</Text> : null}
                <TextInput
                    style={styles.input}
                    label="Password"
                    mode="flat"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter password"
                    right={<TextInput.Icon icon="eye" size={25} />}
                />
                {passwordError ? <Text style={{ fontSize: 15, color: "red" }}>{passwordError}</Text> : null}
                <Pressable onPress={handleSubmit}>
                    <Text style={{ backgroundColor: "red", fontSize: 18, width: 340, height: 40, textAlign: "center", paddingTop: 8, color: "white", fontWeight: "600", top: 20 }}>Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("signup")}>
                    <Text style={{ paddingVertical: 40, top: 20, color: light ? "blue" : "green", fontSize: light ? 25 : 20 }}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "95%",
        borderWidth: 1,
        backgroundColor: "#ffffff",
        marginBottom: 12,
    },
});
