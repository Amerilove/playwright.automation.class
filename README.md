# Mindera Code Academy - Backend Automation Testing

## Project Overview
This repository contains the backend automation test suite for the Adventurers Guild API. The project focuses on implementing a structured, maintainable test architecture using Playwright and TypeScript.

## Project Structure
- **test/api/**: Reusable client functions for API interactions (Authentication, Character CRUD).
- **test/data/**: Centralised test data and constants.
- **test/tests/**: Test specifications covering CRUD flows, list validations, and negative testing.

## Key Features Implemented
- **Layered Architecture**: Separation of logic (clients), data, and test execution.
- **Reusable Auth**: Centralised token retrieval to avoid redundant login logic.
- **CRUD Validation**: Full Create, Read, Update, and Delete flow for characters.
- **Type Safety**: Utilising TypeScript interfaces for request payloads.

## Security & Environment
To follow security best practices, sensitive data (like passwords) should be managed via environment variables. For this educational project, credentials are kept minimal, but the architecture is ready to be integrated with a `.env` provider.

## How to Run Tests
1. Install dependencies: `npm install`
2. Run all tests: `npx playwright test`
3. View report: `npx playwright show-report`