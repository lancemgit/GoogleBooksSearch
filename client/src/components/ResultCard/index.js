import React from "react";
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';

function ResultCard(props) {
    return (
        <div>
            <Card>
                <CardImg top src={props.img} alt="Book Img" style={{ maxHeight: 300 }} />
                <CardBody>
                    <CardTitle><a href={props.link}>{props.title}</a></CardTitle>
                    <CardSubtitle>{props.authors}</CardSubtitle>
                    <CardText>{props.description}</CardText>
                    <Button onClick={props.onClick}>Save</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default ResultCard;