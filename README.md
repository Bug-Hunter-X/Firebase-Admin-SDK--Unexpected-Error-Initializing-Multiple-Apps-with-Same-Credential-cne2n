# Firebase Admin SDK: Unexpected Error Initializing Multiple Apps with Same Credential

This repository demonstrates an uncommon error encountered when using the Firebase Admin SDK to initialize multiple Firebase apps with the same service account credentials but different database URLs.  The error message can be unclear, making debugging challenging.

## Problem
The `initializeApp()` function throws an unexpected error when attempting to initialize multiple apps, even if the database URLs and other settings are distinct. This is often encountered in applications managing multiple Firebase projects.

## Solution
The solution involves creating separate credential objects for each Firebase project.  Even though the service account is the same, initializing each app with a new `credential.cert()` object prevents the conflict.

## How to reproduce the issue and see the solution:
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run `node multipleFirebaseApps.js` to reproduce the error.
4. Run `node multipleFirebaseAppsSolution.js` to see the solution in action.