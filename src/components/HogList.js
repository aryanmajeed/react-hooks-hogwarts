import React from 'react'
import Hog from './Hog'

export default function HogList({ hogs }) {
    return (
        <div className="ui grid container">
            {hogs.map((hog) =>
                <Hog
                    key={hog.name}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    image={hog.image}
                    highestMedalAchieved={hog["highest medal achieved"]}
                />)}
        </div>
    )
}
