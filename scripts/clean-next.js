const fs = require('fs');
const path = require('path');

const nextDir = path.join(process.cwd(), '.next');

function deleteFolderRecursive(folderPath, retries = 3) {
  if (!fs.existsSync(folderPath)) {
    console.log('.next folder does not exist, skipping clean.');
    return;
  }

  let attempt = 0;
  
  function tryDelete() {
    attempt++;
    try {
      // Try to remove files first
      const files = fs.readdirSync(folderPath);
      
      for (const file of files) {
        const curPath = path.join(folderPath, file);
        try {
          const stat = fs.statSync(curPath);
          
          if (stat.isDirectory()) {
            deleteFolderRecursive(curPath, 1); // Don't retry subdirectories
          } else {
            // Try to make file writable first (Windows)
            try {
              fs.chmodSync(curPath, 0o666);
            } catch (e) {
              // Ignore chmod errors
            }
            fs.unlinkSync(curPath);
          }
        } catch (err) {
          // If file is locked, skip it - it will be overwritten on next build
          if (err.code !== 'EPERM' && err.code !== 'EBUSY') {
            console.warn(`Warning: Could not delete ${curPath}: ${err.message}`);
          }
        }
      }
      
      // Try to remove the directory itself
      try {
        fs.rmdirSync(folderPath);
        console.log('Successfully cleaned .next folder');
      } catch (err) {
        if (err.code === 'ENOTEMPTY' || err.code === 'EPERM') {
          // Some files might still be locked, but that's okay
          // They'll be overwritten on next build
          console.log('Cleaned .next folder (some locked files may remain, but will be overwritten)');
        } else {
          throw err;
        }
      }
    } catch (err) {
      if (attempt < retries) {
        console.log(`Attempt ${attempt} failed, retrying in 500ms...`);
        setTimeout(tryDelete, 500);
      } else {
        // Final attempt - just log and continue
        // The build will overwrite anyway
        console.log('Note: Some files in .next could not be deleted (may be locked).');
        console.log('This is usually safe - Next.js will overwrite them during build.');
      }
    }
  }
  
  tryDelete();
}

deleteFolderRecursive(nextDir);

