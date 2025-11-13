import { StyleSheet } from 'react-native';
import { FONT_SIZES, SPACING } from '../constants/ui/designTokens';

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.medium,
    },
    titleStyle: {
        fontSize: FONT_SIZES.medium,
        fontWeight: 'bold',
        marginLeft: SPACING.large,
        marginBottom: SPACING.small,
    },
});

export default styles;


