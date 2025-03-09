// scripts/create-element.js
const fs = require('fs');
const path = require('path');

// Get type (component, section, or layout) and name from command line arguments
const type = process.argv[2];
const elementName = process.argv[3];

if (!type || !elementName) {
  console.error('Please provide a type (component, section, or layout) and name');
  console.error('Usage: node create-element.js component|section|layout ElementName');
  process.exit(1);
}

if (type !== 'component' && type !== 'section' && type !== 'layout') {
  console.error('Type must be either "component", "section", or "layout"');
  process.exit(1);
}

// Determine the directory based on type
let baseDir;
if (type === 'component') {
  baseDir = 'component';
} else if (type === 'section') {
  baseDir = 'sections';
} else if (type === 'layout') {
  baseDir = 'layout';
}

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
      ${type === 'layout' ? '      {props.children}' : `      {/* ${type === 'component' ? 'Component' : 'Section'} content goes here */}`}
    </div>
  );
};

${elementName}.propTypes = {
  // Define your prop types here
  // example: name: PropTypes.string.isRequired,
  ${type === 'layout' ? 'children: PropTypes.node.isRequired,' : ''}
};

${elementName}.defaultProps = {
  // Define default props here
  // example: name: 'Default Name',
};

export default ${elementName};
`;

// Create CSS file
const cssContent = `.${elementName.toLowerCase()} {
  /* ${type} styles go here */
}
`;

// Write the files
fs.writeFileSync(path.join(elementDir, `${elementName}.js`), elementContent);
console.log(`Created ${type} file: ${elementDir}/${elementName}.js`);

fs.writeFileSync(path.join(elementDir, `${elementName}.css`), cssContent);
console.log(`Created CSS file: ${elementDir}/${elementName}.css`);

console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} ${elementName} created successfully!`);