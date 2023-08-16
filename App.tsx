import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';

import Row from "./src/components/Row";
import Button from "./src/components/Button";
import CONSTANTS from './src/config';

function App(): JSX.Element {
  const [result, setResult] = useState<string>(CONSTANTS.INITIAL_STATE);

  const handleButton = (type: string, value: string) => {
    if(value === "") {
      return setResult(CONSTANTS.INITIAL_STATE);
    }

    if(type === "operator") {
      console.log('operator!!!!')
    }

    setResult((prevResult: string) => (prevResult === CONSTANTS.INITIAL_STATE) ? value : prevResult + value);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>

        <Row>
          <Button
            text="AC"
            theme={CONSTANTS.SECONDARY}
            onPress={() => handleButton(CONSTANTS.OPERATOR, "clear")}
          />
          <Button
            text="+/-"
            theme={CONSTANTS.SECONDARY}
            onPress={() => console.log(CONSTANTS.OPERATOR, "posneg")}
          />
          <Button
            text="%"
            theme={CONSTANTS.SECONDARY}
            onPress={() => console.log(CONSTANTS.OPERATOR, "percentage")}
          />
          <Button
            text="/"
            type={CONSTANTS.OPERATOR}
            theme={CONSTANTS.PRIMARY}
            onPress={() => handleButton(CONSTANTS.OPERATOR, "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleButton(CONSTANTS.NUMBER, "7")} />
          <Button text="8" onPress={() => handleButton(CONSTANTS.NUMBER, "8")} />
          <Button text="9" onPress={() => handleButton(CONSTANTS.NUMBER, "9")} />
          
          <Button
            text="x"
            type={CONSTANTS.OPERATOR}
            theme={CONSTANTS.PRIMARY}
            onPress={() => console.log(CONSTANTS.OPERATOR, "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleButton(CONSTANTS.NUMBER, "4")} />
          <Button text="5" onPress={() => handleButton(CONSTANTS.NUMBER, "5")} />
          <Button text="6" onPress={() => handleButton(CONSTANTS.NUMBER, "6")} />
          
          <Button
            text="-"
            type={CONSTANTS.OPERATOR}
            theme={CONSTANTS.PRIMARY}
            onPress={() => console.log(CONSTANTS.OPERATOR, "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleButton(CONSTANTS.NUMBER, "1")} />
          <Button text="2" onPress={() => handleButton(CONSTANTS.NUMBER, "2")} />
          <Button text="3" onPress={() => handleButton(CONSTANTS.NUMBER, "3")} />
          
          <Button
            text="+"
            type={CONSTANTS.OPERATOR}
            theme={CONSTANTS.PRIMARY}
            onPress={() => console.log(CONSTANTS.OPERATOR, "+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="DOUBLE"
            onPress={() => handleButton(CONSTANTS.NUMBER, "0")}
          />
          <Button 
            text="," 
            onPress={() => console.log(CONSTANTS.NUMBER, ".")} 
          />
          
          <Button
            text="="
            theme={CONSTANTS.PRIMARY}
            onPress={() => console.log(CONSTANTS.OPERATOR, "equal")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,255)",
    justifyContent: "flex-end"
  },
  mainContainer: {
    marginHorizontal: 10, 
    marginBottom: 10,
  },
  resultText: {
    color: "#fff",
    fontSize: 60,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});


export default App;
