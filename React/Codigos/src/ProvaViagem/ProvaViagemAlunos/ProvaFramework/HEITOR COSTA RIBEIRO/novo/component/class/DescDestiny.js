import React from "react";

export default class DescDestiny extends React.Component{
        constructor(props){
            super(props)
          this.state = {    
          }
        }


    render(){
    return(
        <div>
           <div>
               <img src= "../img/SP.jpg"></img>
               <h3>São Paulo a cidade mais industrializada da região sudeste.</h3>
           </div>
        
           <div>
               <img src= "../img/RJ.jpg"></img>
               <h3>Rio de Janeiro o estado com maior índice de violência da região sudeste.</h3>
           </div>

           <div>
               <img src= "../img/ES.jpg"></img>
               <h3>Vitória.</h3>
           </div>
        </div>
        );
    }


}
 