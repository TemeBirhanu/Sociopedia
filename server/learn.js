import { fileURLToPath } from 'url';
import path from 'path';

// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the current directory name
const __dirname = path.dirname(__filename);

console.log(__filename); // Prints the full path to the current file
console.log(__dirname);  // Prints the directory path containing the current file