import React,{useRef,PureComponent } from 'react';
import {View,Text,Button , StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';



function AppCamera(props){
    const camera = useRef(null)


    
    
   const takePicture = async ()=> {
       
    // try {
    //     const options = { quality: 0.5, base64: true };
    //     const data = await camera.takePictureAsync(options);
    //     console.log(data.uri, '<<<<<<<<<<<<<<<<<<<<<');
    // } catch (error) {
    //     console.log(error, "ERROR <<<<<<<<<<<<<")
    // }
    if(camera){

           const options = { quality: 0.5, base64: true };
           const data = await camera.current.takePictureAsync(options)
           .then(data => console.log('data', data.uri))
           .catch(error => console.log('eror', error));
        //    console.log(data.uri);
        }
    //     // if (camera) {
        //   const options = { quality: 0.5, base64: true };
        //   const data = await this.camera.takePictureAsync(options);
        //   console.log(data.uri);
        // }
      };

    
    return(
        <View style={styles.container}>
            {/* <Text>Camera</Text> */}
            <RNCamera ref={camera}  flashMode={RNCamera.Constants.FlashMode.on } style={styles.camContainer} captureAudio={false}/>
           <View>
               <Button title="Capture" onPress={()=>takePicture()}></Button>
               </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
       
    },
    camContainer : {
        flex : 1,
        // justifyContent:'center',
        alignItems:'center',
    }
})

export default AppCamera;