import React from 'react'
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

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
            style={styles.imgStyle}
            alt="hopefully a plane"
            onError={props.addDefaultImg}
          />

          <div className="media-body">
            <h5 className="mt-0">Description</h5>
            {pin.description}
          </div>

        </div>

      </div>

      <div className="modal-footer d-flex justify-content-between">
        <Link to={`/pin/${pin._id}`} onClick={props.handleEditClick} className="btn btn-primary">Edit</Link>
        <button className="btn btn-danger">Save</button>
      </div>

    </ReactModal>
  )
}

const styles = {
  imgStyle: {
    height: "300px",
    width: "300px"
  },
  modalStyle: {
    overlay: {
      zIndex: 1050
    }
  }
}

export default PinModal;
