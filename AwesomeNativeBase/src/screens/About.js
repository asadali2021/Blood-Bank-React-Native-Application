import React from 'react';
import {View,Text,Button , StyleSheet} from 'react-native';

function About(props){
    return(
        <View style={styles.container}>
            <Text>About</Text>
            <Button title="Go to Camera" onPress={()=>props.navigation.navigate("AppCamera")}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default About;