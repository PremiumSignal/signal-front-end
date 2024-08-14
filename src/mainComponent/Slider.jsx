import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "./slider.css";

function Slider() {
  const data = [
    {
      id: "1",
      title: "Qouta Movement In Bangladesh",
      subtitle: "Five students deed and many are injured",
    },
    {
      id: "2",
      title: "Government Announces New Infrastructure Projects",
      subtitle:
        "Several new bridges and highways are set to be constructed across the country.",
    },
    {
      id: "3",
      title: "Tech Conference 2024",
      subtitle: "Leading tech companies to showcase their latest innovations.",
    },
    {
      id: "4",
      title: "National Cricket Team Wins Series",
      subtitle:
        "Bangladesh wins the T20 series against a top international team.",
    },
  ];

  return (
    <Container>
      <Carousel>
        {data.map((item) => {
          return (
            <Carousel.Item interval={1000} key={item.id}>
              <div className="d-block w-100 carousel-div">
                <Carousel.Caption>
                  <h2>{item.title}</h2>
                  <h6>{item.subtitle}</h6>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Slider;
