import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';
import Row from "./src/components/Row";
import Button from "./src/components/Button";

function App(): JSX.Element {
  const [result, setResult] = useState<number>(0);

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
            onPress={() => console.log("clear")}
          />
          <Button
            text="+/-"
            onPress={() => console.log("posneg")}
          />
          <Button
            text="%"
            onPress={() => console.log("percentage")}
          />
          <Button
            text="/"
            onPress={() => console.log("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => console.log("number", 7)} />
          <Button text="8" onPress={() => console.log("number", 8)} />
          <Button text="9" onPress={() => console.log("number", 9)} />
          <Button
            text="x"
            onPress={() => console.log("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => console.log("number", 4)} />
          <Button text="5" onPress={() => console.log("number", 5)} />
          <Button text="6" onPress={() => console.log("number", 6)} />
          <Button
            text="-"
            onPress={() => console.log("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => console.log("number", 1)} />
          <Button text="2" onPress={() => console.log("number", 2)} />
          <Button text="3" onPress={() => console.log("number", 3)} />
          <Button
            text="+"
            onPress={() => console.log("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            onPress={() => console.log("number", 0)}
          />
          <Button text="," onPress={() => console.log("number", ".")} />
          <Button
            text="="
            onPress={() => console.log("equal")}
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
