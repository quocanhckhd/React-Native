import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from './actions';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      res: [],
    };
  }

  _storage = async (token) => {
    try {
      await AsyncStorage.setItem('1', token)
    } catch (error) {
      console.log('Error saving data.');
    }
  }

  componentDidMount() {
    const user = {
      username: 'admin',
      password: 'password',
    };
    axios
      .post('http://171.244.6.6/api/auth/login', user)
      .then(res => {
        _storage(res.data.token);

      })
      .catch(err => console.log('some thing maybe wrong.'));
  }

  render() {
    //const list = this.state.res.map(item => <Text>{item.username}</Text>);
    const list1 = this.props.tokens.map((item, index) => AsyncStorage.getItem('0', (err, result) => 
      {
        console.log(result);
      }
      ));
    return <View><Text>sdasd</Text></View>;
  }
}

const mapStateToProps = state => {
  const {tokens} = state;
  return {tokens};
};

const mapDispatchToProps = dispatch => ({
  getToken: token => dispatch(actions.getToken(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
