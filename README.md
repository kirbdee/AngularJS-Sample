AngularJS-Sample
================

Live Sample : http://kirbdees-angularjs-sample.herokuapp.com/

Goal instructions: https://drive.google.com/file/d/0BwF3T26v8lFnN1FmTEEwSGJqelU/edit?usp=sharing

User json file: https://drive.google.com/file/d/0BwF3T26v8lFnQUYtV3dJeVE5T3M/edit?usp=sharing

Logs json file: https://drive.google.com/file/d/0BwF3T26v8lFnWXFKbExRSkl1dk0/edit?usp=sharing

Sample Mockup: https://drive.google.com/file/d/0BwF3T26v8lFnZkFVSWJ5czEtU2s/edit?usp=sharing

Instructions to run:
Download and Unzip
In the terminal cd in to the unzipped file
Once in run with the command (Assuming you have grunt installed) 'grunt serve' this will launch a local server and run that App

Notes/Challenges:
- Noticed some of the urls for the avatars are invalid or missing added onerror attribtue to help with this in the html
- I thought it would be pretty neat to use AngularJS for this app.
- I used bootstrap to help with styling and responsiveness.
- I used yeoman, bower, and grunt to help wiht the development.
- ChartJS and talking to the scoped data within angularJS was tricky but was able to figure that out. (though I feel there is -a better way to do it than what i've implemented). 
- I learned some new nuances about angular that I wasnt aware of before. such as the factory calls being deffered.
- I tried to use the SASS version of bootstrap but I wasn't able to get that configured properly (never worked with less or sass before).

The main files I worked with are:
- index.html
- main.html
- main.js
- users.js
- logs.js
- main.css
- server.js
