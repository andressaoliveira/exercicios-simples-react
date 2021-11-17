import React, {useState} from "react";

export default (props) => {
    const [chosen, setChosen] = useState(props.options[0])
    const [open, setOpen] = useState(false)

    const handleSelect = (item) => {
        setChosen(item)
        setOpen(false)
        props.onChange(item)
    }
    return <div className="select" onClick={() => setOpen(!open)}>
        {open && <div className="options">
            {props.options.map((item, index) =>{
                return <div key={index} className="option" onClick={() => handleSelect(item)}>{item}</div>
            })}
        </div>}
        <span className="chosen-option">{chosen}</span>
        <span className="material-icons">{open ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
    </div>
}