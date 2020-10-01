import React, { useContext } from 'react';
import SavedDataContext from "../utils/SavedDataContext";

import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

export default function Books(props) {

    const [savedData, setSavedData] = useContext(SavedDataContext);

    return (
        <div>
            <Card className="card-block">
                <Card.Header 
                    className="card-title"
                >{ props.title }</Card.Header>
                <Card.Body id={props.id}>
                    <Card.Text className="author">
                        { props.author }
                    </Card.Text>
                    <a 
                        className="bookPreview"
                        href={ props.link }
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View
                    </a>
                    <Card.Text 
                        className="imageText"
                    >
                        {
                            props.image === null ?
                                <img className="book-image" src={ "https://via.placeholder.com/130x180" } alt={ props.title } />
                            :
                                <img className="book-image" src={ props.image } alt={ props.title } />
                        }
                        { props.description }
                    </Card.Text>

                    {savedData === true ? 
                        <Button
                        className="save-button"
                        onClick={props.onClick}
                    >
                        Delete</Button>
                    : 
                        <Button
                        className="delete-button"
                        onClick={props.onClick}
                    >
                        Save</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}