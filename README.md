
# Checkl

The problem you have some procedures, non automated or partially automated that needs to re run on multiple environments by different people.

The content of the procedure : 

 - in markdown quiet easy to write with some "code blocks" 
 - to reduce errors it's great if the content is "personnalised/instantiated" with some pre filled commands or urls
 - based on some values show hide some sections of the markdown (if source version is greater than x.y.z, current hosting is on heroku/aws/vps, current dns provider is gandi/ovh/aws/...)

Ok stop the blabla show me one

- the initial procedure is written as a gist (public or secret) or as markdown in a repo, now let's say it's an upgrade procedure of server that implies some automation but also coordination of the tests, multiple incremental
- now show me procedure 
   - to upgrade from 2.20 to 2.37 for a given server : [here it is](https://mestachs.github.io/checkl/?gist=351a326b75d04d23ad05c0a23909ccf6&params.sourceDhis2Url=https://dhis2.play.org&params.startVersion=2.20&params.endVersion=2.37&params.hide=false&mode=r)
   - to upgrade from 2.30 to 2.37 for a given server : [here it is](https://mestachs.github.io/checkl/?gist=351a326b75d04d23ad05c0a23909ccf6&params.sourceDhis2Url=https://dhis2.play.org&params.startVersion=2.30&params.endVersion=2.37&params.hide=false&mode=r)
   - to upgrade from 2.31 to 2.37 for a given server : [here it is](https://mestachs.github.io/checkl/?gist=351a326b75d04d23ad05c0a23909ccf6&params.sourceDhis2Url=https://dhis2.play.org&params.startVersion=2.31&params.endVersion=2.37&params.hide=false&mode=r)


so provide following query params
 - `gist` with the url or id of the gist
 - `params.PARAM_NAME` with value to substitute in the markdown : {{PARAM_NAME}}
 - the markdown can contains some sort of logic
```
{{#if (or 
        (eq section1 "foo")
        (ne section2 "bar"))}}
my markdown content
{{/if}}

```


TODO
  - add params in url for markdown in repository (only available for gist)
  - add support for private repo ( let's hope I'll don't need a backend)
  - offer a better editor than a textarea ;)
  - add some localstorage to store your latest tasks