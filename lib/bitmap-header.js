const constants = require('../lib/bitmap-constants');
const fs = require('fs');

class BitmapHeader {
    constructor() {
        this.pixelOffset = 0;
        this.bitsPerPixel = 0;
        this.fileSize = 0;
    }

    createBuffer(path) {
        return fs.readFileSync(path);
    }

    setBitMapValues(buffer) {
        this.pixelOffset = buffer[constants.PIXEL_OFFSET];
        this.bitsPerPixel = buffer[ constants.BITS_PER_PIXEL_OFFSET];
        this.fileSize = buffer.readInt32LE(constants.FILE_SIZE_OFFSET);
    }
}

module.exports = BitmapHeader;
