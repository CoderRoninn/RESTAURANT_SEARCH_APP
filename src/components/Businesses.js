/**
 * Displays a horizontal list of businesses 
 * Used in SearchScreen.
 */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import BusinessesDetail from './BusinessesDetail';
import styles from '../styles/businesses';


const Businesses = ({ title, businesses }) => {

  // Early return to avoid rendering title and list when there are no businesses
  if(!businesses.length) {
    return null;
  }
  
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={businesses}
              keyExtractor={(_, index) => index.toString()}
              // Call for every item in the list
              renderItem={({ item }) => {
                return (
                  <BusinessesDetail business={item} />
                );
              }}
            />
        </View>
    )

};

export default Businesses;
