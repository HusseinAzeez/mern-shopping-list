import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoopingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Steak" },
      { id: uuid(), name: "water" }
    ]
  };

  onAddHandler = () => {
    const name = prompt("Enter an Item");
    if (name) {
      this.setState(state => ({
        items: [...state.items, { id: uuid(), name }]
      }));
    }
  };

  onDeleteHandler = id => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  };

  render() {
    return (
      <Container>
        <Button
          color="dark"
          onClick={this.onAddHandler}
          style={{ marginBottom: "2.5rem" }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {" "}
            {this.state.items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteHandler.bind(this, id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoopingList;
