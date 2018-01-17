class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handeleAddOne = this.handeleAddOne.bind(this);
        this.handeleMinusOne = this.handeleMinusOne.bind(this);
        this.handeleReset = this.handeleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handeleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handeleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handeleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        }); 
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handeleAddOne}>+1</button>
                <button onClick={this.handeleMinusOne}>-1</button>
                <button onClick={this.handeleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     reRenderCount();
//     console.log('addOne');
// };
// const minusOne = () => {
//     count--;
//     reRenderCount();
//     console.log('minusOne');
// };
// const reset = () => {
//     count = 0;
//     reRenderCount();
//     console.log('reset');
// };



// const reRenderCount = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     const appRoot = document.getElementById("app");

//     ReactDOM.render(templateTwo, appRoot);
// };

// reRenderCount();