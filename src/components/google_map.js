import React, { Component } from 'react';

class GoogleMap extends Component {
    
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        // with this I can use this.refs.map which return this div
        return <div ref="map"/>
    }
}

export default GoogleMap;