import React, {useState} from 'react'

const [toggleButton, settoggleButton] = useState(initialState)

export default function About() {
    return (
        <section>
        <div className="aboutUs">
            <button className="whiteBorderButton">LEARN MORE ABOUT US</button>
        </div>
        <div>
            This is open
        </div>
        </section>
    )
}
