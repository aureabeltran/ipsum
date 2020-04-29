
import React, { Component } from 'react';
import HeaderFixed from '../layout/HeaderFixed.js';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-82203609-1');

export default class SecondLayout extends Component {
    constructor(props) {
        super(props)
        this.state={
            lenguage: 'EN',
            fixed:false,
            location:''
        }
        this.handleScroll = this.handleScroll.bind(this)
    };
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        console.log(this.props)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            loader: true
        })
        
    }

    handleScroll(){
        let scrollTop = window.pageYOffset
        if(scrollTop >= 10){ 
            this.setState({
                fixed: true
            })
        }
        else if(scrollTop <= 80 && this.state.fixed){
            this.setState({
                fixed: false
            })
        }
    }

    render() {
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                data: this.state,
                all: this.props
            });
        });

        let SecondLayout =
            <div>
                <HeaderFixed fix={this.state.fixed}/>
                {childrenWithExtraProp}
            </div>
        return SecondLayout
    }
}