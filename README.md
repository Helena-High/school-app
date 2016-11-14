# school_app
The Helena High School app

## Local Setup

### Using github

#### Windows
- Install git bash if needed

##### Git bash tips and tricks
The Git bash uses a unix file system so the following commands are useful
- `cd <dir>` navigates into `<dir>`
- `cd ..` navigates out a directory
- `ls` lists the files in the current directory
- `rm <file>` deletes a file
- `rm -rf <dir>` recursively deletes a directory

##### Forking the Repo

1. Click Fork
- If prompted click your username
2. Click the `clone or download` button and copy the text
3. On your computer open git bash navigate to the desired location to clone
4. `git clone <paste text here>`
- Note: to paste right click and select paste
5. `cd school-app`
6. `git remote add upstream https://github.com/Helena-High/school-app.git`
7. `git pull upstream master`

##### Keeping up to date with Helena-High

To pull the new changes: 
1. Open the git bash program
2. Navigate to the school-app directory
3. `git pull upstream master`

##### Making a new branch

Branches should be used when making a change. To create a branch:
1. Open the git bash program
2. Navigate to the school-app directory
3. `git checkout master`
4. `git pull upstream master`
5. `git checkout -b <name of branch>`

##### Committing staged changes:

A commit should be added anytime you successfully make a change that you may want to go back to later
1. Open the git bash program
2. Navigate to the school-app directory
3. `git status`
- Note: this should show every file you have changed in red
4. `git add <file or directory to add>`
- Note: this command will stage all files in the directory for a commit. If you want to add everything in your present working directory `git add .`
5. `git status`
- Note: this should show every file you have changed that you want to commit as green. Files you don't want to commit should be red still.
6. `git commit -m "<Commit Message>"`

##### Pushing changes:

After you have committed everything that you would like to push:
1. Open the git bash program
2. Navigate to the school-app directory
3. `git push`
- Note: If prompted type in your github username and password
- Note: If it says: `git push --set-upstream origin <your branch name>` copy and paste the command and hit enter.

##### Making a Pull Request:

After you have pushed the change you would like to Pull Request:

1. Navigate to `https://github.com/Helena-High/school-app`
2. Click the pull request button
3. Type:
    ### Changes:

    - <Change you made, for every change you made>

    ### Please Review:
    @busmith @Kuroshii @AAckerlund @sagesmith-wf @bradbenjamin-wf
4. Click the create pull request button
5. Wait for someone to with the authority (@busmith, @Kuroshii, @sagersmith8, @sagesmith-wf @bradbenjamin-wf) to merge your pull request
- Note never hit the merge button, unless you have been given permission by @busmith

##### Common issues and errors

- It says I need to commit or stash local changes before I can pull? If you want the changes you have made, commit the changes. If you don't want the changes type `git stash`
- It came to a weird screen with a bunch of blue ~ signs and I can't do anything. You are using the vi editor, type `:q` and it should exit. If that doesn't work then you are probably in insert mode and you should hit `esc` and then type `:q`
- It says my changes are up to date? Your changes are up to date, stop trying to pull new changes
- It says I have a merge conflict? This could be tricky, I would ask for help
- It says something about my branch being behind? Type `git pull upstream master`

If none of these applied ask for help.
