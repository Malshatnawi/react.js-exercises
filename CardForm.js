import React from 'react'

const CardForm = (props) => {
   return (
                <form onSubmit={props.addCard}>
                    <input type="text" placeholder="Name" value={props.current} onChange={props.updateCard}/>
                    <input type="text" placeholder="Age" value={props.currentAge} onChange={props.updateAge}/>
                    <input type="text" placeholder="Image" value={props.currentImage} onChange={props.updateImage}/>
                    <button type="submit" >Add Card</button>
                </form>
        )
    

}

export default CardForm
