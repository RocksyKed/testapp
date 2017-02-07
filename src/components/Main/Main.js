import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker } from '2gis-maps-react';
import { setMarker } from '../../store/actions/actions';

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

    render() {
        return (
            <div className="main">
                <Map style={this.style}
                     center={this.props.center}
                     zoom={this.props.zoom}
                     onClick={this.putMarker}>

                    { this.props.markers.map(marker => {
                        return <Marker pos={marker}/>
                    })}

                </Map>
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

