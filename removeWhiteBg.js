import Jimp from 'jimp';

async function removeBackground() {
  try {
    console.log('Loading logo image...');
    const image = await Jimp.read('./public/logo-new.png');
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const queue = [];
    const threshold = 240; // Tolerance for "white" (we want 240-255 to be matched)
    
    const visited = new Uint8Array(width * height);
    
    function isWhiteish(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) return false;
      const idx = (y * width + x);
      if (visited[idx]) return false;
      
      const px = (y * width + x) * 4;
      const r = image.bitmap.data[px];
      const g = image.bitmap.data[px + 1];
      const b = image.bitmap.data[px + 2];
      
      return r >= threshold && g >= threshold && b >= threshold;
    }
    
    function enqueue(x, y) {
      if (isWhiteish(x, y)) {
        visited[y * width + x] = 1;
        queue.push({x, y});
      }
    }
    
    console.log('Starting flood fill for white bg...');
    
    for (let x = 0; x < width; x++) { enqueue(x, 0); enqueue(x, height - 1); }
    for (let y = 0; y < height; y++) { enqueue(0, y); enqueue(width - 1, y); }

    let processed = 0;
    while (queue.length > 0) {
      const {x, y} = queue.shift();
      processed++;
      
      const px = (y * width + x) * 4;
      image.bitmap.data[px + 3] = 0; // Alpha 0
      
      enqueue(x + 1, y); enqueue(x - 1, y); enqueue(x, y + 1); enqueue(x, y - 1);
    }
    
    console.log(`Processed ${processed} white background pixels`);
    await image.writeAsync('./public/logo-nobg.png');
    console.log('Successfully saved to logo-nobg.png');
    
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackground();
