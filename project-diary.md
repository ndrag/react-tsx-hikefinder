# Project Diary

A very basic diary with daily progress notes against my first Typescript, React, SASSm and Node.js client-server application. Three days in and it's pretty clear any one of these components would take months to learn in isolation, but overloading yourself is half the fun! If you can pick up a file with boilerplate relating to multiple libraries, frameworks, paradigms, and languages, all stacked on top of each other, you're learning!

## 02/05/2020

* I began by researching cpanel & node integration again. it looks like it's workable if I can SSH in, but it might still be a pain! Give it a go, it'll be much better learning than jumping straight to Heroku or similar. There are easier, more modern options for sure, but they're a bit too streamlined for the sort of learning I'm looking for... Had a go at PuTTY for the SSH component.

* Refactored the template I'm using for Penzy's site. I'll now be using the client/server folder setup that the MySQL demo used, as the initial template is locked into a simpler structure. I could refactor webpack to deal with a new folder structure, but that would mean ejecting and spending a good while figuring out the nuances of that technology - a rabbit hole worth avoiding for the moment.

* Looked into Typescript, React, ReactDom, and using everything together. Lots of learning around Typescript interfaces, passing them into things, defining them, what React requires in functional and class components, hooks vs. class state, so forth. Jogged a lot of memories, made a lot of Enterprise code in Abley projects I don't normally touch make sense - spent hours trolling through those and their commit histories.

* Looked into webpack a bit too - the webpack config files in the MySQL intergation template are an asset because they're very readable and make it clear how everything's compiled. Moved some components and made new ones; migrating the demo components from the old project to the new one. Realised it's all a very simple tree structure, really. Imports and dependencies reduce down to a navigable tree that Typescript can parse & traverse.

* Looked into SASS - there's got to be a bit around how sass should be structured; it's clearly not just one file. Presumably a main or index.scss that contain references to everything, and that's imported by app.tsx or index.tsx. Clearly need an overwrite file for each lib (bootstrap etc), a core settings file where I declare $vars (much like a gobal config) and a page-specific (although it's a single page app...) generic scss file for class styling.

## 05/05/2020

* The goal today was to organise hosting for the API. Attempts to get Node.js up and running on CPanel failed - an SSH attempt gave me the following message: 'Sorry, SSH access isn't enabled for your account! Contact customer support to enable it.'. I was informed by customer support that SSH is actually disabled for everyone, with no wriggle room. There goes that plan...

* Began looking at alternatives. Moving my entire domain to an SSH/Node friendly provider makes sense, but there's overhead there I'd rather put towards something useful. Instead I compared a set of cloud-based hosts and settled on Heroku, which looked cheap (free at first), modern, and theoretically easy to set up. It would also enable me to host future Django and Flask projects I have planned.

* Unfortunately, deploying to a Heroku project or repository involves Git and a custom build process. This would be easy to set up if my server were in its own repo, but it isn't - the bundled build process completely threw the Heroku CLI loader.

* For now, I've added a package.json and Procfile to the dist folder, and set that up as Heroku-only (no GitHub integration) git repo. Once the build is completed in the parent directory, a basic Git workflow in ./dist allows for the successful 'build' and deployment of our pre-generated server.js file.

* This required a new solution for secrets (database connection strings, largely), which had previously been stored in an untracked local config file. Heroku supports environment variables against a project, so I decided to use that system in production and discovered the 'dotenv' package for local development. This required two things: importing the library in my local environment only (because it's a dev dependency and would error out in production), and ensuring TypeScript played nice with the imported .env variables. The first was solved with a new Heroku-based 'environment' variable, and the second by casting the implicitly string 'port' variable to a number.

* Note that environment variables are no longer considered best form, but given Heroku's support of that system it seemed to make the most sense for a project of this size & importance.

* That's it then! A bit of work and a solution that isn't ideal, particularly in terms of CI/CD - I'll need to smarted up the Heroku deployment process, at the very least - but it does the job; my API breathes!

