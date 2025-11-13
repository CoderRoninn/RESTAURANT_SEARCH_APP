import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/ui/theme';
import { FONT_SIZES, SPACING, ICON_FONT_SIZES, SIZES } from '../constants/ui/designTokens';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.searchBarBackground,
        height: SIZES.searchBarHeight,
        borderRadius:5,
        marginHorizontal: SPACING.large,
        marginTop: SPACING.large,
        marginBottom: SPACING.large,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: FONT_SIZES.large,
    },
    iconStyle: {
        fontSize: ICON_FONT_SIZES.large,
        alignSelf: 'center',
        marginHorizontal: SPACING.large,
    },
});

export default styles;

