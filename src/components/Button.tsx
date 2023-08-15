import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import COLORS from '../styles/colors';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

type ButtonProps = {
  onPress: () => void,
  text: string,
  size?: string,
  theme?: string,
}

const Button = ({ onPress, text, theme = "DEFAULT", size = 'DEFAULT' }: ButtonProps) => {
  let backgroundColorButtonStyle = styles.defaultStyle.backgroundColor;
  let colorTextStyle = styles.defaultStyle.color;

  if (theme === 'PRIMARY') {
    backgroundColorButtonStyle = styles.primaryStyle.backgroundColor;
    colorTextStyle = styles.primaryStyle.color;
  } else if(theme === 'SECONDARY') {
    backgroundColorButtonStyle = styles.secondaryStyle.backgroundColor;
    colorTextStyle = styles.secondaryStyle.color;
  }

  const buttonStyles = [styles.button, {backgroundColor: backgroundColorButtonStyle}];
  const textStyles = [styles.text, {color: colorTextStyle}];

  if (size === "DOUBLE") {
    buttonStyles.push(styles.buttonDouble); // TODO improve this
  }
    
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles, size === "DOUBLE" ? styles.buttonDouble : {}]}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {fontSize: 35},
  button: {
    flex: 1,
    height: Math.floor(buttonWidth - 15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  primaryStyle: {
    color: COLORS.PRIMARY_TEXT,
    backgroundColor: COLORS.PRIMARY_BG
  },
  secondaryStyle: {
    color: COLORS.SECONDARY_TEXT,
    backgroundColor: COLORS.SECONDARY_BG
  },
  defaultStyle: {
    color: COLORS.DEFAULT_TEXT,
    backgroundColor: COLORS.DEFAULT_BG
  },
  
});

export default Button;
