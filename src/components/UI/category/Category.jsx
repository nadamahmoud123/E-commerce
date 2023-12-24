import React from "react";

import { Container, Row, Col } from "reactstrap";

import Img1 from "../../../assets/images/category-1.webp";
import Img2 from "../../../assets/images/category-2.webp";
import Img3 from "../../../assets/images/category-3.webp";
import Img4 from "../../../assets/images/category-4.webp";

import "../../../styles/category.css";

const categoryData = [
  
 
  {
    display: "SNEAKERS",
    imgUrl: Img1,
  },
  {
    display: "TOPS",
    imgUrl: Img2,
  },

  {
    display: "HOODIES & SWITSHIRTS",
    imgUrl: Img3,
  },

  {
    display: "PANTS",
    imgUrl: Img4,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
                <h5><a>{item.display}</a></h5>
              </div>
             
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
