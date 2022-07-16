# Issue Description

The current issue now is on the index.js page. In order to reproduce the issue, follow these steps...

1. npm run dev

This will start the app on http://localhost:3001. My account is set up to allow this url.

2. Browse to http://localhost:3001.

You should get redirected to the login page. If you look at the code on index.js, it is basically code to redirect the user if a session does not exist. I took this code from the example in the docs.

3. Login using Google.

This will send you back to /authenticate which handles the auth and then redirects you back to the /index page.

This is where you should see the error.

It is a React hydration error that I think is being caused by something happening within useStytchSession. But I am not sure.

Note, if you revoke the session or delete the user from Stytch, and then revisit /index, the error does not occur.

The specific error is... Error: Hydration failed because the initial UI does not match what was rendered on the server.
