import React from 'react';
import { useState,useEffect } from 'react';

const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};
const EMPTY_BOARD = Array(9).fill(null);
export function useTicTacToe(initialBoard = undefined) {
    const [board, setBoard] = useState(initialBoard ?? EMPTY_BOARD);
    const xIsNext = board.filter(Boolean).length % 2 === 0;


    const winner = calculateWinner(board);
    const handleClick = (i) => {
        const boardCopy = board.slice();
        if (calculateWinner(boardCopy) || boardCopy[i]) {
            return;
        }
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
    };


    const restartGame = () => {
        setBoard(Array(9).fill(null));
    };

    const gameStatus = winner ? `Winner: ${winner}` :
        board.every((square) => square !== null) ? 'Draw!' :
            `Next player: ${xIsNext ? 'X' : 'O'}`;
    return {
        board,
        handleClick,
        gameStatus,
        restartGame,
    };
}
