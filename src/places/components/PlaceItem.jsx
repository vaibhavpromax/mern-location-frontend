import React, { useContext, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";
import Modal from "../../shared/components/UIElements/Modal";
import { Map } from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";

export const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const auth = useContext(AuthContext);
  const closeMapHandler = () => {
    setShowMap(false);
  };
  const openMapHandler = () => {
    setShowMap(true);
  };

  const showDeleteWarningHeader = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING.....");
  };

  return (
    <>
      <Modal
        show={showMap}
        footerClass="place-item__modal-actions"
        onCancel={closeMapHandler}
        header={props.address}
        contactClass="place-item__modal-content"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want proceed to delete this place ? please note that this can't
          be undone thereafter
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHeader}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};
