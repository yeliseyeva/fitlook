import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const complects = [
  {
    id: 1,
    name: "Комплект",
    img: "",
    description: "Описание",
    price: "998 грн",
  },
  {
    id: 2,
    name: "Комплект",
    img: "",
    description: "Описание",
    price: "998 грн",
  },
  {
    id: 3,
    name: "Комплект",
    img: "",
    description: "Описание",
    price: "998 грн",
  },
  {
    id: 4,
    name: "Комплект",
    img: "",
    description: "Описание",
    price: "998 грн",
  },
];

function ComplectsItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {complects.map(({ id, img, name, description, price }) => (
        <Col key={id}>
          <Card className={s.card}>
            <Card.Img variant="top" src={img} height="400" className={s.img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button className={s.button}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ComplectsItem;
