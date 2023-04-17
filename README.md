# USC Final Project of Team 3

## Git Operations Before open a PR to `dev`:

1. You should first make sure that current work branch is your `personal branch`:
```
git branch --show-current
```
or use tools such as GitHub Desktop, VSCode to check.

2. Commit any uncommitted changes in your local branch:
```
git add .
git commit -a -m "Your commit message"
```
or use tools such as GitHub Desktop, VSCode to commit & push.

3. Fetch changes from all remote branches:
```
git fetch
```

4. Merge the changes from the `dev` branch into your current branch:
```
git merge origin/dev
``` 

5. Push your updated current branch to the remote repository:
```
git push
```

## Pre-requisites on local machine
Nodejs with npm installed

## Usage

### 1. `cd` into project directory:
```
npm i
npm start
```

### 2. open url: http://localhost:3000/

## Logistics:

### API Docs:
https://developers.themoviedb.org/3/getting-started/introduction

https://developers.themoviedb.org/4/getting-started/authorization

### API Key (v3 auth)
```
2f39ac8abf607fbbc583ce393c0f56f3
```
#### Example API Request
```
https://api.themoviedb.org/3/trending/movie/week?&api_key=2f39ac8abf607fbbc583ce393c0f56f3
https://api.themoviedb.org/3/configuration?api_key=2f39ac8abf607fbbc583ce393c0f56f3

```

### Image Address Example
```
http://image.tmdb.org/t/p/w500/bPVqWiVxjXDzJOfvwGVyDOUydH5.jpg
https://image.tmdb.org/t/p/original/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg
```

### API Read Access Token (v4 auth):
```
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjM5YWM4YWJmNjA3ZmJiYzU4M2NlMzkzYzBmNTZmMyIsInN1YiI6IjY0MThiYWRiZmU1YzkxMDA4M2JkZTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPutmKSJJHTp8AxSAPJQcFq6JSCvcgUZTR3C7DDftSA
```