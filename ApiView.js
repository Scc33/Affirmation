import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const ApiView = (props) => {
    const { goForAxios, axiosData, renderItem, FlatListItemSeparator, loading } = props
    return (
        <View style={{ margin: 30 }}>
            <View style={{ margin: 30 }}>
                <Button
                    title={'Affirmation'}
                    onPress={goForAxios}
                    color='green'
                />
            </View>

            <Text>{axiosData && axiosData.length > 0 ? axiosData[getRandomInt(axiosData.length)].affirmation : ""}</Text>

            {loading &&
                <View>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text>Fetching Data</Text>
                </View>
            }
        </View>
    )
}
export default ApiView;