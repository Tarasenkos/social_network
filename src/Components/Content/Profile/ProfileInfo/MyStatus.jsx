import React, { useState, useEffect } from 'react';
import data from './ProfileInfo.module.css';



const MyStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {

    setStatus(props.status)} ,[props.status]
  

  );


  const editModeOn = () => {
    setEditMode(true)
  }

  const editModeOff = () => {

    setEditMode(false)
    props.statusUpdate(status)
  }

  const onFieldChange = (e) => {

    setStatus(e.currentTarget.value)

  }

  return (
    <div>

      {(!editMode) &&

        <div className={data.my_status_text} onClick={() => editModeOn()}>

          {(!status)
            ? <div className={data.change_status}>изменить статус</div>
            : status}

        </div>}

      {(editMode) &&

        <input onChange={onFieldChange} autoFocus={true} className={data.status_input}
          onBlur={() => editModeOff()} value={status}>
        </input>}

    </div>
  );


}

export default MyStatus;
