/**
 * Logger helper
 */
import { logger } from 'react-native-logs';


const config = {
    transportOptions: {
        colors: {
            info: 'blueBright',
            warn: 'yellowBright',
            error: 'redBright',
            debug: 'greenBright',
        },
    },

    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
    },

    severity: __DEV__ ? 'debug' : 'info',
    
};

const log = logger.createLogger(config);

export default log;


