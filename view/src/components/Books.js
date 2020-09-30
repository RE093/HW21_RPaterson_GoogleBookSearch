import React from 'react';

import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export default function Books(props) {
    return (
        <div>
            <Card>
                <Card.Header>{ props.title }</Card.Header>
                <Card.Body>
                    <Card.Text
                        data-author={ props.author }
                    >
                        { props.author }
                    </Card.Text>
                    <a 
                        href={ props.link }
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Preview
                    </a>
                    <Card.Text>
                        { props.description }
                        <img className="book-image" src={ props.image } alt={ props.title } />
                    </Card.Text>
                    <Button
                        onClick={props.onClick}
                    >
                        Save</Button>
                </Card.Body>
            </Card>
        </div>
    );
}