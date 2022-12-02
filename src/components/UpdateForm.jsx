import React from 'react'

const UpdateTaskForm = ({ updateData, changeTask, updateTask, cancelUpdate  }) => {
  return (
    <>
        <div className='row'>
            <div className='col'>
                <input 
                className='form-control form-control-lg'
                value= {updateData && updateData.title} 
                onChange= {(e) => changeTask(e)}
                />
            </div>
            <div className='col-auto'>
                <button 
                className='btn btn-lg btn-success mr-20'
                onClick={updateTask}>Update</button>
                <button 
                onClick={cancelUpdate}
                className='btn btn-lg btn-warning'>Cancel</button>
            </div>
        </div>
        <br/>
    </>
  )
}

export default UpdateTaskForm