import { Card, Col, Row } from "react-bootstrap";
import "./card.css";
import { useEffect, useState } from "react";

function CardComponent() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: "1",
        title: "Qouta Movement In Bangladesh",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "2",
        title: "Government Announces New Infrastructure Projects",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "3",
        title: "Tech Conference 2024",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "4",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "5",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "6",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "7",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "8",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "9",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
      {
        id: "10",
        title: "National Cricket Team Wins Series",
        description:
          "Folodo Bangladesh” is a foundation which make a website for a special purpose. This website represents all news and events and also make the awareness of people of the malign tree in Bangladesh. In this website all the founder members, executive members, general members, and all district activities and also represents the all images and videos gallery in this website. The malign tree in Bangladesh like (mahagony, Akash Moni, Shisham, Eucalyptus and Rain tree) these trees are very harmful for our environment. This website makes the awareness of the people to reject malign tree and plant our country tree. ",
      },
    ];
    const limitedCardsData = data.slice(0, 8);
    setCardsData(limitedCardsData);
  }, []);
  return (
    <div className="card-div">
      <Row className="justify-content-left">
        {cardsData.map((data, index) => {
          return (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="main-card">
              <Card className="card">
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description.length > 150
                      ? data.description.substring(0, 150) + "..."
                      : data.description}
                  </Card.Text>
                  <Card.Link href="/premium-content">see more</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default CardComponent;
