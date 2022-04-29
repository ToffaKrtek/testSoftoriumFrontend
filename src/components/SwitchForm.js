import React from 'react'
import UserForm from './UserForm'
import PredictForm from './PredictForm'
import ListPredicts from './ListPredicts'

function SwitchForm(props){
  const isNewUser = props.new_user;
  if (isNewUser) {
    return <UserForm />;
  }
  return (
      <div className="predicts">
        <PredictForm user_id={props.user_id} />
        <ListPredicts user_id={props.user_id} />;
      </div>
  )
}
export default SwitchForm
