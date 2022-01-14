import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { ArrowUpCircle } from "react-native-feather";

class ModalView extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        return (
            <View>
                <ArrowUpCircle />
                <GestureRecognizer
                    style={{ flex: 1 }}
                    onSwipeDown={() => this.setModalVisible(!modalVisible)}
                    config={config}
                >
                    <Modal
                        animationType="slide"
                        swipeDirections="down"
                        presentationStyle="formSheet"
                        visible={modalVisible}
                    >
                        <Text>Swipe Down Please</Text>
                    </Modal>
                    <Text>Swipe Up Please</Text>
                </GestureRecognizer>

                <Pressable
                    style={[styles.settingsLocation, styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        margin: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    settingsLocation: {
        alignSelf: 'flex-end',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ModalView;