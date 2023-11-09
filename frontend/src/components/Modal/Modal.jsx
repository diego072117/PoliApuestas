import "./Module.scss";

export const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <p>{title}</p>
            <button className="close-btn" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};