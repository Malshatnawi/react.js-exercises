// Import react and react-dom
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import CardForm from './CardForm';
import Card from './Card';
import Form from './Form';

// import LCA from './LCA';
// import Clock from './clock';





// Create a React Component - App function component for example
// const App =(props) => {
//     // Import result is the URL of your image
//     return (
//         <div>
//             <LCA />
//             <Clock />
//         </div>
//     );
//   }

// ReactDOM.render(<App />, document.getElementById('root'));



class App extends Component {

    state = {
        cards:[
            {name:'Khaled' , age:'22', image:'khabib.jpg'},
            {name:'Omar' , age:'24', image:'mike_tyson.jpg'},
            {name:'Samer' , age:'20', image:'mohammed_ali.jpeg'},
            {name:'Rashed' , age:'10', image:'naseem.jpg'},
            {name:'Yaser' , age:'15', image:'admin.jpg'},
            {name:'Loai' , age:'21', image:'user.png'},

        ],

        current : '',
        currentAge : '',
        currentImage : '',
    }

    //updateCard 
    updateCard = (e) => {
        // console.log(e.target.value)
        this.setState({
            current: e.target.value,
        })
    }

    updateAge = (e) => {
        console.log(e.target.value)
        this.setState({
            currentAge: e.target.value,
        })
    }

    updateImage = (e) => {
        console.log(e.target.value)
        this.setState({
            currentImage: e.target.value,
        })
    }

    //addCard 
    addCard = (e) => {
        e.preventDefault();
        // console.log('adding cards')
        let current = this.state.current
        let currentAge = this.state.currentAge
        let currentImage = this.state.currentImage
        let cards = this.state.cards
        cards.push({name:current , age:currentAge, image:currentImage})
        this.setState({
            cards,
            current: '',
            currentAge: '',
            currentImage: '',
            

        })
    }


    deleteCard = (index) => {
        
        // console.log('adding cards')
       
        let cards = this.state.cards
        cards.splice(index ,1)


        this.setState({
            cards,
            

        })
    }


    //editting card
    editCard =(index, value) =>{
        let cards = this.state.cards
        let card = cards[index]
        card['name']=value
        this.setState({
            cards,
        })
    }




    render() {

        const cards = this.state.cards;
        const cardList = cards.map( (card , index) => {
            return <Card detail={card} key={index} deleteCard={this.deleteCard} index={index} editCard={this.editCard}/>
        })


        return (
        
                
            <>    

                <div className="row bluebg">
                <CardForm updateCard={this.updateCard} updateAge={this.updateAge} updateImage={this.updateImage} addCard={this.addCard} current={this.state.current}/>
                {cardList}
                
                {/* <Card studentName="Ahmad" studentAge="25 Years" studentHobby="Boxing" studentFavLanguage="PHP" studentImage="mohammed_ali.jpeg"/>
                <Card studentName="Khaled" studentAge="20 Years" studentHobby="Chess" studentFavLanguage="Laravel" studentImage="mike_tyson.jpg"/>
                <Card studentName="Naseem" studentAge="23 Years" studentHobby="Swimming" studentFavLanguage="React Native" studentImage="naseem.jpg"/>
                <Card studentName="Yaser" studentAge="27 Years" studentHobby="Tennis" studentFavLanguage="MERN Stack" studentImage="khabib.jpg"/>
                <Card studentName="Jamal" studentAge="22 Years" studentHobby="Reading" studentFavLanguage="Python" studentImage="admin.jpg"/>
                <Card studentName="Marwan" studentAge="24 Years" studentHobby="Eating" studentFavLanguage="HTML" studentImage="user.png"/> */}
                </div>
                <div className="row bluebg">
                    <Form />

                </div>

            </>
            

    );
    }
}

export default App









    //  this.state.names.map( item => {});



//Create a React Component - App function component for example
// const App = () => {

//     return (
//             <>
//                 <div className="row">
//                 <Card studentName="Ahmad" studentAge="25 Years" studentHobby="Boxing" studentFavLanguage="PHP" studentImage="mohammed_ali.jpeg"/>
//                 <Card studentName="Khaled" studentAge="20 Years" studentHobby="Chess" studentFavLanguage="Laravel" studentImage="mike_tyson.jpg"/>
//                 <Card studentName="Naseem" studentAge="23 Years" studentHobby="Swimming" studentFavLanguage="React Native" studentImage="naseem.jpg"/>
//                 <Card studentName="Yaser" studentAge="27 Years" studentHobby="Tennis" studentFavLanguage="MERN Stack" studentImage="khabib.jpg"/>
//                 <Card studentName="Jamal" studentAge="22 Years" studentHobby="Reading" studentFavLanguage="Python" studentImage="admin.jpg"/>
//                 <Card studentName="Marwan" studentAge="24 Years" studentHobby="Eating" studentFavLanguage="HTML" studentImage="user.png"/>
//                 </div>
//             </>
            

//     );
    
    
// };


// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();
