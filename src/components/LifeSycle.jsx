import React, { Component } from 'react';

export default class LifeSycle extends Component {


    constructor(props) {
        super(props)
        this.state = {
            //anti pattern
            counter: props.num
        }
    }


    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState((prevState) => {
    //             return {
    //                 counter: prevState.counter - 1
    //             }
    //         })
    //     }, 1000)
    // }

    componentDidUpdate(prevprops, prevState) {
        if (prevState.counter === 1) {
            this.props.setIsShowComponent(false);
        }
        if (prevprops.num != this.props.num) {
            this.setState({
                counter: this.props.num
            });
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1
                }
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }



    render() {

        return (
            <>
                <h1>counter {this.state.counter}</h1>
            </>
        )

    }

}