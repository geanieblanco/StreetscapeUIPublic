import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import TextInputBox from '../Common/TextInputBox';
import Button from '../Common/Button';

export default class ZipModal extends React.Component {
state = {
modalVisible: false,
};

setModalVisible(visible) {
this.setState({modalVisible: visible});
} 
render() {
return (
    <View>
        <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}>

            <View style={styles.modalInner}>
                <TextInputBox
                placeholder= "New Zipcode"/>
            <Button
            onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
            title="Save"/>
            <Button
            onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
            title="Cancel"/>

            </View>
        </Modal>
    <Button
    onPress={() => {
    this.setModalVisible(true);}}
    title="Update Zipcode"
    />
</View>

);
}
}

const styles = StyleSheet.create({
    modal: {
        height: 500,
        width: 400
    },
    row: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    modalInner: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: '70%',
        minHeight: 100,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: 'black',
        shadowOpacity: .2
    },
    icon: {
        height: 70,
        width: 70,
    },
    iconGroup: {
        flexDirection:'column',
        alignItems: 'center',
}
}
)