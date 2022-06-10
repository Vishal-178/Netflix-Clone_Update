import React from "react";
import useContent from "../hooks/use-content";
import { selectionFilter } from "../utils";
import { BrowseContainer } from "../containers/browse";
export default function Browser() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  let slides = [];
  if (series && films) {
    slides = selectionFilter({ series, films });
    console.log("slides", slides);
  }

  return <BrowseContainer slides={slides} />;
}
