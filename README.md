# Rafael Jr. Canalda — cybersecurity portfolio

Personal portfolio built with React, Vite and Tailwind CSS, deployed on Vercel. The page reads like a case file,
with sections following the phases of a penetration test and ending with the resume.

## Updating content

Everything on the site (about text, skills, competitions, certifications, events, projects, contact links) lives in
`src/data/profile.js`. Add a new CTF result or certificate there and drop its image in `src/assets/images/`.

Each skill in the skills table lists where it was proven: `verified` for a certificate, `applied` for a
competition, project or job.

## Resume

The resume source is `resume/resume.html`. After editing it, regenerate the PDF the site links to:

```bash
google-chrome --headless --no-pdf-header-footer --print-to-pdf=public/Rafael-Canalda-Resume.pdf "file://$PWD/resume/resume.html"
```

Then update the preview image in `src/assets/images/resume-preview.webp` if the first page changed noticeably.

The public resume deliberately leaves out the phone number, since anything in `public/` can be downloaded by anyone.

## Running locally

```bash
npm install
npm run dev
```

`npm run build` creates the production build in `dist/`.
