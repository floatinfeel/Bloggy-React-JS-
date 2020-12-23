import Map from './Map'
import Locations from './Locations'
import React,{Component} from 'react'
class Home extends Component {
    render() {
      return(
          <div>
              <Map
                google={this.props.google}
                center={{lat: 18.5204, lng: 73.8567}}
                height='300px'
                zoom={15}
               />
               <Locations/>
          </div>
        )
    }
  }

  export default Home