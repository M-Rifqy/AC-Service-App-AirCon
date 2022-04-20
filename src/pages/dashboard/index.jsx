import React, { useState, useEffect } from 'react';
import './style.scss';
import Navigation2 from '../../components/navbar2';
import Footer from '../../components/footer';
import { Table, Button } from 'react-bootstrap';
import { BiPencil, BiTrash } from 'react-icons/bi';
import axios from 'axios';

export default function Dashboard() {

  //const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);
  const [action, setAction] = useState(null); 
  //const [modalVisible, setModalVisible] = useState(false); 
  const [updateId, setUpdatedId] = useState(null);

  const handleEdit = (id) => {
    setUpdatedId(id);
    setAction('edit');
  }

  const handleDelete = async (id) => {
    await axios
    .delete(`http://localhost:8080/orders/${id}`)
    .then(() => {
      const updateData = data.filter(v => v.id !== id)
      setData(updateData)
    })
    .catch((err) => console.error(err))
  }

  const getData = async () => {
    await axios
    .get('http://localhost:8080/orders')
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => console.error(err))
  }

  useEffect(() => {
    getData()
  }, [])

  console.log({data});

  return (
    <>
    <Navigation2/>
    <div className='d-container'>
      <Table striped hover bordered variant="dark">
        <thead>
          <tr>
            <td>No</td>
            <td>Full Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone Number</td>
            <td>Time</td>
            <td>Message</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((v, idx) => (
            <tr key={idx}>
              <th scope='row'>
                {idx + 1}
              </th>
              <td>{v.full_name}</td>
              <td>{v.email}</td>
              <td>{v.address}</td>
              <td>{v.phone_number}</td>
              <td>{v.time}</td>
              <td>{v.message}</td>
              <td>
                <Button className='edit-btn' onClick = {() => handleEdit(v.id)}><BiPencil/></Button><br/>
                <Button className='delete-btn' onClick = {() => window.confirm("Are you sure?") ? handleDelete(v.id) : null}><BiTrash/></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <Footer/>
    </>
  )
}
