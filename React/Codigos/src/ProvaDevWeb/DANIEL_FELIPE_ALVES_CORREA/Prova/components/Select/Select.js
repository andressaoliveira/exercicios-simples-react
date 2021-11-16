import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form'

export class Select extends React.Component {

    render() {
        return (
            <Form.Select name={this.props.name}>
                {this.props.children}
            </Form.Select>
        )
    }
}

