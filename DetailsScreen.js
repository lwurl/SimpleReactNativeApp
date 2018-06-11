import React from 'react';
import {Button, Text, View} from "react-native";

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.name : 'A Nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 88);
        const name = navigation.getParam('name', 'Corey');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>id: {JSON.stringify(id)}</Text>
                <Text>name: {JSON.stringify(name)}</Text>
                <Text>Details Screen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Update the name"
                    onPress={() =>
                        this.props.navigation.setParams({ name: 'Updated!' })}
                />
            </View>
        );
    }
}