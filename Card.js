import React, { Component } from "react";
import logo from "./logo.svg";
import Image from "./Image";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';



class Card extends Component{

  state = {
    isEditting : false,
  }


  // componentDidMount() {
  //   console.log('card didmount')
      
      
  //   }
  
  //   componentWillUnmount() {
  //     console.log('clock unmount')
  //   }
  
  //   changeName() {
  //     if(this.state.theindex >= 5){
  //       this.setState({
  //         theindex:0,
  //       });
  //     }
  //     else{
  //       this.setState({
  //         theindex:this.state.theindex+1,
  //     });
  //     }
  //   }


    toggle = () => {
      let isEditting = this.state.isEditting;
      this.setState({
        isEditting: !isEditting,
      })
    }

    renderEditButton =() =>{
      return(
      <button type="button" onClick={() => this.toggle()} className=" mt-3  waves-effect w-md waves-light" href="">Edit</button>
      )
    }

    updateCardItem = (e) =>{
      e.preventDefault();
      this.props.editCard(this.props.index, this.input.value );
      this.toggle()
    }


    renderUpdateForm =() =>{
      return (

        <form onSubmit={this.updateCardItem}>
                    <input type="text" ref={(v) => {this.input = (v)}} defaultValue={this.props.detail.name}/>
                    <button type="submit" >Update Name</button>
                </form>

      )
    }

    

    render() {

      let isEditting = this.state.isEditting
      
        return (

          
          <div className="col-lg-4 border border-primary" style={{backgroundColor:'silver'}}>
                <div className="text-center card-box" >
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><Image studentImage2={this.props.detail.image}/></div>
                        <div className="">
                            <h4></h4>
                            <p className="text-muted">@CodingAcademy <span>| </span><span><a href="#" className="text-pink">{this.props.detail.name}</a></span>
                            {isEditting ? this.renderUpdateForm() : this.renderEditButton()}</p>
                            
                             

                        </div>

                        <ul className="social-links list-inline">
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><FaFacebookF style={{fontSize:'2em'}}/></a></li>
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><FaTwitter style={{fontSize:'2em'}}/></a></li>
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="{{$value['linkedin']}}" data-original-title="Twitter"><FaLinkedinIn style={{fontSize:'2em'}}/></a></li>
                        </ul>
                        <button type="button" onClick={() => this.props.deleteCard(this.props.index)} className=" mt-3  waves-effect w-md waves-light" href="">Delete</button>
                        <div className="mt-4">
                            <div className="row">
                                {/* <div className="col-4">
                                    <div className="mt-3">
                                        <h4>{this.props.studentHobby}</h4>
                                        <p className="mb-0 text-muted"></p>
                                    </div>
                                </div> */}
                                <div className="col-12">
                                    <div className="mt-3">
                                        <h4>{this.props.detail.age}</h4>
                                    </div>
                                </div>
                                {/* <div className="col-4">
                                    <div className="mt-3">
                                        <h4>{this.props.studentAge}</h4>
                                        <p className="mb-0 text-muted"></p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
         
          
            
        );
      }
    


}






export default Card;
