const fs = require('fs');
const { execSync } = require('child_process');

// Get the version bump type from command line args
const bumpType = process.argv[2] || 'patch';

// Read current version from package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const currentVersion = packageJson.version;

// Bump version
console.log('Bumping version...');
execSync(`npm version ${bumpType} --no-git-tag-version`);

// Read new version
const newPackageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const newVersion = newPackageJson.version;

// Update CHANGELOG.md
const today = new Date().toISOString().split('T')[0];
const changelogEntry = `\n## [${newVersion}] - ${today}\n\n### Changed\n- Add changes here\n`;

try {
    const changelog = fs.readFileSync('./CHANGELOG.md', 'utf8');
    const updatedChangelog = changelog.replace('# Changelog\n', `# Changelog\n${changelogEntry}`);
    fs.writeFileSync('./CHANGELOG.md', updatedChangelog);
} catch (error) {
    // Create new CHANGELOG.md if it doesn't exist
    const initialChangelog = `# Changelog\n${changelogEntry}\n`;
    fs.writeFileSync('./CHANGELOG.md', initialChangelog);
}

console.log(`Version bumped from ${currentVersion} to ${newVersion}`);
console.log('Updated CHANGELOG.md - Please update the changes section');