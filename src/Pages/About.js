import React, {useState} from 'react'


export default function About() {
    const [toggleButton, settoggleButton] = useState(true)
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
