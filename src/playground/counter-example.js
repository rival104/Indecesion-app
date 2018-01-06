let count = 0;
const addOne = () => {
    count++;
    reRenderCount();
    console.log('addOne');
};
const minusOne = () => {
    count--;
    reRenderCount();
    console.log('minusOne');
};
const reset = () => {
    count = 0;
    reRenderCount();
    console.log('reset');
};



const reRenderCount = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    const appRoot = document.getElementById("app");

    ReactDOM.render(templateTwo, appRoot);
};

reRenderCount();