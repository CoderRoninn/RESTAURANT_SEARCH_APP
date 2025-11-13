import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/ui/theme';
import { FONT_SIZES, SPACING, SIZES } from '../constants/ui/designTokens';

const styles = StyleSheet.create({
    container: {
        marginLeft: SPACING.large,
    },
    image: {
        width: SIZES.businessImageWidth,
        height: SIZES.businessImageHeight,
        borderRadius:4,
        marginBottom: SPACING.small,
    },
    name: {
        fontSize: FONT_SIZES.medium,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: FONT_SIZES.small,
        color: COLORS.textSecondary,
        marginTop: SPACING.extraSmall,
    }
});

export default styles;


