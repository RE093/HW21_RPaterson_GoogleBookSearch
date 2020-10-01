import React, { useEffect, useContext, useState } from 'react';
import axios from "axios";
import Books from "../components/Books";
import SavedDataContext from "../utils/SavedDataContext";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Saved(props) {

    const [savedData, setSavedData] = useContext(SavedDataContext);
    const [retrievedBooks, setRetrievedBooks] = useState([])

    useEffect(() => {
        setSavedData(true);

        axios.get("/api/books")
        .then(result => {
            setRetrievedBooks(result.data);
            setSavedData(true);
        })
    }, [savedData, setSavedData]);

    const handleBookDelete = (event) => {

        const id = event.currentTarget.parentNode.id;
        axios.delete("/api/books/" + id)
        .then(setSavedData(false));
    }

    return (
        <div>
            {savedData ? 
                retrievedBooks.map(bookData => {
                    return (
                        <Books
                            id={bookData._id}
                            key={bookData._id}
                            title={bookData.title}
                            description={bookData.description}
                            author={bookData.authors}
                            link={bookData.link}
                            image={bookData.image}
                            onClick={handleBookDelete}
                        />
                    );
                })
                :
                <p>There's currently no books saved in the database...</p>
            }
        </div>
    );
}