const constants = require('../lib/bitmap-constants');

class BitmapHeader {
    // constructor(){
        
    // }
    setBitMapValues(buffer) {
        this.pixelOffset = buffer[constants.PIXEL_OFFSET];
        this.bitsPerPixel = buffer[ constants.BITS_PER_PIXEL_OFFSET];
        this.fileSize = buffer.readInt32LE(constants.FILE_SIZE_OFFSET);
    }
}

module.exports = BitmapHeader;
