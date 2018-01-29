import * as React from 'react';
import '../../styles/popUpEdit.css';

export interface PopUpEditProps {
  title: string;
  changeTitle(title: string): void;
  closePopUp(title: string): void;
}

const PopUpEdit = (props: PopUpEditProps) => {
  let handleInputChange = (event: any) => {
    props.changeTitle(event.target.value);
  };

  let closePopUp = () => {
    props.closePopUp(props.title);
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <h3>Edit Todo Here</h3>
        <form style={{ margin: '0 auto', width: '80%' }}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={props.title}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-default"
            onClick={closePopUp}
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpEdit;
