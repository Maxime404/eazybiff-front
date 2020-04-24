import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput
} from 'react-native';
import styles from '../../assets/styles';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      password: ''
    };
  }

  componentDidMount() { }

  signIn() { }

  goTo(page) {
    this.props.navigation.navigate(page);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topView}>
          <Text style={styles.title}>EazyBiff</Text>
        </View>
        <View style={styles.loginView}>
        <TextInput
            name="lastname"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Nom"
            onChangeText={lastname => this.setState({ lastname })}
          >
            {this.state.lastname}
          </TextInput>
          <TextInput
            name="firstname"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Prénom"
            onChangeText={firstname => this.setState({ firstname })}
          >
            {this.state.firstname}
          </TextInput>
          <TextInput
            caretHidden
            name="email"
            autoCapitalize='none'
            style={styles.input}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
          >
            {this.state.email}
          </TextInput>
          <TextInput
            name="password"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Mot de passe"
            onChangeText={password => this.setState({ password })}
          >
            {this.state.password}
          </TextInput>
          <View style={{ width: "100%", marginBottom: 5, flexDirection: "row-reverse"}}>
          <Text onPress={() => this.goTo('ForgotPassword')}>Mot de passe oublié</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.textButton} onPress={() => this.signIn()}>Connexion</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text onPress={() => this.goTo('Main')}>Pas encore inscrit ? Clique ici !</Text>
        </View>
      </SafeAreaView>
    );
  }
}