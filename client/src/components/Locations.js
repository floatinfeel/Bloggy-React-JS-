import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {Button} from '@material-ui/core'
import './Locations.css'
import {useSelector, useDispatch} from 'react-redux'
import {editData, deleteData} from '../actions/locations'


const Locations = ({setCurrentId}) => {
    const dispatch = useDispatch()
    const locations = useSelector((state)=> state.locations)
    

    return (
      <div>
        <h1>Data Location</h1>
        <div className="tabeldata">
          <Table striped bordered hover size="sm" border="1">
            <thead>
              <tr>
                <th>Label</th>
                <th>Kota/Kab</th>
                <th>Provinsi</th>
                <th>latitude</th>
                <th>longitude</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                locations.map((location, id)=>(
                  <tr key={location.id}>
                    <td> {location.label} </td>
                    <td> {location.kota} </td>
                    <td> {location.provinsi} </td>
                    <td> {location.lat} </td>
                    <td> {location.lng} </td>
                    <td> 
                      <Button variant="contained" color="primary" onClick={ () => setCurrentId(location.id) }>Edit</Button> &nbsp; | &nbsp;
                      <Button variant="contained" color="secondary" onClick={()=> dispatch(deleteData(location.id)) }> Delete </Button>
                    </td>
                  </tr> 
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>

    )
}

export default Locations