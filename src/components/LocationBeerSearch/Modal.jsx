import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import style from "./LocationBrewSearchPage.module.css";

function ModalExampleBasic({ openModal, setOpenModal }) {
  return (
    <Modal
      circular
      onClose={() => setOpenModal(false)}
      onOpen={() => setOpenModal(true)}
      open={openModal}
      icon="question"
      color="red"
      size="medium"
      trigger={
        <Button
          className={style.infoButton}
          circular
          icon="question"
          color="red"
          size="medium"
          className={style.infoButton}
        />
      }
    >
      <Header icon>
        <Icon name="archive" />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpenModal(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleBasic;
