import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Carousel {...settings}>
        <div>
          <img
            src={image1}
            alt="First slide"
            className="slick-image"
          />
          <div className="slick-caption">
            <h4>
              Potenciá tu negocio
                      </h4>
          </div>
        </div>
        <div>
          <img
            src={image2}
            alt="Second slide"
            className="slick-image"
          />
          <div className="slick-caption">
            <h4>
              Conocé tu negocio
                      </h4>
          </div>
        </div>
        <div>
          <img
            src={image3}
            alt="Third slide"
            className="slick-image"
          />
          <div className="slick-caption">
            <h4>
              Mejorá tu negocio
                      </h4>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
