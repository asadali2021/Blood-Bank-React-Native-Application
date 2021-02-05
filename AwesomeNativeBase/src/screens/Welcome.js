import React, { Component } from 'react';
import { Container, Button,Header, Text , List , ListItem,Left,Right,Content, Form,Icon, Item, Input, Label} from 'native-base';
import { StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {Logout} from '../store/action/index';

export class FloatingLabelExample extends Component {
    constructor(props){
        super(props)
        {
            this.state = {
               doom: this.props.users[0],
               hello: Object.keys(this.props.users[0]),
               helperArray : Object.entries(this.props.users[0]),
               userfiltered : Object.entries(this.props.users[0]),
               emailLogin : this.props.loginUser,
               findEmail : Object.entries(this.props.users[0])
               

               

            }
        }

        
    }
    helloLogin = ()=>{
        
    }
    searchUser = (textToSearch)=>{
        this.setState({
            // findEmail : this.state.helperArray.filter(i=> i[1].email.toLowerCase().includes(this.state.emailLogin.toLowerCase())),
            userfiltered : this.state.helperArray.filter(i=> i[1].bloodgroup.toLowerCase().includes(textToSearch.toLowerCase())),
            
        })
    }
     componentDidMount(){
        this.setState({
            findEmail : this.state.helperArray.filter(i=> i[1].email.toLowerCase().includes(this.state.emailLogin.toLowerCase())),
               // userfiltered : this.state.helperArray.filter(i=> i[1].bloodgroup.toLowerCase().includes(textToSearch.toLowerCase())),
               
           })
        }

    render() {
        
        // var arr = Object.entries(this.state.doom)
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
        <View style={{Flex: 1,}} >
      <ScrollView>
      <Container>
      {console.log(this.state.findEmail[0][1].email)}
      
        
        <Button block onPress={()=>this.props.Logout(this.props)}><Text>Log out</Text></Button>
        <Content>
          <Form>
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search By Blood Group" onChangeText={text=>{this.searchUser(text)}}/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
       
              
              </Form>
              <Text style={{fontSize: 32, fontWeight:'bold', marginLeft: 14,}}>Welcome {

                this.state.findEmail.map((v,i)=>{
                    return ( 
              
            
                
           this.state.findEmail[i][1].email && this.state.emailLogin &&  <Text key={i}>{this.state.findEmail[i][1].name}   </Text> 
                 
                  
         ) })}
                  

      

        
            
            
            </Text>
             
          <List>
           { 
        //       this.state.hello.map((v,i)=>{
        //       return ( 
                
              
        //           <ListItem noIndent key={i} >
        //             <Left>
        //               <Text>{this.state.doom[v].name } {this.state.doom[v].bloodgroup } {this.state.doom[v].contact }</Text>
        //             </Left>
        //             <Right>
        //               <Icon name="arrow-forward" />
        //             </Right>
        //           </ListItem>
        //    ) })}
        
        
         
        this.state.userfiltered.map((v,i)=>{
                    return ( 
              
            
                <ListItem noIndent key={i}  onPress={()=>this.props.navigation.navigate("WelcomeData",{obj : this.state.userfiltered[i][1]})} >
                  <Left>
                    <Text>{this.state.userfiltered[i][1].name} {this.state.userfiltered[i][1].bloodgroup} {this.state.userfiltered[i][1].contact}</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
         ) })}
            

          </List>
        </Content>
              </Container>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    users: state.users,
    loginUser : state.loginUser,
  })
  const mapDispatchToProps = (dispatch) => ({
    google_signin : (obj,props) => dispatch(google_signin(obj,props)),
    Logout : (props) => dispatch(Logout(props)),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(FloatingLabelExample);