# Automated CI Pipeline for a Web Application using Jenkins


**Stack:** Node.js (Express), Jest (tests), Jenkins (CI), GitHub (SCM)


## Overview
This repository demonstrates a full CI pipeline using Jenkins. The pipeline automatically triggers on GitHub pushes, installs dependencies, runs static checks (optional), runs unit tests (with JUnit output), builds a simple artifact, and archives it in Jenkins.


## Files
- `Jenkinsfile` - Declarative pipeline definition
- `src/` - Application source
- `tests/` - Unit tests
- `package.json` - Dependencies & scripts
- `jest.config.js` - Jest configuration
- `docs/` - Screenshots and supporting docs


## Quick local steps
1. Install Node.js (v18+ recommended)
2. Install dependencies:
```bash
npm ci