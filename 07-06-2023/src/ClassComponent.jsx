import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
    }
    // counterInterval = setInterval(() => {
    //     console.log("salam")
    // }, 1000);

    componentDidMount() {
        console.log("componentim render olundu")

    }
    componentDidUpdate() {
        console.log("componentim update olundu")
    }
    componentWillUnmount() {
        console.log("componentim unmount olundu")
        // clearInterval(this.counterInterval)
    }
    render() {
        return (
            <>
                <div>ClassComponent</div>
                <p>{this.state.counter}</p>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter + 1 })
                }}>increase</button >
            </>
        )
    }
}
