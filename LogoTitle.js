import React, { Component } from 'react';
import {Image} from "react-native";

export default class extends Component {
    render() {
        return (
            <Image
                source={require('./mediaocean.jpg')}
                style={{ width: 70, height: 30, paddingLeft: 10 }}
            />
        );
    }
}