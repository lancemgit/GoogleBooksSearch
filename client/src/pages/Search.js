import React, { Component } from "react";
import TopBar from "../components/TopBar"
import { Button, Form, FormGroup, Label, Input, CardColumns } from 'reactstrap';
import { Container } from "reactstrap";
import ResultCard from "../components/ResultCard";
import axios from "axios";
import BookCard from "../components/BookCard";

class Saved extends Component {
    state = {
        search: "",
        results: [],
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleButtonSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
        if (this.state.search) {
            axios.post("/api/search", { search: this.state.search }).then(data => {
                this.setState({ results: data.data });
                console.log(data);
            }).catch(function (err) {
                console.log(err);
            });
        }
    }

    handleButtonSave = index => {
        console.log("something");
        console.log(index);
        console.log(this.state.results[index]);
        const book = this.state.results[index];
        const saved = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.searchInfo.textSnippet,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.infoLink
        }

        axios.post("/api/book", { data: saved }).then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log(err)
        });
    }


    render() {
        return (
            <div>
                <TopBar />
                <Container>
                    <Form className="text-center">
                        <FormGroup>
                            <Label for="search">Book Search</Label>
                            <Input type="text" name="search" id="search" placeholder="Search For a Book Title!" onChange={this.handleInputChange} value={this.state.search} />
                        </FormGroup>
                        <Button className="justify-content-center" onClick={this.handleButtonSubmit}>Submit</Button>
                    </Form>
                    <br></br>
                    {this.state.results.length ? (
                        <CardColumns>
                            {this.state.results.map((book, index) => (
                                <ResultCard
                                    img={book.volumeInfo.imageLinks.smallThumbnail}
                                    link={book.volumeInfo.infoLink}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    description={book.searchInfo.textSnippet}
                                    onClick={() => this.handleButtonSave(index)} />
                            ))
                            }
                        </CardColumns>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Container>
            </div>
        )
    }
}

export default Saved;