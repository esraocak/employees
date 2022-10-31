import React from 'react'
import data from "../helper/data"

const Card = ({ count }) => {
    return (
        (data.slice((count - 1), (count + 4)).map((item, index) => {
            const { name, image, email, age } = item
            return (
                <div className="card" key={index} >
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="title">
                        <p className="name">{name}</p>
                        <p className="mail">{email}</p>
                        <p className="age">{age}</p>
                    </div>
                </div>)
        }))

    )

}

export default Card