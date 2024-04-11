import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, {useEffect, useState} from "react"
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "ljlUMDZBDogpUeODk9-YR2ab1pfnkfOdr-fQKrzPOqEcpRwu_4jQFTlUrVHHRbIDjqKMEfC28vsE5TFA3RvraaljQwqyEHQiw1rTKc2wgDiDG89vrBG6P_8mudUWZnYx"

export default function Home() {
  const [restaurantData , setActiveRestaurants] = useState(localRestaurants)

  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles";
    const apiOptions = {
      headers : {
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    };

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) => setActiveRestaurants(json.businesses))
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData = {restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}