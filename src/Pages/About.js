import React, {useState} from 'react'
// const toggledSyle = {
//     display: "block"
// }

export default function About() {
    const [toggleButton, settoggleButton] = useState('hide')

    function toggling(){
        toggleButton === 'show' ? settoggleButton('hide') : settoggleButton('show')
    }
    return (
        <section>
        <div className="aboutUs">
            <button className="whiteBorderButton" onClick={toggling}>LEARN MORE ABOUT US</button>
        </div>
        <div className={toggleButton}>
            This is open
        </div>
        </section>
    )
}
