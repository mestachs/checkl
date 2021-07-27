
# Checkl

## The problem 

The problem you have some procedures, non automated or partially automated that needs to re run on multiple environments by different people.

The content of the procedure : 

 - in markdown quiet easy to write with some "code blocks" 
 - to reduce errors it's great if the content is "personnalised/instantiated" with some pre filled commands or urls
 - based on some values show hide some sections of the markdown (if source version is greater than x.y.z, current hosting is on heroku/aws/vps, current dns provider is gandi/ovh/aws/...)
 - embed some infrastructure diagram or flow chart via mermaid or plantum like [here](https://mestachs.github.io/checkl/?gist=https://gist.github.com/mestachs/068e3fd98e205db9e78ef3b1c63f4adc)

## The solution

Ok stop the blabla show me one

- the initial procedure is written as a gist (public or secret) or as markdown in a repo, now let's say it's an upgrade procedure of server that implies some automation but also coordination of the tests
- now show me procedure 
   - the "source" template is 
   - to upgrade from 2.20 to 2.37 for a given server : [here it is](https://mestachs.github.io/checkl/?gist=351a326b75d04d23ad05c0a23909ccf6&params.sourceDhis2Url=https://dhis2.play.org&params.startVersion=2.20&params.endVersion=2.37&params.hide=false&mode=r)
   - to upgrade from 2.30 to 2.37 for a given server : [here it is](https://mestachs.github.io/checkl/?gist=351a326b75d04d23ad05c0a23909ccf6&params.sourceDhis2Url=https://dhis2.play.org&params.startVersion=2.30&params.endVersion=2.37&params.hide=false&mode=r)
   - to upgrade from 2.31 to 2.37 for a given server : [here it is](https://mestachs.github.io/checkl/?gist=351a326b75d04d23ad05c0a23909ccf6&params.sourceDhis2Url=https://dhis2.play.org&params.startVersion=2.31&params.endVersion=2.37&params.hide=false&mode=r)
- other example : your monitoring check send you a link to a [procedure](https://mestachs.github.io/checkl/?gist=ae9a59f811db50062ac62a36a7a37d93&params.slackChannel=ops-client1&params.emailClient=badnews@forClient.com&params.server=server-dhis2-ops.com&mode=r) with url, contact infos,...


So you can provide the following query params
 - `gist` with the url or id of the gist OR `markdown` with url to a repo (public or private
 - `params.PARAM_NAME` with value to substitute in the markdown : {{PARAM_NAME}}
 - the markdown can contains some sort of logic like below

```
{{#if (or 
        (eq section1 "foo")
        (ne section2 "bar"))}}
my markdown content
{{/if}}


{{#if (gte "2.28" startVersion)}}
# from 2.28 to 2.29

... other content

{{/if}}

```


# More

## Roadmap

  - [x] Table of content and [navigation](https://mestachs.github.io/checkl/?gist=https://gist.github.com/mestachs/6e8ee2bae9e5c8322e0755486128a444&mode=r#test-second-first-first)
  - [x] add params in url for markdown in repository (only available for gist)
  - [x] add support for private repo ( let's hope I'll don't need a backend)
  - [x] add mermaid and plantuml support
  - [ ] add support for live editing for mermaid/plantuml
  - [ ] Make the code way much nicer (nearly in a single file)
  - [ ] offer a better editor than a textarea and allow to save to github
  - [ ] add some localstorage to store your latest checklist ?


## Research
  - Runbooks : https://twitter.com/mestachs/status/1416370635333382144?s=20
  - https://about.gitlab.com/handbook/engineering/security/security-engineering-and-research/application-security/runbooks/threat-modeling.html
  - https://about.gitlab.com/handbook/about/on-call/
