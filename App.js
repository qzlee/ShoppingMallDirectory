import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import FoodCategoryScreen from './CategoryScreen/FoodCategoryScreen';
import BeautyCategoryScreen from './CategoryScreen/BeautyCategoryScreen';
import BookCategoryScreen from './CategoryScreen/BookCategoryScreen';
import EntertainmentCategoryScreen from './CategoryScreen/EntertainmentCategoryScreen';
import FashionCategoryScreen from './CategoryScreen/FashionCategoryScreen';
import ITCategoryScreen from './CategoryScreen/ITCategoryScreen';
import JewelCategoryScreen from './CategoryScreen/JewelCategoryScreen';
import LeisureCategoryScreen from './CategoryScreen/LeisureCategoryScreen';
import OpticalCategoryScreen from './CategoryScreen/OpticalCategoryScreen';
import SpecialtyCategoryScreen from './CategoryScreen/SpecialtyCategoryScreen';
import SportCategoryScreen from './CategoryScreen/SportCategoryScreen';
import SupermarketCategoryScreen from './CategoryScreen/SupermarketCategoryScreen';

import BeautyViewScreen from './CategoryViewScreen/BeautyViewScreen';
import BookViewScreen from './CategoryViewScreen/BookViewScreen';
import EntertainmentViewScreen from './CategoryViewScreen/EntertainmentViewScreen';
import FashionViewScreen from './CategoryViewScreen/FashionViewScreen';
import FoodViewScreen from './CategoryViewScreen/FoodViewScreen';
import HomeViewScreen from './CategoryViewScreen/HomeViewScreen';
import ITViewScreen from './CategoryViewScreen/ITViewScreen';
import JewelViewScreen from './CategoryViewScreen/JewelViewScreen';
import LeisureViewScreen from './CategoryViewScreen/LeisureViewScreen';
import OpticalViewScreen from './CategoryViewScreen/OpticalViewScreen';
import SpecialtyViewScreen from './CategoryViewScreen/SpecialtyViewScreen';
import SportViewScreen from './CategoryViewScreen/SportViewScreen';
import SupermarketViewScreen from './CategoryViewScreen/SupermarketViewScreen';


export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Category1: {
    screen: BeautyCategoryScreen,
  },
  Category2: {
    screen: BookCategoryScreen,
  },
  Category3 : {
    screen:EntertainmentCategoryScreen,
  },
  Category4 : {
    screen:FashionCategoryScreen,
  },
  Category5 : {
    screen:FoodCategoryScreen,
  },
  Category6 : {
    screen:HomeScreen,
  },
  Category7 : {
    screen:ITCategoryScreen,
  },
  Category8 : {
    screen:JewelCategoryScreen,
  },
  Category9 : {
    screen:LeisureCategoryScreen,
  },
  Category10 : {
    screen:OpticalCategoryScreen,
  },
  Category11: {
    screen:SpecialtyCategoryScreen,
  },
  Category12: {
    screen:SportCategoryScreen,
  },
  Category13: {
    screen:SupermarketCategoryScreen,
  },
  View1: {
    screen:BeautyViewScreen,
  },
  View2: {
    screen:BookViewScreen,
  },
  View3: {
    screen:EntertainmentViewScreen,
  },
  View4: {
    screen:FashionViewScreen,
  },
  View5: {
    screen:FoodViewScreen,
  },
  View6: {
    screen:HomeViewScreen,
  },
  View7: {
    screen:ITViewScreen,
  },
  View8: {
    screen:JewelViewScreen,
  },
  View9: {
    screen:LeisureViewScreen,
  },
  View10: {
    screen:OpticalViewScreen,
  },
  View11: {
    screen:SpecialtyViewScreen,
  },
  View12: {
    screen:SportViewScreen,
  },
  View13: {
    screen:SupermarketViewScreen,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#6495ed',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
