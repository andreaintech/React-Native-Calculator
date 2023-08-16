import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

import COLORS from '../styles/colors';
import CONSTANTS from '../config';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

type ButtonProps = {
  onPress: (value: string, operator?: string) => void,
  text: string,
  size?: string,
  theme?: string,
  type?: string,
}

const Button = ({ 
  onPress, 
  text, 
  theme = "DEFAULT", 
  size = 'DEFAULT', 
  type = "DEFAULT",
}: ButtonProps) => {
  const [isActiveOperator, setIsActiveOperator] = useState(false);
  let backgroundColorButtonStyle = styles.defaultStyle.backgroundColor;
  let colorTextStyle = styles.defaultStyle.color;

  if (theme === 'PRIMARY') {
    if(isActiveOperator && type === CONSTANTS.OPERATOR) {
      backgroundColorButtonStyle = styles.activeOperatorStyle.backgroundColor;
      colorTextStyle = styles.activeOperatorStyle.color;
    } else {
      backgroundColorButtonStyle = styles.primaryStyle.backgroundColor;
      colorTextStyle = styles.primaryStyle.color;
    }
  } else if(theme === 'SECONDARY') {
    backgroundColorButtonStyle = styles.secondaryStyle.backgroundColor;
    colorTextStyle = styles.secondaryStyle.color;
  }

  const buttonStyles = [styles.button, {backgroundColor: backgroundColorButtonStyle}];
  const textStyles = [styles.text, {color: colorTextStyle}];

  if (size === "DOUBLE") {
    buttonStyles.push(styles.buttonDouble); // TODO improve this
  }

  const handleOnPress = () => {
    setIsActiveOperator(!isActiveOperator);
    console.log('isActiveOperator ', isActiveOperator);
  }
    
  return (
    <TouchableOpacity onPress={handleOnPress} style={[buttonStyles, size === "DOUBLE" ? styles.buttonDouble : {}]}>
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
  activeOperatorStyle: {
    color: COLORS.ACTIVE_OPERATOR_TEXT,
    backgroundColor: COLORS.ACTIVE_OPERATOR_BG
  },
});

export default Button;
