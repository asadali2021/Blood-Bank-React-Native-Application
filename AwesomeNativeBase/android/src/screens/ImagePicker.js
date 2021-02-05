// import React,{useRef,useState} from 'react';
// import {View,Text,Button , StyleSheet} from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import ImagePicker from 'react-native-image-picker';
// import { set } from 'react-native-reanimated';

// // More info on all the options is below in the API Reference... just some common use cases shown here
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

// function ImagePicker(props){
//     // const {camera} = useRef(null)
//     const [image,setImage] = useState("")
//     const openPicker  = ()=>{
//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);
          
//             if (response.didCancel) {
//               console.log('User cancelled image picker');
//             } else if (response.error) {
//               console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//               console.log('User tapped custom button: ', response.customButton);
//             } else {
//               const source = { uri: response.uri };
          
//               // You can also display the image using data:
//               // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//           setImage(source)
//           console.log(image)
//             //   this.setState({
//             //     avatarSource: source,
//             //   });
            
//             }
//           });
//     }
//     return(
//         <View style={styles.container}>
//             <Text>Camera</Text>
//             <Button title="Open Image Picker" onPress={()=>openPicker()}></Button>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
       
//     },
//     camContainer : {
//         flex : 1,
//         // justifyContent:'center',
//         alignItems:'center',
//     }
// })

// export default ImagePicker;