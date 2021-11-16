import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form'

export class Input extends React.Component {

    render() {
        return (
            <div className="pb-3">
                <Form.Control type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange}  />
            </div>
        )
    }
}