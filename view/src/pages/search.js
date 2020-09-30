import React, { useEffect, useState } from 'react';
import axios from "axios";
import Books from "../components/Books";

import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Search() {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState({});

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then(result => {
            setSearchResults(result.data.items);

            console.log(searchResults);
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

        console.log(savedBookData);

        // axios.post("/api/books", savedBookData);
    }

    return (
        <div>
            <Form onSubmit={handleSearchSubmit}>
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
                    type="submit"
                >
                    Search
                </Button>
            </Form>

            {searchResults.length ? 
                searchResults.map(bookData => {
                    return (
                        <Books
                            key={bookData.volumeInfo.title}
                            title={bookData.volumeInfo.title}
                            description={bookData.volumeInfo.description}
                            author={bookData.volumeInfo.authors}
                            link={bookData.volumeInfo.previewLink}
                            image={bookData.volumeInfo.imageLinks.thumbnail}
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