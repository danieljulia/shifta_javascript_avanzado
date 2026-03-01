const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('Converting markdown files to PDF...');

// Change working directory to the parent directory
process.chdir(path.join(__dirname, '..'));
console.log(`Changed working directory to: ${process.cwd()}`);

// Function to get all .md files in a directory recursively
function getAllMarkdownFiles(dir, fileList = []) {
    console.log(`Scanning directory: ${dir}`);
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file === 'node_modules') {
                console.log(`Skipping directory: ${filePath}`);
                return;
            }
            console.log(`Entering directory: ${filePath}`);
            getAllMarkdownFiles(filePath, fileList);
        } else if (filePath.endsWith('.md')) {
            const pdfFilePath = filePath.replace(/\.md$/, '.pdf');
            if (fs.existsSync(pdfFilePath)) {
                console.log(`Skipping already generated PDF: ${pdfFilePath}`);
                return;
            }
            console.log(`Found markdown file: ${filePath}`);
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Function to convert .md files to .pdf using npx
function convertMarkdownToPdf(mdFiles) {
    mdFiles.forEach(mdFile => {
        const pdfFile = mdFile.replace(/\.md$/, '.pdf');
        exec(`npx markdown-pdf ${mdFile} -o ${pdfFile}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error converting ${mdFile}: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`Converted ${mdFile} to ${pdfFile}`);
        });
    });
}

// Get all .md files in the current directory and subdirectories
const markdownFiles = getAllMarkdownFiles(process.cwd());

// Convert all .md files to .pdf
convertMarkdownToPdf(markdownFiles);