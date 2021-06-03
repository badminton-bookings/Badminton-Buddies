// import React, { Component } from 'react';
// import {
//   AppRegistry
// } from 'react-native';

// import Login from './Login';
// import Secured from './Secured';

// class ReactNativeStormpath extends Component {

//   state = {
//     isLoggedIn: false
//   }

//   render() {

//     if (this.state.isLoggedIn) 
//       return <Secured 
//           onLogoutPress={() => this.setState({isLoggedIn: false})}
//         />;
//     else 
//       return <Login 
//           onLoginPress={() => this.setState({isLoggedIn: true})}
//         />;
//   }

// }

// AppRegistry.registerComponent(ReactNativeStormpath , () => ReactNativeStormpath );