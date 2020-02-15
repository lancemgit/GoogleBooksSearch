import React, { Component } from "react";
import TopBar from "../components/TopBar"
import { Container, CardColumns } from "reactstrap";
import axios from "axios";
import BookCard from "../components/BookCard";

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        axios("/api/book").then(data => {
            this.setState({ books: data.data });
        });
    }

    handleButtonDelete = id => {
        axios.delete("/api/book/" + id).then(function (response) {
            window.location.reload();
        }).catch(function (err) {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <Container>
                    {this.state.books.length ? (
                        <CardColumns>
                            {this.state.books.map(book => (
                                <BookCard
                                    img={book.image}
                                    link={book.link}
                                    title={book.title}
                                    authors={book.author}
                                    description={book.description}
                                    onClick={() => this.handleButtonDelete(book._id)} />
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