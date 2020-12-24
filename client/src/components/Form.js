import React,{useState, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {createData, updateData} from '../actions/locations'

const Form = ({currentId, setCurrentId}) => {
    const [postLocations, setPostLocations] = useState({
        label: '',
        kota: '',
        provinsi: '',
        lat: 0,
        lng: 0,
      })
    const dispatch = useDispatch()
    //get data for update in form
    const location =  useSelector((state) => currentId ? state.locations.find((loc) => loc.id === currentId) : null )

    useEffect(() =>{
        if(location){
            setPostLocations(location)
        }
    }, [location])

    const submitLocationHandler = async (e) =>{
        e.preventDefault()

        if(currentId){
            dispatch(updateData(currentId, postLocations))
        }else{
            dispatch(createData(postLocations))
        }

        clear()
    }

    const clear = () =>{
        setCurrentId(null)
        setPostLocations({ label: '', kota: '', provinsi: '', lat: 0, lng: 0, });
    }

    return (
        <div>
            <form onSubmit={submitLocationHandler}>
                <h3> {currentId ? 'Editing' : 'Creating'} a Location</h3>
                <label htmlFor="label">Label</label><br/>
                <input type="text" value={postLocations.label} onChange={(e) => setPostLocations({...postLocations, label: e.target.value})} placeholder="ex: point 1" /><br/><br/>

                <label htmlFor="kota">Kota</label><br/>
                <input type="text" value={postLocations.kota} onChange={(e) => setPostLocations({...postLocations, kota: e.target.value})} placeholder="ex: Bogor" /><br/><br/>

                <label htmlFor="provinsi">Provinsi</label><br/>
                <input type="text" value={postLocations.provinsi} onChange={(e) => setPostLocations({...postLocations, provinsi: e.target.value})} placeholder="ex: Jawa Barat" /><br/><br/>

                <label htmlFor="lat">Latitude</label><br/>
                <input type="text" value={postLocations.lat} onChange={(e) => setPostLocations({...postLocations, lat: e.target.value})} placeholder="ex: -6.40511.0123" /><br/><br/>

                <label htmlFor="lng">Longitude</label><br/>
                <input type="text" value={postLocations.lng} onChange={(e) => setPostLocations({...postLocations, lng: e.target.value})} placeholder="ex: 10.703.0123" /><br/><br/>

                <Button variant="contained" color="primary" type="submit">Submit</Button> 
                &nbsp;
                <Button variant="contained" color="secondary" size="small" onClick={clear}>
                    Clear
                </Button>
            </form>
        </div>
    )
}

export default Form
