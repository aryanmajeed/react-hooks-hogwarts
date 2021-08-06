import React, { useState } from 'react'

export default function Hog({ name, specialty, greased, weight, image, highestMedalAchieved }) {
    const [show, setShow] = useState(false)
    function handleShow() {
        setShow(prev => !prev)
    }
    return (
        <div className="ui eight wide column" onClick={handleShow}>
            <div className="ui card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="content">
                    <p className="header">{name}</p>
                    <div className="meta">
                        {show ? <span className="date">greased:{greased ? "Yes" : "No"}</span> : null}
                    </div>
                    {show ?
                        <div className="description">
                            specialty:
                            {specialty}
                        </div> : null}
                </div>
                <div className="extra content">
                    {show ? <p>highest medals:{highestMedalAchieved}</p> : null}

                    {show ? <small>weight: {weight}</small> : null}

                </div>
            </div>
        </div>
    )
}
