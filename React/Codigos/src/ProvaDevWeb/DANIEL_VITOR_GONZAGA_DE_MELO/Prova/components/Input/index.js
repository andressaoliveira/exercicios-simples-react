import React from 'react'

export default (props) => {
    return <div className="input">
        <input
            type={props.type}
            /*O placeholder com a barra de espaço é necesário para poder usar o
                placeholder-shown no css, se estivesse vazio não funcionaria
            */
            placeholder=" "
            onChange={props.onChange}
            min={props.min}
            max={props.max}
            value={props.value}
        ></input>
        <span>{props.placeholder}</span>
    </div>
}