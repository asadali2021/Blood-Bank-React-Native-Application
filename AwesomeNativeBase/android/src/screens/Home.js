import React from 'react';
import {View,Text,Button , StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Login from '../screens/Login';
function Home(props){
    return(
        <View style={styles.container}>
        <View style={styles.container}>

                   <Login />  
            <Text style={styles.writeHead}>Sign-in </Text>
            <TextInput style={styles.input} />
            <Button title="Go to About" onPress={()=>props.navigation.navigate("About")}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    },
    input : {
        backgroundColor: 'red',
        width: 110,
        height: 24,
        borderRadius: 2,
        

    },
    writeHead : {
        fontSize: 32,
        fontWeight: 'bold',
    },
})

export default Home;