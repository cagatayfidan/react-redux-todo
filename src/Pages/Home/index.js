import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { makeSelectHome } from "./selector";
import { setCard } from "./actions";

import "../../App.css";
import styles from "./style.module.scss";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      isClicked: false
    };
  }
  showPopUp = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  handleChange = (e) => {
    this.setState({ item: { text: e.target.value, likeCount: 1 } });
  };
  render() {
    console.log(this.props.home);
    console.log(this.state.item);
    return (
      <div className={styles.home}>
        <Container>
          <Row>
            <Col>
              <div className={styles.itemHeader}>
                <span>A-Z</span>
                <span>Tarih</span>
                <span
                  onClick={() => {
                    this.showPopUp();
                  }}
                >
                  +
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Modal
                show={this.state.isClicked}
                onHide={() => this.showPopUp()}
              >
                <Modal.Header>
                  <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label>Title</label>
                  <input
                    onChange={this.handleChange}
                    placeholder="title"
                  ></input>
                  <label>Link</label>
                  <input placeholder="link"></input>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => {
                      this.showPopUp();
                    }}
                    variant="secondary"
                  >
                    Küçült
                  </Button>
                  <Button
                    onClick={() => this.props.setItems(this.state.item)}
                    variant="primary"
                  >
                    Büyüt
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

export function mapDispatchToProps(dispatch) {
  return {
    setItems:(item) => {
      dispatch(setCard(item));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
