# E2E Plugin Integration Testing

This document describes the E2E testing setup added to the ci-cd.yml workflow.

## Overview

A new `test` job has been added to the GitHub Actions workflow to perform end-to-end testing of the plugin artifacts produced in the build step.

## Test Job Flow

1. **Download Artifacts**: Downloads the plugin build artifacts from the `build` job
2. **Prepare Plugin**: Copies plugin files to a local directory structure
3. **Start Grafana**: Spins up a Grafana Enterprise container with:
   - Anonymous authentication enabled (`GF_AUTH_ANONYMOUS_ENABLED=true`)
   - Admin role for anonymous users (`GF_AUTH_ANONYMOUS_ORG_ROLE=Admin`)
   - Plugin directory mounted (`GF_PATHS_PLUGINS=/var/lib/grafana/plugins`)
   - Plugin files mounted from host
4. **Install Playwright**: Installs Playwright and Chromium browser
5. **Run E2E Tests**: Executes Playwright tests that verify:
   - Plugin appears in the plugins page
   - Data source can be created for the plugin
   - Hello Grafana component is functional
   - Modal dialog opens with expected content
6. **Upload Report**: Uploads test results and screenshots (if any failures)
7. **Cleanup**: Stops and removes the Grafana container

## Test Coverage

The Playwright test (`e2e-tests/plugin-integration.spec.ts`) validates:

1. **Plugin Installation**: Verifies the plugin appears in Grafana's plugins page
2. **Data Source Creation**: Tests creating a new data source for the UI plugin
3. **Component Rendering**: Confirms the Hello Grafana component renders correctly
4. **User Interaction**: Clicks the "Hello" button and verifies modal opens
5. **Modal Content**: Validates the modal shows "GRAFANA" in uppercase (via VerySpecialHello component)

## Job Dependencies

- `build` → `test` → `deploy`
- The `deploy` job now depends on `test` instead of `build`
- Deploy only runs if all tests pass

## Files Added/Modified

- `.github/workflows/ci-cd.yml`: Added test job and updated dependencies
- `e2e-tests/plugin-integration.spec.ts`: Playwright test script
- `playwright.config.ts`: Playwright configuration
- `.gitignore`: Added exclusions for test artifacts

## Running Tests Locally

To run the tests locally:

1. Build the plugin following the workflow steps
2. Start Grafana with the plugin mounted:
   ```bash
   docker run -d --name grafana -p 3000:3000 \
     -e GF_AUTH_ANONYMOUS_ENABLED=true \
     -e GF_AUTH_ANONYMOUS_ORG_ROLE=Admin \
     -v $(pwd)/grafana-plugins:/var/lib/grafana/plugins \
     grafana/grafana-enterprise:latest
   ```
3. Install Playwright: `npm install -D @playwright/test`
4. Install browsers: `npx playwright install --with-deps chromium`
5. Run tests: `npx playwright test`
