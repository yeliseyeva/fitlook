import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const shorts = [
  {
    id: 1,
    name: "Купальник",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 2,
    name: "Купальник",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 3,
    name: "Купальник",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 4,
    name: "Купальник",
    img: "",
    description: "Описание",
    price: "499 грн",
  },
];

function SwimwearItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {shorts.map(({ id, img, name, description, price }) => (
        <Col key={id}>
          <Card className={s.card}>
            <Card.Img variant="top" src={img} height="400" className={s.img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Button className={s.button}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SwimwearItem;
