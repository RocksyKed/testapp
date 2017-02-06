import React from 'react';
import './Main.less';

import { Map } from '2gis-maps-react';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Main</h1>
                <Map style={{width: "500px", height: "500px"}}
                     center={[54.98, 82.89]}
                     zoom={13} />
            </div>
        )
    }
}