import React, {useEffect, useState} from "react";

export default function NewlineText(props : any) {
    const [text,setText] = useState('');

    useEffect(() => setText(props.text),[])

    return text.valueOf().split('\n').map((str : string) => <div key={str}>{str}</div>);
}
