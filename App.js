import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';

//import styles from './ApiStyles';
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.headers.common['Pragma'] = 'no-cache';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromFetch: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null
    };
  }
  goForFetch = () => {
    this.setState({
      fromFetch: true,
      loading: true,

    })
    fetch("https://seancoughlin.me/affirmations/affirmations-alpha.json")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error))
  }

  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,

    })
    axios.get("https://seancoughlin.me/affirmations/affirmations-alpha.json")
      .then(response => {
        console.log("headers", axios.defaults.headers);
        console.log('getting data from axios', response.data);
        this.setState({
          loading: false,
          axiosData: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  FlatListSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      />
    );
  }
  renderItem = (data) => {
    return (
      <TouchableOpacity>
        <Text>{data.item.author}</Text>
        <Text>{data.item.affirmation}</Text>
        </TouchableOpacity>
    )

  }


  render() {
    const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
    return (
      <ApiView
        goForFetch={this.goForFetch}
        goForAxios={this.goForAxios}
        dataSource={dataSource}
        loading={loading}
        fromFetch={fromFetch}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ApiContainer;