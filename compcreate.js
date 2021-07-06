const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');



const argv = yargs
    .command(['create <filename> [content]', 'c'], 'Creates a new component with content', {}, (argv) => {
        const filePath = path.resolve(argv.filename);
        const file = argv.filename
        const defaultContent = 
        `
import React from "react";
function ${path.parse(file).name} () {
    return (
         <div>
         ${path.parse(file).name} is a templated component. Now you can work with it.
         </div>
    ); 
}
export default ${path.parse(file).name};`
        
        fs.writeFile(filePath, argv.content || defaultContent)
        .then (() => console.log ("Your data has been saved"))
        .catch (e => console.error("An error has occured:", e))
    })

    .argv;


