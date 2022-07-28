import AddUserForm from './addUserForm.js';
import UpdateUserForm from './updateUserForm.js';

export default function Form() {
  const flag = true;
  return <div className="container mx-auto py-5">{flag ? <AddUserForm></AddUserForm> : <UpdateUserForm></UpdateUserForm>}</div>;
}
