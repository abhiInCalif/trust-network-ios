'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} = React;

var AddressBook = require('react-native-addressbook');

var friendsView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      dataList: [],
    };
  },
  updateDataSource: function(data){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
    this.setState({
      dataList: data
    });
  },
  trustClick: function(rowID) {
    var data = this.state.dataList[rowID];
    data.trusted = data.trusted ? false : true;
    this.updateDataSource(this.state.dataList);
  },
  renderRow: function (dataObj, sectionID, rowID){
    var picture = require('image!stockContactPhoto'); // TODO: abkhanna -- implement photo read from contact book.
    return (
      <View style={ styles.contactContainer }>
        <Image source={ picture } style={ styles.contactPhoto } />
        <View style={ styles.contactInfo }>
          <Text style={ styles.contactText }>{ dataObj.contact.firstName } { dataObj.contact.lastName }</Text>
          <Text style={ styles.contactText }>{ dataObj.contact.phoneNumbers[0].number }</Text>
          <TouchableHighlight
            onPress={ this.trustClick.bind(this, rowID) }
            style={ styles.button }>
            <Text style={ styles.buttonText }>{ dataObj.trusted ? 'Remove Trust' : 'Trust' }</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },
  render: function(){
    var self = this;
    AddressBook.getContacts(function(err, contacts) {
      if(err && err.type === 'permissionDenied') {
        // x.x
      } else{
        console.log("Datasource: " + self.state.dataSource);
        if (contacts.length > self.state.dataList.length) {
          console.log("Updating contacts via call to contacts: " + contacts);
          var dataList = [];
          for (var i = 0; i < contacts.length; i++) {
            dataList.push({"trusted" : false, "contact" : contacts[i]});
          }
          self.updateDataSource(dataList);
        }
      }
    });
    return (
      <View style={ styles.container }>
        <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow } />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff'
  },
  contactContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    height: 100,
    marginLeft: 35,
    marginRight: 35,
    overflow: 'visible',
  },
  contactPhoto: {
    flex: 1,
    height: 100,
    resizeMode: 'cover',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba( 0, 0, 0, 0.1 )',
  },
  contactInfo: {
    width: 200,
    height: 99,
    borderTopWidth: 1,
    borderTopColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    padding: 10,
  },
  contactText: {
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: '#0078f0',
    height: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 2,
    fontSize: 16,
  }
});

module.exports = friendsView;