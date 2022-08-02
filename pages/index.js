import Head from 'next/head';
import { BiUserPlus } from 'react-icons/bi';
import Table from '../components/table';
import Form from '../components/form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer';

export default function Home() {
  // const [visible, setVisible] = useState(false);
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const handleAddForm = () => {
    // setVisible(!visible);
    dispatch(toggleChangeAction());
  };
  return (
    <section>
      <Head>
        <title>CRUD Sederhana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-xl md:text-5xl text-center font-bold py-10"> Employeee Project</h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handleAddForm}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{' '}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>

          {/* collapseable from */}
          {/* <div className="right flex gap-3">
            <button className="flex bg-indigo-500 text-white px-4 rounded-md hover:bg-gray-50 hover:text-indigo-500 hover:border-indigo-500">
              <BiUserPlus className="w-6 h-6"></BiUserPlus>
            </button>
          </div> */}
        </div>
        {/* Collapse Table */}
        {visible ? <Form></Form> : <></>}
        {/* Table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
