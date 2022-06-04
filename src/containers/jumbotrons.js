import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";
// Jumbotron Container which holds all the jumbotron items
export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {/* Loop through the jumbotron data and display each item */}
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
