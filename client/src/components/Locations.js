import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Button, Select, MenuItem} from '@material-ui/core'
import './Locations.css'
import {useSelector, useDispatch} from 'react-redux'
import {editData, deleteData} from '../actions/locations'


const Locations = ({setCurrentId}) => {
    const dispatch = useDispatch()
    const locations = useSelector((state)=> state.locations)
    const [search, setSearch] = useState('')
    const [sortType, setSortType] = useState('asc')
    const [filteredData, setFilteredData] = useState([])


    const sortHandler = (e) =>{
      
      setSortType(e.target.value)
      filteredData.sort( (a, b)=>{

        let isReversed = (sortType === 'asc') ? -1 : 1
        return isReversed * a.label.localeCompare(b.label)
      })
    }


    useEffect(()=>{
      setFilteredData( 
        locations.filter( location =>{
          return location.label.toLowerCase().includes( search.toLowerCase() ) ||
          location.kota.toLowerCase().includes( search.toLowerCase() ) ||
          location.provinsi.toLowerCase().includes( search.toLowerCase() )
        }) 
      )
    }, [search, locations])

    return (
      <div>
        <div className="feature-data">
          <label htmlFor="sort"> <h5>Search Data: </h5> </label>
          <input 
            type="text" 
            placeholder="search label or kota or provinsi" 
            style={{height: '31px', width: '200px'}}
            onChange={e=> setSearch(e.target.value)} 
          /> 
            &nbsp; 
          <br/> <br/>
          <label htmlFor="sort"> <h5>Sort Data By: </h5> </label>
          <Select
            labelId="select-sort"
            id="sort-id"
            value={sortType}
            onChange={sortHandler}
          >
            <MenuItem value={"asc"}>ASC</MenuItem>
            <MenuItem value={"desc"}>DESC</MenuItem>
          </Select> 
        </div>

        
        
        <div className="tabeldata">
          <h1>Data Location</h1>
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
                filteredData.map((location, id)=>(
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