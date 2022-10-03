import React from "react";
import {Text,View,StyleSheet,FlatList} from 'react-native';
import musicData from './music_app.json';
import SongCard from "./components/SongCard/SongCard";

function App(){
  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeparator = () => <View style={styles.separator} />
  return(
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={musicData}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  separator:{
    borderWidth:1,
    borderColor:'#f0f0f5'
  }
});

export default App;