# Stack Overflow spanish theme for jsonresume [![npm version](https://badge.fury.io/js/jsonresume-theme-stackoverflow.svg)](http://badge.fury.io/js/jsonresume-theme-stackoverflow)

[Fork of main Stack Overflow Theme](https://github.com/francescoes/jsonresume-theme-stackoverflow.git)

This is my version of theme (with little modifications), not all translated but functional for me and you can use.

**Printable version with custom CSS**

[DEMO](https://resume.juanretamales.cl/)

## Getting started

### Install the command line

Create your resume in json on [jsonresume](https://jsonresume.org)

The official [resume-cli](https://github.com/jsonresume/resume-cli) to run the development server.

Go ahead and install it:

```
npm install -g resume-cli
```

### Install and serve theme

Clone the repository

```
git clone https://github.com/juanretamales/jsonresume-theme-stackoverflow-es.git
```

Create a 'resume.json' file in the current folder and follow the [json resume schema](https://jsonresume.org/schema/)

Install dependencies:

```
npm install
```

and simply run:

```
resume serve --theme .
```

### Social Profiles Icons

**Profiles supported with brand colors:**

Please note that all the [Font awesome brands icons](https://fontawesome.com/search?s=brands) are supported. Although only the ones listed below have a color code associated with it in my CSS file:

github, stack-overflow, linkedin, dribbble, twitter, facebook, pinterest, instagram, soundcloud, wordpress, youtube, flickr, google plus, tumblr, foursquare.

To have a social icon close the social link profile (or username) it is enough to set a `network` the name of the Social Network (es: 'Stack Overflow'). I am replacing spaces with dashes (`-`) and transforming all the network name to all lowercase to match the Font awesome naming convention for brands icons.

#### Support to extra fields

With stackoverflow theme it is possible to add:

- `keywords` to each 'work', 'publication' and 'volunteer' item
- `summary` to each 'interests' and 'education' item
- `birth` to 'basics' (might be commonly used in Europe)

example of the extra `birth` object:

```
"birth": {
  "place": "New York",
  "state": "USA",
  "date": "1988"
}
```

if in meta you has askforfullresume on true, add a field on end of resume
```
"meta": {
    "askforfullresume": true
},
```

## Utilities

[Resume Builder](https://resume-builder.js.org/es/): You can create a big json and then, disabled unused fields for have two resume. Long with all history and short for job search.

[JSONResume Editor](https://marketplace.visualstudio.com/items?itemName=reflog.jsonresume): If you use VSCode, can use an Extension for Visual Studio Code - JSONResume Editor let's you preview your resume from inside VSCode.

## Contribution

Fork the project, add your feature (or fix your bug) and open a pull request OR

[Open an issue](https://github.com/francescoes/jsonresume-theme-stackoverflow/issues/new) if you find find or if you would like to have extra fields or changes 

## License

Available under the [MIT license](http://opensource.org/licenses/mit-license.php).
