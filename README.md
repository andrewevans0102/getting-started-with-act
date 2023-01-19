# Getting Started with Act

This is my companion project to my upcoming post called `Getting Started with Act` on LogRocket's blog. The post is on how to run GitHub actions locally with Act, to learn more check out their [GitHub Repo](https://github.com/nektos/act).

The pipeline with the GitHub action in this repo is necessarily small, it only has three jobs:
1. build 
    - does the necessary npm installs
    - builds the project
2. test
    - runs the projects test (App.test.tsx)
3. deploy
    - attempts to deploy to Netlify
    - note I had a few issues with Netlify connecting it to the project when I was working with this
    - if you want to attempt to deploy to netlify, I recommend checking out the GitHub action's docs at https://github.com/marketplace/actions/netlify-deploy

Some sample commands that I ran with Act locally include:

```bash
# List all the actions in your YAML file
act -l

# List actions for a specific event (here the event is push)
act push -l

# Get Act to run the workflow as if a specific push to master event occured
act push

# Get Act to run a specific job
act -j test

# pass secrets into a job so that the GitHub action can consume them
act -s MY_TOKEN_SECRET=<token> -s MY_NETLIFY_SITE_ID=<site_id> 

# run a GitHub action that uses artifacts between jobs
act --artifact-server-path /tmp/artifacts push
```

If you want to store artifacts between jobs, you have to specify a path for the artifact server. This is because when you run GitHub Actions, the GitHub Api's store the artifacts on their servers during runs. When you run locally, you do not have the GitHub servers and have to specify a place in your local docker container to store artifacts. This is why the command looks like:
```bash
# run a GitHub action that uses artifacts between jobs
act --artifact-server-path /tmp/artifacts push
```

If you want to pass secrets that you use in your jobs, pass them direclty in the command line like the following:
```bash
act -s MY_SECRET=<first_secret> push 
```

The Act GitHub repo has significantly more detail than I've provided here, I recommend checking out the section on sample commands for more at https://github.com/nektos/act#example-commands.