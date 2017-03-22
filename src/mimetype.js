import {mimes} from './mime-dictionary';

window.MimeTypeParser = {

    parseMime(mime) {
        let position = Object.values(mimes).indexOf(mime);
        if (position === -1) {
            return null;
        }

        return Object.keys(mimes)[position].substr(1);
    },
    parseMimeWithDot(mime) {
        return "." + this.parseMime(mime);
    },
    parseType(type) {
        type = type[0] === '.' ? type : '.' + type;

        let position = Object.keys(mimes).indexOf(type);
        if (position === -1) {
            return null;
        }

        return Object.values(mimes)[position];
    },
    parseTypeWithDot(type) {
        return this.parseType(type);
    }
};