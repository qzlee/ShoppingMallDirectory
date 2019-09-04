import React, { Component } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    ScrollView
} from 'react-native';

import Button from 'react-native-flat-button'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Shopping Mall',
  };

render() {
  return (
    <View style={styles.container}>
    <ScrollView>
    <Text></Text>
    <Button
         type="primary"
         onPress={() => this.props.navigation.navigate('Category1')}
         containerStyle={styles.buttonContainer}
       > Beauty & Wellness
    </Button>

    <Button
         type="neutral"
         onPress={() => this.props.navigation.navigate('Category2')}
         containerStyle={styles.buttonContainer}
       >Book, Gift & Souvenier
    </Button>
    <Button
         type="warn"
         onPress={() => this.props.navigation.navigate('Category3')}
         containerStyle={styles.buttonContainer}
       >Entertainment
    </Button>
    <Button
         type="positive"
         onPress={() => this.props.navigation.navigate('Category4')}
         containerStyle={styles.buttonContainer}
       >Fashion & Accessories
    </Button>
    <Button
         type="negative"
         onPress={() => this.props.navigation.navigate('Category5')}
         containerStyle={styles.buttonContainer}
       >Food
    </Button>
    <Button
         type="primary"
         onPress={() => this.props.navigation.navigate('Category6')}
         containerStyle={styles.buttonContainer}
       >Home & Decor
    </Button>
    <Button
         type="neutral"
         onPress={() => this.props.navigation.navigate('Category7')}
         containerStyle={styles.buttonContainer}
       >IT
    </Button>
    <Button
         type="warn"
         onPress={() => this.props.navigation.navigate('Category8')}
         containerStyle={styles.buttonContainer}
       >Jewelery & Timepieces
    </Button>
    <Button
         type="positive"
         onPress={() => this.props.navigation.navigate('Category9')}
         containerStyle={styles.buttonContainer}
       >Leisure & Hobbies
    </Button>
    <Button
         type="negative"
         onPress={() => this.props.navigation.navigate('Category10')}
         containerStyle={styles.buttonContainer}
       >Optical & Eyecare
    </Button>
    <Button
         type="primary"
         onPress={() => this.props.navigation.navigate('Category11')}
         containerStyle={styles.buttonContainer}
       >Specialty & Services
    </Button>
    <Button
         type="neutral"
         onPress={() => this.props.navigation.navigate('Category12')}
         containerStyle={styles.buttonContainer}
       >Sport & Fitness
    </Button>
    <Button
         type="warn"
         onPress={() => this.props.navigation.navigate('Category13')}
         containerStyle={styles.buttonContainer}
       >Supermarket
    </Button>
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 300,
    height: 100,
    marginVertical: 5
  },
  content:{
    fontSize: 50
  }
})
