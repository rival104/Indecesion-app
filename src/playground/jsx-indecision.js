console.log("app.js is running");

//JSX -JavaScript XML
const app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
}

const onFromSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
};

const resetOptions = () => {
    app.options = [];
    reRender();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    console.log(option);
};

const reRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option, i) => <li key={i}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFromSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};
reRender();