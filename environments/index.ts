import * as development from './environment.dev';
import * as production from './environment.prod';

export const config = (function(): any {
    let _config = null;
    switch(process.env.NODE_ENV) {
        case 'production':{
            _config = production;
            break;
        }
        case 'development':
        default: { 
            _config = development;
            break;
        }
    }
    return _config;
})();