'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});


class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'index',
          component: SearchPage,
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('hello', () => PropertyFinderApp );