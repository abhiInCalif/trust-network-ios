'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  NavigatorIOS
} = React;

var FriendsView = require('./FriendsView.js');

var PictureAndName = React.createClass({
  render: function() {
    return (
      <View style={ styles.profilePictureContainer }>
        <Image source={ require('image!stockProfilePicture') } style={ styles.profilePicture } />
        <View style={ styles.profileInfo }>
          <Text style={ styles.profileLabels }>
            Full Name:
          </Text>
          <Text style={ styles.profileText }>
            Abhinav Khanna
          </Text>
        </View>
      </View>
    );
  }
});

var FriendsAndDoctors = React.createClass({
  friendsClicked: function() {
    console.log('button clicked');
    this.props.navigator.push({
      title: "Friends I Trust",
      component: FriendsView
    });
  },
  render: function() {
    return (
      <View style={ styles.profileFriendsContainer }>
        <View style={ styles.profileTrustContainer }>
          <TouchableHighlight onPress={this.friendsClicked}>
            <View style={ styles.profileTrustedFriends }>
              <Text style={ styles.profileText }>
                365 Trusted Friends
              </Text>
            </View>
          </TouchableHighlight>
          <View style={ styles.profileTrustedDoctors }>
            <Text style={ styles.profileText }>
              10 Trusted Doctors
            </Text>
          </View>
        </View>
        <View style={ styles.profileDisease }>
          <Image source={ require('image!interestIcon') } style={ styles.diseaseIcon } />
          <Text style={ [styles.profileText, styles.diseaseText] }>
            Interested in Ovarian Cancer
          </Text>
        </View>
        <TouchableHighlight
          style={ styles.button }>
          <Text style={ styles.buttonText }>Edit profile</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var profilePane = React.createClass({
  render: function() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            My Profile
          </Text>
        </View>
        <View style={ styles.content }>
          <PictureAndName />
          <FriendsAndDoctors navigator={ this.props.navigator }/>
        </View>
      </View>
    );
  }
});

var profileTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={ styles.container }
        initialRoute={
            {
              title: 'My Profile',
              component: profilePane
            }
          }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 60,
    backgroundColor: '#F6F6F6',
    paddingTop: 25,
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  profilePictureContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 3,
    overflow: 'hidden'
  },
  profilePicture: {
    flex: 1,
    height: 200,
    width: 375,
    overflow: 'visible'
  },
  profileInfo: {
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  profileText: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 5
  },
  profileLabels: {
    paddingLeft: 5,
    paddingRight: 25,
    fontSize: 16
  },
  profileFriendsContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  profileTrustContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  },
  profileTrustedFriends: {
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderTopColor: 'rgba( 0, 0, 0, 0.1 )',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    paddingTop: 13,
    height: 50,
    width: 175,
    marginRight: 2
  },
  profileTrustedDoctors: {
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderTopColor: 'rgba( 0, 0, 0, 0.1 )',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    height: 50,
    paddingTop: 13,
    width: 178,
  },
  profileDisease: {
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    borderTopColor: 'rgba( 0, 0, 0, 0.1 )',
    borderTopWidth: 1,
    backgroundColor: '#F6F6F6',
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  diseaseIcon: {
    height: 70,
    width: 70,
    margin: 10
  },
  diseaseText: {
    marginLeft: 20
  },
  button: {
    backgroundColor: '#0078f0'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    height: 40,
    paddingTop: 10,
    fontSize: 16,
  }
});

module.exports = profileTab;