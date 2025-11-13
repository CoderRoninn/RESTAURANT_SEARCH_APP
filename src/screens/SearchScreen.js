import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import Businesses from '../components/Businesses';
import { PRICE_LEVELS } from '../constants/api/priceLevels';
import filterBusinessesByPrice from '../helper/filterBusinesses';
import { SEARCH_SCREEN_TITLES } from '../constants/screens/searchScreen';


const SearchScreen = () => {
    const [searchTermState, setSearchTermState] = useState('');
    const [ businessesState, errorMessageState, fetchAllRestaurants ] = useRestaurants();
        
    return (
        <View>
            <SearchBar 
              term={searchTermState}
              onTermChange={setSearchTermState}
              onTermSubmit={() => fetchAllRestaurants(searchTermState)}
            />
            {errorMessageState ? <Text style={{ color: 'red' }}>{errorMessageState}</Text> : null}
            <ScrollView>
              <Businesses
                businesses={filterBusinessesByPrice(businessesState, PRICE_LEVELS.INEXPENSIVE)}
                 title={SEARCH_SCREEN_TITLES.INEXPENSIVE}
               />
              <Businesses 
                businesses={filterBusinessesByPrice(businessesState, PRICE_LEVELS.MODERATE)}
                title={SEARCH_SCREEN_TITLES.MODERATE}
              />
              <Businesses 
                businesses={filterBusinessesByPrice(businessesState, PRICE_LEVELS.EXPENSIVE)}
                title={SEARCH_SCREEN_TITLES.EXPENSIVE}
              />
            </ScrollView>
        </View>
    )
};

export default SearchScreen;