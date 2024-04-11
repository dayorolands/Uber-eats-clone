import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
  return (
    <View style={{flexDirection: "row", marginTop: 15}}>
        <GooglePlacesAutocomplete 
            query={{key: 'AIzaSyCemEafYVkTQziCOv_MFlWsrkcyoTYMR0E'}}
            onPress={(data, details = null) => {
                console.log("hhhhhhhhhhhhhhh >>>>>>>> " + data.description)
            }}
            placeholder= 'Search'
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    fontWeight:"700",
                    borderRadius:25,
                    marginTop: 7
                },
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginRight:10
                }
            }}
            renderLeftButton={ () => (
                <View style={{ marginLeft: 10  }}>
                    <Ionicons name='location-sharp' size={24} />
                </View>
            )}
            renderRightButton={ () => (
                <View style={{
                    flexDirection:"row",
                    marginRight:10,
                    alignItems:"center",
                    backgroundColor:"white",
                    padding:9,
                    borderRadius:30
                }}>
                    <AntDesign name='clockcircle' size={11} style={{marginRight:7}}/>
                    <Text>Search</Text>
                </View>
            )}
        />
    </View>
  )
}