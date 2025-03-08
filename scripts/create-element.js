// scripts/create-element.js
const fs = require('fs');
const path = require('path');

// Get type (component or section) and name from command line arguments
const type = process.argv[2];
const elementName = process.argv[3];

if (!type || !elementName) {
  console.error('Please provide a type (component or section) and name');
  console.error('Usage: node create-element.js component|section ElementName');
  process.exit(1);
}

if (type !== 'component' && type !== 'section') {
  console.error('Type must be either "component" or "section"');
  process.exit(1);
}

// Determine the directory based on type
const baseDir = type === 'component' ? 'component' : 'sections';
const elementDir = path.join('src', baseDir, elementName);

if (!fs.existsSync(elementDir)) {
  fs.mkdirSync(elementDir, { recursive: true });
  console.log(`Created directory: ${elementDir}`);
} else {
  console.log(`Directory already exists: ${elementDir}`);
}

// Create element JavaScript file with PropTypes
const elementContent = `import React from 'react';
import PropTypes from 'prop-types';
import './${elementName}.css';

const ${elementName} = (props) => {
  return (
    <div className="${elementName.toLowerCase()}">
      {/* ${type === 'component' ? 'Component' : 'Section'} content goes here */}
    </div>
  );
};

${elementName}.propTypes = {
  // Define your prop types here
  // example: name: PropTypes.string.isRequired,
};

${elementName}.defaultProps = {
  // Define default props here
  // example: name: 'Default Name',
};

export default ${elementName};
`;

// Create CSS file
const cssContent = `.${elementName.toLowerCase()} {
  /* ${type === 'component' ? 'Component' : 'Section'} styles go here */
}
`;

// Write the files
fs.writeFileSync(path.join(elementDir, `${elementName}.js`), elementContent);
console.log(`Created ${type} file: ${elementDir}/${elementName}.js`);

fs.writeFileSync(path.join(elementDir, `${elementName}.css`), cssContent);
console.log(`Created CSS file: ${elementDir}/${elementName}.css`);

console.log(`${type === 'component' ? 'Component' : 'Section'} ${elementName} created successfully!`);