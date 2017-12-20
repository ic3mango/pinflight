import React from 'react'
import ReactModal from 'react-modal';
import { EntypoPin } from 'react-entypo'

import fallbackImg from '../assets/images/bombardier_cseries.jpeg';
import '../assets/styles/PinModal.css';

ReactModal.setAppElement("#root");

const PinModal = (props) => {
  const pin = props.pin;

  if (!pin)
    return null;

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Pin Modal"
      style={styles.modalStyle}
    >
      <div className="modal-header">
        <h5 className="text-center"><strong>{pin.title}</strong></h5>
        <button className="btn btn-info" onClick={props.closeModal}>&times;</button>
      </div>

      <div className="modal-body">

        <div className="media">

          <img className="rounded mr-3 align-self-center"
            src={pin.imgUrl}
            alt="hopefully a plane"
            onError={addDefaultImg}
          />

          <div className="media-body">
            <h5 className="mt-0">Description</h5>
            {pin.description}
          </div>

        </div>

      </div>

      {
        props.user &&
        <div className="modal-footer d-flex justify-content-between">
          <button onClick={() => props.handleEditClick(pin._id)}  className="btn btn-primary">Edit</button>
          <button onClick={() => props.savePin(pin._id)} className="btn btn-danger">
            {
              props.user.saves.map(s => s._id).includes(pin._id.toString()) &&
              <EntypoPin />
            }
            Save
          </button>
        </div>
      }
    </ReactModal>
  )
}

const addDefaultImg = (event) => {
  event.target.src = fallbackImg;
}

const styles = {
  modalStyle: {
    overlay: {
      zIndex: 1050
    }
  }
}

export default PinModal;
