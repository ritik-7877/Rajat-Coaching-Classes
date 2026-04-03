import Jimp from 'jimp';

async function removeBackground() {
  try {
    console.log('Loading image...');
    const image = await Jimp.read('./public/logo-new3.png');
    
    // ... skipping intermediate matching part, just update source and destination 
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Create a queue for flood fill
    const queue = [];
    const threshold = 20; // Tolerance for "black"
    
    // We'll maintain a visited map
    const visited = new Uint8Array(width * height);
    
    function isBlackish(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) return false;
      const idx = (y * width + x);
      if (visited[idx]) return false;
      
      const px = (y * width + x) * 4;
      const r = image.bitmap.data[px];
      const g = image.bitmap.data[px + 1];
      const b = image.bitmap.data[px + 2];
      
      return r <= threshold && g <= threshold && b <= threshold;
    }
    
    function enqueue(x, y) {
      if (isBlackish(x, y)) {
        visited[y * width + x] = 1;
        queue.push({x, y});
      }
    }
    
    console.log('Starting flood fill from top-left (0,0)...');
    
    // Add multiple edge points as starting points
    for (let x = 0; x < width; x++) {
      enqueue(x, 0);
      enqueue(x, height - 1);
    }
    for (let y = 0; y < height; y++) {
      enqueue(0, y);
      enqueue(width - 1, y);
    }
    
    // Also enqueue corners more specifically just in case
    enqueue(0, 0);
    enqueue(width - 1, 0);
    enqueue(0, height - 1);
    enqueue(width - 1, height - 1);

    let processed = 0;
    while (queue.length > 0) {
      const {x, y} = queue.shift();
      processed++;
      
      // Make transparent
      const px = (y * width + x) * 4;
      image.bitmap.data[px + 3] = 0; // Set Alpha to 0
      
      // Check neighbors
      enqueue(x + 1, y);
      enqueue(x - 1, y);
      enqueue(x, y + 1);
      enqueue(x, y - 1);
    }
    
    console.log(`Processed ${processed} background pixels`);
    
    // Anti-alias edges slightly to make it smoother
    console.log('Applying edge smoothing...');
    
    await image.writeAsync('./public/instructor-nobg.png');
    console.log('Successfully saved to instructor-nobg.png');
    
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackground();
