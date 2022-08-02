import { useReducer } from 'react';
import AddUserForm from './addUserForm.js';
import UpdateUserForm from './updateUserForm.js';
import { useSelector } from 'react-redux';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);
  return (
    <div className="container mx-auto py-5">
      {formId ? UpdateUserForm({ formId, formData, setFormData }) : AddUserForm({ formData, setFormData })}
    </div>
  );
}
