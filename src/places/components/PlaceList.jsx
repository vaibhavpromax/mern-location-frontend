import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { PlaceItem } from "./PlaceItem";
import "./PlaceList.css";

export const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No place found . maybe create one</h2>
          <Button to="/places/new">Share place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          id={place.id}
          creatorId={place.creator}
          coordinates={place.location}
          key={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
        />
      ))}
    </ul>
  );
};
