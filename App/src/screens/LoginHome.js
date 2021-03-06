import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { 
  Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title, 
  Text, 
  Footer, 
  Content,
  View,
} from 'native-base';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const LoginHome = () => (
  <Container>
    <Content style={{backgroundColor: '#F5FCFF'}}>
      <View>
        <Text style={styles.welcome}>Title</Text>
        <Text style={styles.instructions}>baseText</Text>
      </View>
      <View>
        <Button bordered onPress={() => {Actions.Login()}} >
          <Text>Login</Text>
        </Button>
        <Button bordered onPress={() => {Actions.Signup()}} >
          <Text>Signup</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

export default LoginHome;