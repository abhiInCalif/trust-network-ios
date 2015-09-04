/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} = React;

var MyProfileTab = require('./tabs/Profile.js');

var TrustNetworkIos = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'me'
    }
  },
  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    debugger;
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title=""
          icon={ require('image!feed') }
          onPress={ () => this.changeTab('feed') }
          selected={ this.state.selectedTab === 'feed' }>
          <View style={ styles.pageView }>
            <Text>Relevant Content</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title=""
          icon={ require('image!findandverify') }
          onPress={ () => this.changeTab('find-verify-tab') }
          selected={ this.state.selectedTab === 'find-verify-tab' }>
          <View style={ styles.pageView }>
            <Text>Find and Verify</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title=""
          icon={ require('image!profile') }
          onPress={ () => this.changeTab('profile') }
          selected={ this.state.selectedTab === 'profile' }>
          <MyProfileTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title=""
          icon={ require('image!rewards') }
          onPress={ () => this.changeTab('rewards') }
          selected={ this.state.selectedTab === 'rewards' }>
          <View style={ styles.pageView }>
            <Text>Rewards</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('TrustNetworkIosVrsn2', () => TrustNetworkIos);
