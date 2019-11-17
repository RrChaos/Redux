import React , {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { addTech } from '../../actions/techsActions';

const AddTechModal = ({ addTech }) => {
  const [ firstName , setFirst ] = useState('');
  const [ lastName , setLast ] = useState('');

  const onSubmit = () => {
    if(firstName === '' || lastName === ''){
      M.toast({
        html: 'Please enter the fullname'
      })
    }
    else {
      const data = {
        firstName ,
        lastName
      }
      addTech(data);
      //clear fields
      setFirst('');
      setLast('');
    }
  }
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add technician</h4>
        <div className="input-field">
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={e => setFirst(e.target.value)}
            />
            <label htmlFor="firstName" className='active'>
              First Name
            </label>
        </div>
        <div className="input-field">
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={e => setLast(e.target.value)}
            />
            <label htmlFor="lastName" className='active'>
              Last Name
            </label>
        </div>
      </div>
      <div className="modal-footer">
        <a 
          href="#!" 
          onClick={onSubmit} 
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect( null , { addTech })(AddTechModal);


