import React from "react";
import img_bh from "../Images/belo_horizonte.png";
import img_sp from "../Images/sao_paulo.png";
import img_rj from "../Images/rio_de_janeiro.png";

class Destinos extends React.Component{
    render(){
        return (
            <div className="body">
                <h1>Destinos</h1>

                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{marginTop: 40, marginBottom: 20}}>Belo Horizonte</h2>
                        <img style={{height: 200, width: 300}} src={img_bh}/>
                        <p style={{marginTop: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae lorem et odio molestie eleifend. Phasellus dui tortor, ultricies eget sagittis a, convallis at magna. Pellentesque sit amet ex vel mi faucibus fringilla. Proin ac arcu ante. Fusce pharetra nibh turpis, sed luctus diam vulputate in. Etiam dapibus magna feugiat porta varius. Etiam nec ullamcorper leo. Pellentesque commodo tincidunt sapien, sit amet iaculis justo. Suspendisse maximus non elit eu varius. Morbi finibus tortor ut pharetra tincidunt. Fusce interdum vehicula tristique. Phasellus placerat ultrices commodo. Mauris a nisl ac lacus tincidunt fermentum nec vel turpis. Morbi suscipit ornare nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{marginTop: 40, marginBottom: 20}}>São Paulo</h2>
                        <img style={{height: 200, width: 300}} src={img_sp}/>
                        <p style={{marginTop: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae lorem et odio molestie eleifend. Phasellus dui tortor, ultricies eget sagittis a, convallis at magna. Pellentesque sit amet ex vel mi faucibus fringilla. Proin ac arcu ante. Fusce pharetra nibh turpis, sed luctus diam vulputate in. Etiam dapibus magna feugiat porta varius. Etiam nec ullamcorper leo. Pellentesque commodo tincidunt sapien, sit amet iaculis justo. Suspendisse maximus non elit eu varius. Morbi finibus tortor ut pharetra tincidunt. Fusce interdum vehicula tristique. Phasellus placerat ultrices commodo. Mauris a nisl ac lacus tincidunt fermentum nec vel turpis. Morbi suscipit ornare nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{marginTop: 40, marginBottom: 20}}>Rio de Janeiro</h2>
                        <img style={{height: 200, width: 300}} src={img_rj}/>
                        <p style={{marginTop: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae lorem et odio molestie eleifend. Phasellus dui tortor, ultricies eget sagittis a, convallis at magna. Pellentesque sit amet ex vel mi faucibus fringilla. Proin ac arcu ante. Fusce pharetra nibh turpis, sed luctus diam vulputate in. Etiam dapibus magna feugiat porta varius. Etiam nec ullamcorper leo. Pellentesque commodo tincidunt sapien, sit amet iaculis justo. Suspendisse maximus non elit eu varius. Morbi finibus tortor ut pharetra tincidunt. Fusce interdum vehicula tristique. Phasellus placerat ultrices commodo. Mauris a nisl ac lacus tincidunt fermentum nec vel turpis. Morbi suscipit ornare nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Destinos