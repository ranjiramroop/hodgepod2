import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, SearchRadios, FormBtn } from "../components/Form";
import OMDBTEST from "./OMDB/OMDBTEST";
import PODCAST from "./PODCAST";

function SearchContainer() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
    const [searchType, setSearchType] = useState({})
    const [submit, setSubmit] = useState(false)
    const [defaultPodcasts, setDefaultPodcasts] = useState(true)

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        setSubmit(false);
        console.log("handle", event);
        const { name, value } = event.target;

        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("handleFormSubmit")

        setSubmit(true);
        setDefaultPodcasts(false);
        if (formObject.searchType == 'movies') {
            setSearchType("Movies")

        }
        else {
            setSearchType("Podcasts")
        }
        //Handing Route
        // Return Component
        // if (formObject.title && formObject.author) {
        //     API.saveBook({
        //         title: formObject.title,
        //         author: formObject.author,
        //         synopsis: formObject.synopsis
        //     })
        //         .then(res => loadBooks())
        //         .catch(err => console.log(err));
        // }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-4">
                    <form>
                        <Row>
                            <Col size="md-12">
                                <Input
                                    onChange={handleInputChange}
                                    name="searchTerm"
                                    placeholder="Podcast/Movie Search"

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-8">
                                <SearchRadios handleInputChange={handleInputChange} />
                            </Col>
                            <Col size="md-4">
                                <FormBtn
                                    disabled={!formObject.searchTerm}
                                    onClick={handleFormSubmit}
                                >
                                    Search
                            </FormBtn>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">

                    {defaultPodcasts ? (
                        <div>

                            <PODCAST defaultSearch="best" />
                        </div>

                    ) :
                        null}

                    {searchType && submit ? (
                        <div>
                            {searchType === "Movies" ? (
                                <OMDBTEST searchTerm={formObject.searchTerm} />

                            ) :
                                <PODCAST searchTerm={formObject.searchTerm} />
                            }

                        </div>

                    ) :
                        null}


                    {/* <PCAPITEST />
                    <OMDBTEST /> */}

                    {/* {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>

                  <strong>


                    {book.title} by {book.author}

                  </strong>

                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )} */}
                </Col>
            </Row>
        </Container >
    );
}


export default SearchContainer;
