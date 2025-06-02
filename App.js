import { StyleSheet, Text, View } from "react-native";
import { useTicTacToe } from "./hooks/useTicTacToe.js";
import TicTacToe from "./components/tictactoe.jsx";
export default function App() {
  const { board, currentPlayer, makeMove } = useTicTacToe();

  return (
    <View style={styles.container}>
      <Text>TicTacToe</Text>
       <TicTacToe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});