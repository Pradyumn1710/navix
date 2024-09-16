import { writeFile } from 'fs';
export default async function writeData(points) {
  try {
    // Convert points array to JSON string
    const jsonString = JSON.stringify(points, null, 2);

    // Write JSON string to data.js
    writeFile('../SIH/src/data.js', `const points = ${jsonString};\nexport default points;`, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File has been written successfully.');
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
