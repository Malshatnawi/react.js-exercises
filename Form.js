import React, { Component } from 'react'




class Form extends Component {

    state ={

        name:'',
        lname:'',
        email: '',
        fullname: '',
        TheEmail:'',

    }

    fnameHandle =(e) =>{
        this.setState({
            name:e.target.value,
        })
    }

    lnameHandle =(e) =>{
        this.setState({
            lname:e.target.value,
        })
    }

    emailHandle =(e) =>{
        this.setState({
            email:e.target.value,
        })
    }


    submitForm =(e) => {
        e.preventDefault();
        let email = this.state.email
        let name = this.state.name
        let lname = this.state.lname

        this.setState({
            fullname: name +' ' +lname,
            TheEmail:email,
            email:'',
            name:'',
            lname:'',
            
        })

    }

    


    render() {
        
        return (
            <div style={{backgroundColor:'skyblue', width:'50%',height:'50%' ,marginRight:'25%', marginLeft:"25%"}}>
                <form onSubmit={this.submitForm} style={{width:'100%', paddingRight:"25%",paddingLeft:"25%" , paddingTop:"5%",paddingBottom:"5%"}}>
                    <h3 style={{width:'80%'}}>Your Name is:</h3>
                    <h6>{this.state.fullname}</h6>
                    <br/>
                    <h3>Your Email is:</h3>
                    <h6>{this.state.TheEmail}</h6>
                    <br/>
                    <input style={{marginBottom:"5%" , width:"100%"}} ref={(v)=> {this.input = (v)}} onChange={this.fnameHandle} type="text" defaultvalue={this.state.name} required placeholder="First Name" />
                    <br/>
                    <input type="text" style={{marginBottom:"5%", width:"100%"}} onChange={this.lnameHandle} defaultvalue={this.state.lname} required placeholder="Last Name"/>
                    <br/>
                    <input type="text" style={{marginBottom:"5%", width:"100%"}} ref={(v)=> {this.input = (v)}} defaultvalue={this.state.email} required onChange={this.emailHandle} placeholder="Email"/>
                    <br/>
                    <input type="password" style={{marginBottom:"5%", width:"100%"}} required placeholder="Password"/>
                    <br />
                    <button>Display</button>
                </form>

                
            </div>
        )
    }
}

export default Form
