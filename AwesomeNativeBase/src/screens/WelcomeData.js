import React, { Component } from 'react';
import { Container, Button,Header, Text , List , ListItem,Left,Right,Content, Form,Icon, Item, Input, Label} from 'native-base';
import { StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
export class FloatingLabelExample extends Component {
    constructor(props){
        super(props)
        {
            this.state = {
               doom: this.props.users[0],
               hello: Object.keys(this.props.users[0]),
               

            }
        }

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
      {console.log('users ===>' , this.props)}
        {console.log('users ===>' , this.props.route.params.obj)}
        <Content>
              <Text style={{fontSize: 32, fontWeight:'bold', marginLeft: 14,}}>Name: {this.props.route.params.obj.name}</Text>
              <Text style={{fontSize: 32, fontWeight:'bold', marginLeft: 14,}}>Bloodgroup: {this.props.route.params.obj.bloodgroup}</Text>
              <Text style={{fontSize: 32, fontWeight:'bold', marginLeft: 14,}}>Age: {this.props.route.params.obj.age}</Text>
              
              <Text style={{fontSize: 32, fontWeight:'bold', marginLeft: 14,}}>Contact: {this.props.route.params.obj.contact}</Text>
              
              <Text style={{fontSize: 32, fontWeight:'bold', marginLeft: 14,}}>Medical Information: {this.props.route.params.obj.minfo}</Text>
              
        </Content>
              </Container>
      </ScrollView>
      </View>
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