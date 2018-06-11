import React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import LogoTitle from './LogoTitle';

export default class HomeScreen extends React.Component {
    state = {
        name: '',
    };

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
                <TextInput
                    style={{width: 100}}
                    placeholder="Enter name here"
                    onChangeText={ name => this.setState({ name })}
                    value={this.state.name}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        id: 33,
                        name: this.state.name,
                    })}
                />
            </View>
        );
    }
}