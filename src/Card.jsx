import React from 'react';
import "./Card.css";
 class Card extends React.Component {
    render() {
        const {img} = this.props;
        return (
            <div className="cardContainer">
                <img className='img' src={img} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium recusandae, saepe possimus impedit quos aliquid amet hic unde! Cupiditate perspiciatis officia maiores porro nulla.</p>
                <button>See story</button>
            </div> 
        )
    }
}

export default Card;
