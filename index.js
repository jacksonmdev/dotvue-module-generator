#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const minimist = require('minimist')

const createModule = (moduleName) => {
  // Check if src/modules exists, fallback to app/modules
  const baseDir = fs.existsSync(path.join(process.cwd(), 'src', 'modules')) 
    ? path.join('src', 'modules') 
    : path.join('app', 'modules')
  
  const modulePath = path.join(process.cwd(), baseDir, moduleName)

  // Create the directory
  fs.ensureDirSync(modulePath)

  // Define the directories to be created
  const directories = [
    'composables',
    'extensions',
    'types',
    'constants',
    'ui/atoms',
    'ui/molecules',
    'ui/organisms',
  ]

  // Create the directories and add .keep files
  directories.forEach((dir) => {
    const dirPath = path.join(modulePath, dir)
    fs.ensureDirSync(dirPath)
    fs.writeFileSync(path.join(dirPath, '.keep'), '')
  })

  console.log(`Module ${moduleName} created successfully!`)
}

// Parse command line arguments
const args = minimist(process.argv.slice(2))
const moduleName = args.module

if (!moduleName) {
  console.error('Please provide a directory name using --module.')
  process.exit(1)
}

createModule(moduleName)
