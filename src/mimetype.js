import {mimes} from './mime-dictionary';

class MimeType {

    parseMime(mime) {
        mimes.filter(vMime => {
            console.log(vMime);
            return vMime == mime;
        })
    }

    parseType(type) {

    }
}

export default MimeType;