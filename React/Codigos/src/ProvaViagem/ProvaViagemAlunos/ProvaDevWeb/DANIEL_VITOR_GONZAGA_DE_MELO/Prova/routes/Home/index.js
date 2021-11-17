import React from "react";
import Select from '../../components/Select';

export default () =>{
    return <main>
        <Select options={['Montezuma', 'Ilhas Galápagos', 'Jamaica']} onChange={(e) => console.log(e)}></Select>
    </main>
}