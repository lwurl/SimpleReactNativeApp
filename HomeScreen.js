import React from 'react';
import {Button, Text, View} from "react-native";
import LogoTitle from './LogoTitle';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerRight: (
            <Button
                onPress={() => alert("You pressed the button!")}
                title="Info"
                color="#000"
            />
        ),
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        id: 33,
                        name: 'Luke',
                    })}
                />
            </View>
        );
    }
}