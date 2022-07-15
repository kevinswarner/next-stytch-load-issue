# Issue Description

- This is a starter NextJS app.
- I added the js script in the _app.js file.
- I added the provider in the _app.js file.
- I created a second sample page at /sample
- I added the useStytch hook to that page.

When you load localhost:3000, everything seems fine. This page does not use the hook.

When you load localhost:3000/sample, the following error occurs...


Unhandled Runtime Error
Error: Stytch has not been loaded.
Make sure the script tag exists in the document head:
```
<script src="https://js.stytch.com/stytch.js"></script>
```

If using Next.js be sure to load Stytch using the beforeInteractive strategy in pages/_app.jsx:
```
import Script from 'next/script';
...
<Script src="https://js.stytch.com/stytch.js" strategy="beforeInteractive" />
```
