
import React, { Component } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  InputWithLabel
} from '../UI';



let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class ViewScreen extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('headerTitle')
    };
  };

  constructor(props) {
  super(props)

  this.state = {
    shopName: this.props.navigation.getParam('name'),
    shops: null,
  };

  this._query = this._query.bind(this);

  this.db = SQLite.openDatabase({name: 'shopdb', createFromLocation : '~shopdb.sqlite'}, this.openDb, this.errorDb);
}

componentDidMount() {
  this._query();
}

_query() {
  this.db.transaction((tx) => {
    tx.executeSql('SELECT * FROM homeAndDecor WHERE name = ?', [this.state.shopName], (tx, results) => {
      if(results.rows.length) {
        this.setState({
          shops: results.rows.item(0),
        })
      }
    })
  });
}

openDb() {
    console.log('Database opened');
}

errorDb(err) {
    console.log('SQL Error: ' + err);
}

render() {
  let shop = this.state.shops;

  return (
    <View style={styles.container}>
      <ScrollView>
        <InputWithLabel style={styles.output}
          label={'Name'}
          value={shop ? shop.name : ''}
          orientation={'vertical'}
          editable={false}
        />
        <InputWithLabel style={styles.output}
        label={'Floor'}
        value={shop ? shop.floor : ''}
        orientation={'vertical'}
        editable={false}
        />
        <InputWithLabel style={styles.output}
        label={'Unit'}
        value={shop ? shop.unit : ''}
        orientation={'vertical'}
        editable={false}
        />
        <InputWithLabel style={styles.output}
        label={'Description'}
        value={shop ? shop.description : ''}
        orientation={'vertical'}
        editable={false}
        />
        </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0ffff',
    },
    output: {
      fontSize: 24,
      color: '#000099',
      marginTop: 10,
      marginBottom: 10,
    },
  });
