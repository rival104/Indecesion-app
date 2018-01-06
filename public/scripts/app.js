'use strict';

var visibilty = false;
var toggle = function toggle() {
    visibilty = visibilty === false ? true : false;
    reRender();
};

var reRender = function reRender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            visibilty ? 'Hide Details' : 'Show Details'
        ),
        visibilty && React.createElement(
            'p',
            null,
            'It\'s working without page refresh!'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

reRender();
