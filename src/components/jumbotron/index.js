import React from "react";
// importing css modules
import {
  Container,
  Inner,
  Pane,
  Title,
  Subtitle,
  Image,
  Item,
  // Video,
  // Source,
} from "./styles/jumbotron";

// Jumbotron is main add display on hom page
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}
// Container which holds all the jumbotron items
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
// Jumbotron.Video = function JumbotronVideo({ ...restProps }) {
//   return <Video {...restProps} />;
// };
// Jumbotron.Source = function JumbotronSource({ ...restProps }) {
//   return <Source {...restProps} />;
// };
