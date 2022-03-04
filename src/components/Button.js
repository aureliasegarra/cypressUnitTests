import React, { useState } from 'react';

const Button = () => {
    const [text, setText] = useState("");

    return (
        <Button onClick={() => setText("Loading ...")} >{text || "Click me"}</Button>
    )
}

export default Button;