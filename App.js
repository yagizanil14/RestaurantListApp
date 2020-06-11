import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {CardItem} from './src/components'
import data from './data.json'

const App = () => {
  return (
    <SafeAreaView>
        <View>
        <FlatList
            keyExtractor={(items,index) => index.toString()}
            data={data}
            renderItem={({item})=>(<CardItem dataP={item}/>)}
             />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  
});

export default App;
