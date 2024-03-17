import * as React from "react";
import { View, Text } from "react-native";

const Button = ({title}) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#1ebb61",
        marginTop: 20,
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 20,
      }}
    >
      <Text style={{ textAlign: "center", color: "#c3ebd6", fontSize: 18 }}>
        {title}
      </Text>
    </View>
  );
};
export default Button;
