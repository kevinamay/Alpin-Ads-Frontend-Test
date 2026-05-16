const fs = require('fs');
const path = require('path');
const dir = 'src/assets';
fs.readdirSync(dir).forEach(file => {
  if(file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')){
    const filePath = path.join(dir, file);
    const buf = Buffer.alloc(24);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buf, 0, 24, 0);
    fs.closeSync(fd);
    if(buf.toString('ascii', 1, 4) === 'PNG') {
      const width = buf.readUInt32BE(16);
      const height = buf.readUInt32BE(20);
      console.log(`${file}: ${width}x${height}`);
    }
  }
});
