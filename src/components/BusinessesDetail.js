/**
 * Renders a single business card (image, name, rating).
 * Used in: Businesses component.
 */
import React from 'react';
import { View, Text, Image } from 'react-native';
import truncateText from '../helper/truncateText';
import styles from '../styles/businessesDetail';


const BusinessesDetail = ({ business }) => {

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: business?.image_url }} 
                style={styles.image}
            />
            <Text style={styles.name}>
                {truncateText(business?.name)}
            </Text>
            <Text style={styles.rating}>
                ⭐ {business?.rating}
            </Text>
        </View>
    )
};

export default BusinessesDetail;