import React from "react"
import './index.css'

/**
 * 
 * 
 */
// class Square extends React.Component {
//   render() {
//     return (
//       /**
//        * onClick 这个 prop 传入的方法需有 ()=>
//        * 如果写成 onClick={alert(1)} 则会在此组件每次被渲染的时候都触发弹出框  
//        */
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.squares}
//       </button>
//     );
//   }
// }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>{props.squares}</button>
    )
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square squares={this.props.squares[i]} onClick={() => { this.props.onClick(i) }} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        /**
        * 子组件的构造器中第一行必须写 super(props)
        */
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            isNextX: true,
            stepNumber: 0
        }

        // this.handleClick = this.handleClick.bind(this)
        // this.jumpTo = this.jumpTo.bind(this)
    }

    handleClick = (i) => {
        console.log('i', i)
        console.log('this###', this)
        // let history = this.state.history
        let history = this.state.history.slice(0, this.state.stepNumber + 1);

        const current = history[history.length - 1]
        if (calculateWinner(current.squares) || current.squares[i]) {
            return
        }
        const newArr = current.squares.slice();
        newArr[i] = this.state.isNextX ? 'X' : "O";
        this.setState({
            history: [...history, { squares: newArr }],
            isNextX: !this.state.isNextX,
            stepNumber: history.length
        })
    }

    jumpTo(i, e) {
        console.log("e..", e)
        this.setState({
            stepNumber: i,
            isNextX: (i % 2) === 0
        })
    }

    render() {
        const history = this.state.history

        // const current = history[history.length - 1]
        const current = history[this.state.stepNumber];

        const winner = calculateWinner(current.squares)
        let status = '';
        if (winner) {
            status = `Winner : ${winner}`
        } else {
            status = `Next player: ${this.state.isNextX ? "X" : "O"} `
        }

        const moves = history.map((item, index) => {
            const desc = index ? 'Go to move #' + index : 'Go to game start';
            // 返回了一个 react元素
            return (
                <li key={index}>
                    <button onClick={this.jumpTo.bind(this, index)}>{desc}</button>
                </li>
            )
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={this.handleClick} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export { Game }