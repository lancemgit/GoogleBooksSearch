import React from "react";
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';

function BookCard(props) {
    return (
        <div>
            <Card key={props._id}>
                <CardImg top width="100%" src={props.img} alt="Book Img" />
                <CardBody>
                    <CardTitle><a href={props.link}>{props.title}</a></CardTitle>
                    <CardSubtitle>{props.author}</CardSubtitle>
                    <CardText>{props.description}</CardText>
                    <Button {...props}>Delete</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default BookCard;