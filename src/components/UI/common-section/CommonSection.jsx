import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
        <h3 className="text-white"> {props.email}</h3>
      </Container>
    </section>
  );
};

export default CommonSection;
