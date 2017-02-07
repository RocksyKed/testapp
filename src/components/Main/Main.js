import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker } from '2gis-maps-react';
import { setMarker } from '../../store/actions/actions';
import http from '../../shared/axios';
import { apiPrefix } from '../../../etc/config.json';

import './Main.less';

class Main extends React.Component {

    style = {
        width: "800px",
        height: "500px",
        margin: "30px auto 0 auto"
    };

    putMarker = ({ latlng }) => {
        this.props.dispatch(setMarker([latlng.lat, latlng.lng]));
    };

    saveMarkers = () => {

        http.post(`${apiPrefix}/save-markers`, {
            markers: this.props.markers
        }).then(res => {
            console.log('Markers saved successful');
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <div className="main">
                <Map style={this.style}
                     center={this.props.center}
                     zoom={this.props.zoom}
                     onClick={this.putMarker}>

                    { this.props.markers.map((marker, index) => {
                        return <Marker key={index} pos={marker}/>
                    })}
                </Map>

                <button onClick={this.saveMarkers}>Save markers</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        center: state.map.center,
        zoom: state.map.zoom,
        markers: state.map.markers
    }
};

export default connect(mapStateToProps)(Main);

