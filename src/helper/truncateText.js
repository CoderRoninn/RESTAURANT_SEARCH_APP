/**
 * Truncates text to specified length and appends '...' if longer
 * Used in: src/components/BusinessesDetail.js
 */


const truncateText = (text, maxLength = 30) => {
    return text?.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export default truncateText;

