This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Disclaimer

I have not had time to complete this test. Which is annoying as I was having great fun. I do not get much time to code being an Engineering Manager. 
I have submitted what I have so far, and I can understand if its not enough to demonstrate my ability, but I thought I would still send.

## Tech Choices

The recruiter told me I was allowed to do it all in JavaScript tech. 
The requirements were for React, so an easy way to use TypeScript, React and a Node Backend is NextJS.  
Remix is new on the scene and people like it, but I'm more familiar with Next.
NextJS comes baked in with CSS Modules, they do not offend me too much, so I decided to stick with if for this simple UX.

## Approach

I love a test first apprach and TDD, and working top down from the end user experience.
I have tried to work with continous integration merging in small pieces of working software as frequently as possible.
I used Cypress for all my browser based tests so started with a simple test there and worked through the UI back to the backend.
Started at an integration test level for the backend. I never got down to a unit level of testing as the behaviour of the application was still covered by my previous layers of testing.

## What I achieved

I created an unstyled application that posts unvalidated credit card details. It sends the data to a rest API and displays in the front-end.
There are acceptance tests in Cypress and Integration tests in Jest.

A pretty poor attempt, but I just did have the time with interviews and family life.

## Where I was going if I had time

* TDD a CardService class wrapping the store to perform validation. Use the validation at the boundaries.
* Add another Cypress test for adding several cards and no duplicates. And drive that functionality in the form validation and the backend.
* Add loading/blocker for when adding a new card.
* Basic styling and layout for application.
* Add a currency formatted for monies.
* Add all correct headers for the API requests and responses.
* TDD negative balances being red.
* Refactor any outstanding code smells.

Feel free to follow my commits through to see who I progressed through the task.

## Running the tests

* Spin up the application running `npm run dev`.  
* Run `npm test` to run all tests against the application.

NOTE: There is currently no clean up, so you have to restart the site when before running the tests.

## Running the app

The app was created on Node v18.
To specify the node version I used NVM which you may need to install it. You can then run either `nvm use` or `nvm istall`.

Then

```bash
npm ci
npm run dev
```

Or in a production mode

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
