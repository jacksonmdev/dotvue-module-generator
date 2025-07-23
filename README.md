# DotVue Module Generator

A CLI tool to generate structured module directories for Vue.js projects following the DotVue architecture pattern.

## Installation

### Global Installation
```bash
npm install -g dotvue-module-generator
```

### Local Installation
```bash
npm install dotvue-module-generator
```

## Usage

### Global Usage
```bash
create-module --module my-module-name
```

### Local Usage
```bash
npx dotvue-module-generator --module my-module-name
```

## Features

- Creates a complete module structure with organized directories
- Supports both `src/modules` and `app/modules` directory structures (auto-detects)
- Generates the following directory structure:
  ```
  my-module-name/
  ├── composables/
  ├── extensions/
  ├── types/
  ├── constants/
  ├── ui/
  │   ├── atoms/
  │   ├── molecules/
  │   └── organisms/
  ```
- Each directory contains a `.keep` file to maintain structure in version control

## Publishing (For Maintainers)

### Prerequisites
1. Ensure you have an npm account
2. Make sure the package name is available on npm registry

### Steps to Publish

1. **Update package details** (if needed):
   ```bash
   npm init
   ```

2. **Login to npm**:
   ```bash
   npm login
   ```

3. **Bump version** (if updating):
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

4. **Publish to npm**:
   ```bash
   npm publish
   ```

### Publishing Checklist

- [ ] Update version in `package.json`
- [ ] Test the package locally
- [ ] Ensure all dependencies are properly listed
- [ ] Verify the `bin` configuration works
- [ ] Check that `.gitignore` excludes unnecessary files
- [ ] Run `npm pack` to preview what will be published

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
