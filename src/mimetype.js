import {mimes} from './mime-dictionary';

window.MimeTypeParser = {

    parseMime(mime) {

        let position = -1;
        for (let m in mimes) {
            if (mimes[m].indexOf(mime) !== -1) {
                position = m;
            }
        }

        if (position === -1) {
            return null;
        }

        let type = position.split(':');

        return type[0].substr(1);
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

        return mimes[type];
    },
    parseTypeWithDot(type) {
        return this.parseType(type);
    }
};