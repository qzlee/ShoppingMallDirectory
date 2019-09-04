
import React, { Component, PureComponent } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
  AppState,
} from 'react-native';


let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class FoodCategoryScreen extends Component {
  static navigationOptions = {
    title: 'Supermarket',
  };

  constructor(props) {
  super(props)

  this.state = {
    shops: [],
  };

  this._query = this._query.bind(this);

  this.db = SQLite.openDatabase({
    name: 'shopdb',
    createFromLocation : '~shopdb.sqlite'
  }, this.openDb, this.errorDb);
}

componentDidMount() {
  this._query();
}

_query() {
  this.db.transaction((tx) => {
    tx.executeSql('SELECT * FROM supermarket ORDER BY name ', [], (tx, results) => {
      this.setState({
        shops: results.rows.raw(),
      })
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
  return (
    <View style={styles.container}>
      <FlatList
        data={ this.state.shops }
        extraData={this.state}
        showsVerticalScrollIndicator={ true }
        renderItem={({item}) =>
          <TouchableHighlight
            underlayColor={'#cccccc'}
            onPress={ () => {
              this.props.navigation.navigate('View13', {
                name: item.name,
                headerTitle: item.name,
                refresh: this._query,
              })
            }}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{ item.name }</Text>
              <Text style={styles.itemSubtitle}>{ item.floor}</Text>
            </View>
          </TouchableHighlight>
        }
        //keyExtractor={(item) => {item.id.toString()}}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f0ffff',
  },
  item: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',

  },
  itemSubtitle: {
    fontSize: 18,
  }
});
