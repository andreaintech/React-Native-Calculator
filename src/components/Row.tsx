import { StyleSheet, View } from 'react-native'
import React, {ReactNode} from 'react'

type RowProps = {
    children: ReactNode
}

const Row = ({children}: RowProps) => {
  return (
    <View style={styles.row}>{children}</View>
  )
}

const styles = StyleSheet.create({
    row: { flexDirection: "row" }
});

export default Row