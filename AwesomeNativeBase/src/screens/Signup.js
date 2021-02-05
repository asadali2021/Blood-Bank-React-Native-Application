import React, { Component } from 'react';
import { Container, Button,Picker ,Text ,Content, Form, Item, Input, Label} from 'native-base';
import { StyleSheet,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import {google_signup} from '../store/action/index';
 class FloatingLabelExample extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email:'',
            password:'',
            bloodgroup:'',
            age:'',
            contact:'',
            minfo: '',
            uid: '',
        }
    }
    
 fData = (props) => {
     let uid = database().ref().push().key;
    // this.setState({uid:uid})
    this.state.uid = uid
     
     database().ref('users/'+uid).set(this.state)
     .then(()=>{
        let obj = {
            email:this.state.email,
            password:this.state.password,
        }
        this.props.google_signup(obj, props);
    })
    
 }
 

    render() {
    const styles = StyleSheet.create({
      container : {
        flex: 1,
        marginTop: 40,
        textAlign: 'center',
    
      },
      just : {
        marginTop: 5,
        marginLeft: 140,
       
      },
      juust: {
       marginBottom: 44,
        marginLeft: 75,
        width: 200,
        
    
        
        
      },
      textt : {
        marginLeft: 60,
        
      },
    });
    return (
        <View style={{Flex: 1,}}>
      <ScrollView>
      <Container>
        {console.log("data===>" ,)}
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input
               name='name'
               
               onChangeText={(e)=>{this.setState({name:e})}}
               
               />
            </Item>
            <Item floatingLabel last> 
              <Label>Blood Group use - and + for (+ve and -ve)</Label>
              <Input name='email'
              
              placeholder='use - and + for (+ve and -ve)'
              onChangeText={(e)=>{this.setState({bloodgroup:e})}} />
            </Item>
            <Item floatingLabel last>
              <Label>E-mail</Label>
              <Input name='email'
              keyboardType='email-address'
              onChangeText={(e)=>{this.setState({email:e})}} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input name='password'
              secureTextEntry={true}
              onChangeText={(e)=>{this.setState({password:e})}}
               />
            </Item>
            
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input name='age'
              keyboardType='number-pad'
              onChangeText={(e)=>{this.setState({age:e})}}
               />
            </Item>
            <Item floatingLabel last>
              <Label>Contact</Label>
              <Input name='contact'
              keyboardType='number-pad'
              onChangeText={(e)=>{this.setState({contact:e})}}
               />
            </Item>
            <Item floatingLabel last>
            <Label>Medical Information</Label>
              <Input name='minfo' 
              onChangeText={(e)=>{this.setState({minfo:e})}}/>
              </Item>
              
              </Form>
              </Content>
              
              </Container>
              <Button rounded style={styles.juust} onPress={()=> this.fData(this.props)}>
                <Text style={styles.textt}>Sign up</Text>
              </Button>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    users: state.users,
  })
  const mapDispatchToProps = (dispatch) => ({
    google_signup : (obj, props)=> dispatch(google_signup(obj,props)),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(FloatingLabelExample);