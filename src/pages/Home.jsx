import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/un4.webp";
import featureImg02 from "../assets/images/un3.webp";
import featureImg03 from "../assets/images/un2.webp";
import featureImg04 from "../assets/images/un1.webp";



import products from "../assets/fake-data/products.js";


import ProductCard from "../components/UI/product-card/ProductCard.jsx";


import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "FORUM",
    imgUrl: featureImg01,
    doc:"shop now",
  },

  {
    title: "GIVING IS SIMPLE",
    imgUrl: featureImg02,
    doc:"shop now",
  },
  {
    title: "FIFA WORLD CUP 2022™ KITS",
    imgUrl: featureImg03,
    doc:"shop now",
  },
  {
    title: "REDISCOVER YOUR COLORS",
    imgUrl: featureImg04,
    doc:"shop now",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "TOPS");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "SNEAKERS") {
      const filteredProducts = products.filter(
        (item) => item.category === "SNEAKERS"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "TOPS") {
      const filteredProducts = products.filter(
        (item) => item.category === "TOPS"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PANTS") {
      const filteredProducts = products.filter(
        (item) => item.category === "PANTS"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="home-sec">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
               
                <h1 className="mb-4 hero__title">
            <span>COMFORT THAT<br /> KEEPS UP</span>    
                </h1>

                <p>
                On-the-go style is softer than ever thanks to these<br /> hoodies and sweats.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/allpro">SHOP NOW</Link> <i class="ri-arrow-right-s-line"></i>
                  </button>

                
                </div>

             
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-15">
        <Category />   {/*category section 2*/}
      </section>

      <section>
        <Container>
          <Row>
            

            {featureData.map((item, index) => (
              <Col lg="3" md="6" sm="6" key={index} className="mt-5">
              <div className="category2__item d-flex align-items-center gap-3">
              <div className="category2__img">
                <img src={item.imgUrl} alt="category2__item" />
                <h5><a>{item.title}</a></h5>
                <a>{item.doc}</a>
              </div>
             
            </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="">
              <h2>TOP PICKS FOR YOU</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SNEAKERS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SNEAKERS")}
                >
                  
                  SNEAKERS
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "TOPS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("TOPS")}
                >
                 
                  TOPS
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PANTS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PANTS")}
                >
                 
                  PANTS
                </button>
              </div>
              < hr className="cate-hr" />
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    

      <section>
        <Container>
          <Row>
         
           
                 
          <TestimonialSlider />
           
         

          
          </Row>
        </Container>
      </section>
      
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2> New Tops</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;
