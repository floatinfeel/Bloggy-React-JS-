import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import Locations from './components/Locations'
import {useDispatch} from 'react-redux'
import {readData} from './actions/locations'
import MapComponent from './components/MapComponent'

function App() {
  const [currentId, setCurrentId] = useState(null)
  const [postLocations, setPostLocations] = useState({
    label: '',
    kota: '',
    provinsi: '',
    lat: 0,
    lng: 0,
  })
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(readData())
  }, [currentId, dispatch])


  return (
    <div className="App">
      <div className="com-1">
        <MapComponent />
      </div>
      <div className="com-1">
        <div className="item-data">
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
            postLocations={postLocations}
            setPostLocations={setPostLocations}
          />
          <Locations
              currentId={currentId}
              setCurrentId={setCurrentId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
