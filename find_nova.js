const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');

console.log('Searching for "nova" or "avatar" in style.css:');
lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('nova') || line.toLowerCase().includes('avatar')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
