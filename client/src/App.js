import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import Locations from './components/Locations'
import {useDispatch} from 'react-redux'
import {readData} from './actions/locations'

function App() {

  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(readData())
  }, [currentId, dispatch])

  return (
    <div className="App">
     <h1>Show Map</h1>
     <div className="map-api">

     </div>
     <div className="data-form">
     <Form
      currentId={currentId}
      setCurrentId={setCurrentId}
     />
     <Locations
        currentId={currentId}
        setCurrentId={setCurrentId}
     />
     </div>

    </div>
  );
}

export default App;
