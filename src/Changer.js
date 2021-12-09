import React, { useState } from 'react'

const Changer = () => {
    const [name, setname] = useState("Marco");
    const [button, setbutton] = useState("Polo")

    function namechange() {
        if (name == "Marco") {
            setname("Polo");
            setbutton("Marco");
        } else {
            setname("Marco");
            setbutton("Polo");
        }


    }
    return (
        <div>
            <h1 id="marco-polo">{name}</h1>
            <button id="marco-polo-togler" onClick={namechange}>{button}</button>
        </div>
    )
}

export default Changer
