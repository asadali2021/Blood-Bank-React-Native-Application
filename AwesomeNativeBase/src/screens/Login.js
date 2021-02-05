import React, { Component } from 'react';
import { Container, Header, Button, Text ,Content, Form, Item, Input, Label} from 'native-base';
import { StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {google_signin} from '../store/action/index';

class FloatingLabelExample extends Component {
  constructor(props){
    super(props)
    this.state = {
        
        email:'',
        password:'',
      }

  }
  logData = () => {
  // console.log('data===>', this.props);
  this.props.navigation.navigate('Signup')
  }
  farigh = (props) => {
    let obj = this.state;
   let userSignIn = this.props.google_signin(obj,props)
    // this.props.navigation.navigate("Welcome")
  }
  render() {

    const styles = StyleSheet.create({
      container : {
        marginTop: 40,
        textAlign: 'center',
    
      },
      just : {
        marginTop: 5,
        marginLeft: 140,
       
      },
      juust: {
        marginTop: 45,
        marginLeft: 80,
        width: 200,
        
      },
      textt : {
        marginLeft: 60,
      },
    });

    return (
      <ScrollView>
      <Container>
      
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input 
              name='email'
              keyboardType='email-address'
              onChangeText={(e)=>{this.setState({email:e})}}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              name= 'password'
              
              secureTextEntry={true}
              onChangeText={(e)=>{this.setState({password:e})}}
              />
            </Item>
            </Form>

            <View style={styles.just}>
            <Button rounded style={styles.container} onPress={()=>this.farigh(this.props)}>
            <Text>Login</Text>
          </Button>
          </View>


          <Text style={{textAlign:'center', marginTop: 40, fontSize: 20,}}>--OR--</Text>
          <Button style={styles.juust} onPress={()=>this.logData()}>
            <Text style={styles.textt}>SIGN UP</Text>
          </Button>
            </Content>
      </Container>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
})
const mapDispatchToProps = (dispatch) => ({
  google_signin : (obj,props) => dispatch(google_signin(obj,props)),
})
export default connect(mapStateToProps, mapDispatchToProps)(FloatingLabelExample);