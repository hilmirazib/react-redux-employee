import { useReducer } from 'react';
import { BiBrush } from 'react-icons/bi';
import Success from './success';
import Bug from './bug';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function UpdateUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) return console.log('Form is empty');

    console.log(formData);
  };
  if (Object.keys(formData).length > 0) return <Success msgSuccess={'Form Data Successfully Submitted'}></Success>;
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4 mt-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          placeholder="First Name"
          className="border  w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="lastname"
          placeholder="Last Name"
          className="border  w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          placeholder="Email"
          className="border  w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          onChange={setFormData}
          placeholder="Salary"
          className="border  w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input type="date" name="date" onChange={setFormData} placeholder="Salary" className="border px-5 py-3 focus:outline-none rounded-md" />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            value="Active"
            onChange={setFormData}
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="status"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            value="Inactive"
            onChange={setFormData}
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="status"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:border-green-500 hover:text-green-500 hover:bg-gray-50">
        Update{' '}
        <span className="px-1">
          <BiBrush size={23}></BiBrush>
        </span>
      </button>
    </form>
  );
}
