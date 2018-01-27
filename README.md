# dicomWebViewer
DICOM web viewer

### To Build for the Client

It is possible to build this standalone viewer to run as a client-only bundle of HTML, JavaScript, and CSS.

1. First, install [meteor-build-client](https://github.com/frozeman/meteor-build-client).

```bash
npm install -g meteor-build-client
````

2. Next, build the client bundle into an output folder ("myOutputFolder") with a base URL ("localhost:3000"). In production, this would be the URL where the Viewer is available.

````
meteor-build-client ../myOutputFolder -p "" -u localhost:3000 -s ./config/public.json
````


3. Config nginx,  http://localhost:3000/ to myOutputFolder, http://localhost:3000/data to private/testData test the bundled client-side package locally.

Open your web browser and navigate to http://localhost:3000/?url=http://localhost:3000/data/sampleJPEG.json or http://localhost:3000/?url=http://localhost:3000/data/sampleDICOM.json

Note: Right now there is a bug in meteor-build-client (https://github.com/frozeman/meteor-build-client/issues/34) which produces two CSS files instead of one. Since this second CSS file is not included properly, the page will appear broken. To fix this, all you have to do is open index.html and add the following at the top of the page.

````html
<link rel="stylesheet" type="text/css" class="__meteor-css__" href="/[whatever your missing CSS filename is].css?meteor_css_resource=true">
````