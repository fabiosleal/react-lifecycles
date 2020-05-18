import React from "react";

class LifeCycles extends React.Component {
    constructor() {
        super();
        console.log("construtor!");
    }

    componentDidMount() {
        console.log("componentDidMount!");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate!");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount!");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate!", nextProps);
        // If the porps comming in is not different than the props we already have, there is no reason to rerender
        // This is mainly for performance.
        return this.props.text !== nextProps.text;
    }

    render() {
        console.log("render!");
        return (
            <div className='lifecycles'>
                <h3>LIFECYCLES COMPONENTS</h3>
                {this.props.text}
            </div>
        );
    }
}

export default LifeCycles;
