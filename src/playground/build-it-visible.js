class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handelToggleVisibility = this.handelToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handelToggleVisibility() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handelToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>It's working without page refresh!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibilty = false;
// const toggle = () => {
//     visibilty = visibilty === false ? true : false;
//     reRender();
// };

// const reRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>
//                 {visibilty ? 'Hide Details': 'Show Details'}
//             </button>
//             {visibilty && <p>It's working without page refresh!</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// };

// reRender();