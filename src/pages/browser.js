import React from "react";
import useContent from "../hooks/use-content";
export default function Browser() {
  const { series } = useContent("series");
  console.log("series", series);
  const { films } = useContent("films");
  console.log("films", films);
  return (
    <div>
      <h1>Browser</h1>
      <h2>Series</h2>
      {!series ? (
        <h1> series not found</h1>
      ) : (
        series.map((serie) => (
          <div key={serie.docId}>
            <h3>{serie.title}</h3>
            <p>{serie.description}</p>
          </div>
        ))
      )}
      <h2>Films</h2>
      {!films ? (
        <h1> films not found</h1>
      ) : (
        films.map((film) => (
          <div key={film.docId}>
            <h3>{film.title}</h3>
            <p>{film.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
