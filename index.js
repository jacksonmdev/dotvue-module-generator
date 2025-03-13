#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const minimist = require('minimist')

const createModule = (moduleName) => {
  const modulePath = path.join(process.cwd(), 'src', 'modules', moduleName)

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

  // Create the directories
  directories.forEach((dir) => {
    fs.ensureDirSync(path.join(modulePath, dir))
  })

  // Create default files
  const files = {
    '.keep': '',
    'composables/comp.useDotVue.ts': 'export const useDotVue = () => {}\n',
    'composables/index.ts': "export * from './useDotVue'\n",
    'constants/const.dot-vue.ts': 'export const count = 1',
    'constants/index.ts': "export * from './const.dot-vue'\n",
    'extensions/ext.dot-vue.ts': 'export const DotVueExtension = () => {}\n',
    'extensions/index.ts': "export * from './dotvue.ext'\n",
    'types/type.dot-vuew.ts': 'export type DotVueType = { type: string }\n',
    'types/index.ts': "export * from './dotvue.type'\n",
    'ui/atoms/atom.dot-vue.vue':
      '<template>\n  <div>Hello World!</div>\n</template>\n',
    'ui/atoms/index.ts':
      "export { default as AtomDotVue } from './atom.dot-vuew.vue'\n",
    'ui/molecules/molecule.dot-vue.vue':
      '<template>\n  <div>Hello World!</div>\n</template>\n',
    'ui/molecules/index.ts':
      "export { default as MoleculeDotVue } from './molecule.dot-vue.vue'\n",
    'ui/organisms/organism.dot-vue.vue':
      '<template>\n  <div>Hello World!</div>\n</template>\n',
    'ui/organisms/index.ts':
      "export { default as OrganismDotVue } from './organism.dot-vue.vue'\n",
    'ui/index.ts':
      "export * from './atoms'\nexport * from './molecules'\nexport * from './organisms'\n",
  }

  for (const [fileName, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(modulePath, fileName), content)
  }

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
