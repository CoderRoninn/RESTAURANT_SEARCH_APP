/**
 * Search input component. Handles search term input and submission.
 * Used in: SearchScreen.
 */
import React from 'react';
import { View, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../constants/ui/theme';
import { TEXT_INPUT } from '../constants/components/textInput';
import { ICONS } from '../constants/components/icon';
import styles from '../styles/searchBar';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Feather style={styles.iconStyle}
              name={ICONS.search}
              color={COLORS.iconPrimary}
            />
            <TextInput style={styles.inputStyle}
              placeholder={TEXT_INPUT.placeholder}
              value={term}
              onChangeText={onTermChange}
              onEndEditing={onTermSubmit}
              returnKeyType={TEXT_INPUT.returnKeyType}
            />
        </View>

    );
};

export default SearchBar;