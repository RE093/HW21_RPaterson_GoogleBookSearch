import React, { useState } from 'react';
import axios from "axios";
import Books from "../components/Books";

import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

export default function Search() {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState({});

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then(result => {
            setSearchResults(result.data.items);
            console.log(result.data.items[0].volumeInfo.authors)
        })
    }

    const handleSearchValueChange = (event) => {
        const currentValue = event.currentTarget.value
        setQuery(currentValue);
    }

    const handleBookSave = (event) => {
        event.preventDefault();

        const fetchedData = event.target.parentNode;

        const savedBookData = {
            title: fetchedData.children[2].children[0].alt,
            authors: fetchedData.children[0].innerHTML,
            description: fetchedData.children[2].innerText,
            image: fetchedData.children[2].children[0].src,
            link: fetchedData.children[1].href,
        }
        axios.post("/api/books", savedBookData)
    }

    return (
        <div>
            <Form 
                onSubmit={handleSearchSubmit}
                className="search-form"
            >
                <Form.Group>
                    <Form.Label>Book Search</Form.Label>
                    <Form.Control 
                        type="search" 
                        placeholder="Search"
                        value={query}
                        onChange={handleSearchValueChange}
                    />
                </Form.Group>
                <Button
                    className="search-button"
                    type="submit"
                >
                    Search
                </Button>
            </Form>

            {searchResults.length ? 
                searchResults.map(bookData => {
                    return (
                        <Books
                            key={bookData.id}
                            title={bookData.volumeInfo.title}
                            description={bookData.volumeInfo.description}
                            author={bookData.volumeInfo.authors.length > 1 ?
                                bookData.volumeInfo.authors[0] + ", " +
                                bookData.volumeInfo.authors[1]
                                :
                                bookData.volumeInfo.authors
                            }
                            link={bookData.volumeInfo.previewLink}

                            image={
                                bookData.volumeInfo.imageLinks ? 
                                bookData.volumeInfo.imageLinks.thumbnail
                                :
                                null
                            }

                            onClick={handleBookSave}
                        />
                    );
                })
                :
                null
            }
        </div>
    );
}