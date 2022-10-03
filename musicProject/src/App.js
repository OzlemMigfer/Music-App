import React,{useState} from "react";
import {Text,View,StyleSheet,FlatList} from 'react-native';
import musicData from './music_app.json';
import SongCard from "./components/SongCard/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";

function App(){
  const [list, setList] = useState(musicData);

  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeparator = () => <View style={styles.separator} />

  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };


  return(
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
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