// Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./logo.svg";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';




const Image =(props) => {
    // Import result is the URL of your image
    return <img src={props.studentImage2} alt="Logo" style={{width:"33%"}} />;
  }


const Card =(props) => {
    // Import result is the URL of your image
    return (
        <div className="col-lg-3 border border-primary" style={{backgroundColor:'silver'}}>
                <div className="text-center card-box" >
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><Image studentImage2={props.studentImage}/></div>
                        <div className="">
                            <h4></h4>
                            <p classNameName="text-muted">@CodingAcademy <span>| </span><span><a href="#" classNameName="text-pink">{props.studentName}</a></span></p>
                        </div>
                        <ul className="social-links list-inline">
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><FaFacebookF style={{fontSize:'2em'}}/></a></li>
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><FaTwitter style={{fontSize:'2em'}}/></a></li>
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="{{$value['linkedin']}}" data-original-title="Twitter"><FaLinkedinIn style={{fontSize:'2em'}}/></a></li>

                        </ul>
                        <a href="/" ><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" href=""><FaUserEdit style={{fontSize:'2em'}}/></button></a>
                        <div className="mt-4">
                            <div className="row">
                                <div className="col-4">
                                    <div className="mt-3">
                                        <h4>{props.studentHobby}</h4>
                                        <p className="mb-0 text-muted"></p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-3">
                                        <h4>{props.studentFavLanguage}</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-3">
                                        <h4>{props.studentAge}</h4>
                                        <p className="mb-0 text-muted"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
  };







//Create a React Component - App function component for example
const App = () => {

    return (
            <>
                <Card studentName="Ahmad" studentAge="25 Years" studentHobby="Boxing" studentFavLanguage="PHP" studentImage="mohammed_ali.jpeg"/>
                <Card studentName="Khaled" studentAge="20 Years" studentHobby="Chess" studentFavLanguage="Laravel" studentImage="mike_tyson.jpg"/>
                <Card studentName="Naseem" studentAge="23 Years" studentHobby="Swimming" studentFavLanguage="React Native" studentImage="naseem.jpg"/>
                <Card studentName="Yaser" studentAge="27 Years" studentHobby="Tennis" studentFavLanguage="MERN Stack" studentImage="khabib.jpg"/>
                <Card studentName="Jamal" studentAge="22 Years" studentHobby="Reading" studentFavLanguage="Python" studentImage="admin.jpg"/>

            </>
            

    );
    
    
};


// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();
