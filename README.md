# Rafael Jr. Canalda — cybersecurity portfolio

Personal portfolio built with React, Vite and Tailwind CSS, deployed on Vercel.

## Updating content

Everything shown on the site (competitions, certifications, events, skills, projects, contact links) lives in
`src/data/profile.js`. Add a new CTF result or certificate there and drop its image in `src/assets/images/`.

To show the email button, set `email` in the `person` object.

## Running locally

```bash
npm install
npm run dev
```

`npm run build` creates the production build in `dist/`.
