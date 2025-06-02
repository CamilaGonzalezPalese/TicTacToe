import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Button } from 'react-native';
import { useTicTacToe } from "../hooks/useTicTacToe.js";
const TicTacToe = () => {
  const { board, handleClick, gameStatus, restartGame } = useTicTacToe();

   const renderBoard = (i) => (
    <TouchableOpacity
      style={styles.board}
      onPress={() => handleClick(i)}
    >
      <Text style={styles.boardText}>{board[i]}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={{ flexDirection: 'row' }}>
        {renderBoard(0)}
        {renderBoard(1)}
        {renderBoard(2)}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {renderBoard(3)}
        {renderBoard(4)}
        {renderBoard(5)}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {renderBoard(6)}
        {renderBoard(7)}
        {renderBoard(8)}
      </View>
      <Text style={styles.status}>{gameStatus}</Text>
      <Button title="Reiniciar" onPress= {restartGame}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardText: {
    fontSize: 40,
  },
  status: {
    marginVertical: 20,
    fontSize: 20,
  },
});

export default TicTacToe;
