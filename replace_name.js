const fs = require('fs');
const path = require('path');

function walkSync(dir, callback) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stats = fs.statSync(filepath);
        if (stats.isDirectory()) {
            walkSync(filepath, callback);
        } else if (stats.isFile()) {
            if (filepath.endsWith('.html') || filepath.endsWith('.js') || filepath.endsWith('.js.bak') || filepath.endsWith('.html.bak')) {
                callback(filepath);
            }
        }
    }
}

const targetDir = path.join(__dirname, 'project website');

walkSync(targetDir, (filepath) => {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    content = content.replace(/Anita Sharma/g, 'Niyati Goplani');
    content = content.replace(/anitasharma/g, 'niyatigoplani');
    content = content.replace(/anita\.s/g, 'niyati.g');
    content = content.replace(/Anita_Sharma/g, 'Niyati_Goplani');
    content = content.replace(/Anita/g, 'Niyati');
    content = content.replace(/avatar:\s*"AS"/g, 'avatar: "NG"');
    
    // Also change the login fallback names if there are any
    // anita -> niyati in lowercase (only standalone words or specific cases?)
    // This might be tricky, let's just stick to the obvious ones.

    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log('Updated:', filepath);
    }
});

console.log('Search and replace completed.');
