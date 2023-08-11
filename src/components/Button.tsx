import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

type ButtonProps = {
    onPress: () => void,
    text: string,
    size?: number
}

const Button = ({ onPress, text }: ButtonProps) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 35
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
});

export default Button;
