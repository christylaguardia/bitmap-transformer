const constants = require('../lib/bitmap-constants');

class BitmapHeader {
    // constructor(){
        
    // }
    setBitMapValues(buffer) {
        this.pixelOffset = buffer[constants.PIXEL_OFFSET];
        console.log('pixelOffset', this.pixelOffset);

        this.bitsPerPixel = buffer[ constants.BITS_PER_PIXEL_OFFSET];
        console.log('bitsPerPixel', this.bitsPerPixel);
        
        // this.fileSize = buffer[constants.FILE_SIZE_OFFSET];
        // console.log('fileSize', this.fileSize);
    }
}

module.exports = BitmapHeader;