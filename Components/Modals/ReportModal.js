import React, {Component} from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, StyleSheet, Image } from 'react-native';
import Button from '../Common/Button';

export default class ReportModal extends React.Component {

state = {
modalVisible: false,
};

setModalVisible(visible) {
this.setState({modalVisible: visible});
} 
render() {
return (
    <View
    style={styles.container}>
        <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}>
        
        <View style={styles.modalInner}>
            <Text
            style={{flex:1,fontSize:50,textAlign:'center'}}>Select Hazard</Text>
            
            <View style={styles.row}>

            <TouchableOpacity
            keyword='harassment'
            style={styles.iconGroup}
            onPress={()=>this.setState({modalVisible: false})}>
                <Image
                source={require("../../../Assets/Icons/harassment.png")}
                style={styles.icon}
                />
            <Text>Harassment</Text>
            </TouchableOpacity>

            <TouchableOpacity
            keyword='closed-widewalk'
            style={styles.iconGroup}
            onPress={()=>this.setState({modalVisible: false})}>
                <Image
                source={require("../../../Assets/Icons/closedSidewalk.png")}
                style={styles.icon}
                />
            <Text>Closed</Text>
            <Text>Sidewalk</Text>
            </TouchableOpacity>

            <TouchableOpacity
            keyword='emergency'
            style={styles.iconGroup}
            onPress={()=>this.setState({modalVisible: false})}>
                <Image
                source={require("../../../Assets/Icons/emergency.png")}
                style={styles.icon}
                />
            <Text>Emergency</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity
            keyword='snow'
            style={styles.iconGroup}
            onPress={()=>this.setState({modalVisible: false})}>
                <Image
                source={require("../../../Assets/Icons/snow.png")}
                style={styles.icon}
                />
            <Text>Snow</Text>
            </TouchableOpacity>

            <TouchableOpacity
            keyword='ice'
            style={styles.iconGroup}
            onPress={()=>this.setState({modalVisible: false})}>
                <Image
                source={require("../../../Assets/Icons/ice.png")}
                style={styles.icon}
                />
            <Text>Ice</Text>
            </TouchableOpacity>

            <TouchableOpacity
            keyword='flooding'
            style={styles.iconGroup}
            onPress={()=>this.setState({modalVisible: false})}>
                <Image
                source={require("../../../Assets/Icons/flooding.png")}
                style={styles.icon}
                />
            <Text>Flooding</Text>
            </TouchableOpacity>

        </View>
        <Button
        onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
        title="Cancel"/>
        </View>
    </Modal>

    <TouchableOpacity
    onPress={() => {
    this.setModalVisible(true);}}
    title="Drop Pin"
    >
    <Image
        style={styles.button}
        source={require('../../../Assets/Icons/dropPin.png')}/>
    </TouchableOpacity>
</View>
);
}
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch'
    },
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
        minHeight: 275,
        backgroundColor: 'rgba(255, 255, 255,.8)',
        marginTop: 100,
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
},
    button: {
        height:50,
        width:50,
        margin: 10
    }
}
)