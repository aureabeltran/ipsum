import React, { Component } from 'react';
import ContactForm from './ContactForm';
import close from '../../assets/images/icons/close.png'

class CallToAction extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeClass:'contenedor',
            firstCLass:'',
            isActive: false
        }
    }
    componentDidMount(){
        this.setState({
            firstCLass: 'call-to-action animated fadeIn active',
            isActive: true
        })
        setTimeout(() => {  
            this.setState({
                activeClass: 'contenedor animated fadeInDown',
            })
        }, 400)
    }

    componentWillReceiveProps(prev, state){
        if(prev.isActive !== state.isActive){
            if(prev.isActive){
                this.setState({
                    firstCLass: 'call-to-action animated fadeIn active'
                })
                setTimeout(() => {  
                    this.setState({
                        activeClass: 'contenedor animated fadeInDown active',
                    })
                }, 400)
            }
            else{
                this.setState({
                    activeClass: 'contenedor animated fadeOutUp'
                })
                setTimeout(() => {  
                    this.setState({
                        firstCLass: 'call-to-action animated fadeOut',
                    })
                }, 400)
            }

        }
    }

    closeModal(){
        this.props.onClick()
    }
    
    render() {
      return (
            <div className={this.state.firstCLass}>
                
                <div className={this.state.activeClass}>
                    <button className="no-button close-btn" onClick={()=>this.closeModal()}><img src={close} alt="close" /></button>
                    <ContactForm />
                </div>
            </div>
        );
    }
  }
export default CallToAction;