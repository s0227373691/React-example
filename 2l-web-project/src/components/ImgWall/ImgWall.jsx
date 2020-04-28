import React from 'react'
import './css_scss/ImgWall.css';

const ImgWall = () => {
    return (
        <div>
            <ul className='img_wall'>
                <li>
                    <h1>當牛奶與咖啡相遇</h1>
                    <img src={require('./img/coffee_add_milk.jpg')} />
                </li>
            </ul>
        </div>
    )
}

export default ImgWall;
