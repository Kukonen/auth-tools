const mongoose = require('mongoose');
import {IOprions} from './interfaces/index.interfaces';

class AuthTools {

    type: 'jwt' | 'one-token' | 'two-token';
    
    constructor(link:string, options:IOprions) {
        mongoose.connect(link, () => {
            console.log("STARTED");
        });

        if (options.type) {
            this.type = options.type;
        } else {
            this.type = 'one-token';
        }
        
    }

}

module.exports = new AuthTools();