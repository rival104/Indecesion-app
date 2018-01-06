
let visibilty = false;
const toggle = () => {
    visibilty = visibilty === false ? true : false;
    reRender();
};

const reRender = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>
                {visibilty ? 'Hide Details': 'Show Details'}
            </button>
            {visibilty && <p>It's working without page refresh!</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

reRender();