
Meme boothinator
----------------

Meme booth is a service for creating and easily sharing "meme pics" based on real pics you take. You can also use it for example as selfie booth or red carpet cam with just minor modifications.


![Prototype of Meme booth](setupImages/proto.jpg?raw=true)
![Setting up Meme booth](setupImages/asennus.jpg?raw=true)
![View from Meme booth](setupImages/empty.jpg?raw=true)

Meme booth was originally developed for the #snapshot exhibition by the Finnish Museum of Photography. It's easily adaptable for other purposes, such as:

- selfie booth
- welcome on board -camera
- party -camera
- red carpet -camera
- example on on how to set up project to productions

We have an online [demo](http://try-memebooth.herokuapp.com/)! Try making a meme yourself.

Check out Usage ideas

Requirements
------------

- Camera
- Display
- Launch mechanism (some kind of button or keyboard)
- Computer
- Casing (optional)

The minimal setup is any laptop with a web camera, that runs a modern browser. See Exhibition Setup chapter for what we built!

Usage ideas
-----------

Originally meme booth was created as a part of an interactive experience at the #snapshot exhibition. The idea of the whole work was to give visitors an experience on what happens to your images in social media and in the internet. Memeboot particular tried to introduce the concept of memes to visitors and explain that every image may become a meme. Images taken with memebooth were send straight to twitter (see @snapshotNowMeme).

We also used it at our huge office party, to allow people to snap a visual memento of the occasion. The idea was to lift the party spirit with it.

We'd like to see this used in schools, institutions and wherever you find a use for it! Not by the NSA. Chancing memes texts to logos or other icons you can modify meme booth to many different kind of purposes.

All you need is a laptop and a few hours - or you could make it a bit more ambitious school project,
encompassing some design, programming and manufacturing elements.

See our idea for School Box for a reference.

School Box
----------
This is not your average school project. Imagine the joy in the children's faces when they get their own meme booth running and start creating their own memes. The Internet culture is spreading everywhere and because of that, this an interesting project that the kids will surely be into.

The school project would ideally have two phases. First the students would need to build the actual physical booth. This phase could be a great joint project for example with the woodworking class. The second phase is installing and setting up the software.

The booth will be password protected by default so you don't have to worry about it being misused by the students.

Beware that for some parts of the application (AWS and Heroku) you have to give your credit card information, so make sure there is one available before starting the project. If you feel uncomfortable in including students in a project involving credit cards, you can of course install the software yourself and just allow the students to access it via the browser. In that case however, how to set up a web application will still remain a mystery to the students.

Technology used
---------------
Meme booth was build using node.js with express. The metadata of the images was saved to mongodb. In the frontend libraries like bacon.js, hogan, webcam.js should be mentioned. The images taken were saved to Amazons S3 and the software was pushed to heroku and as a database we had the heroku add-on mongolab.

SW setup instructions
---------------------

#### Installations

You need to have [Node.js](http://nodejs.org/) and [git](http://git-scm.com/) installed on your local machine.

#### GitHub

First register to GitHub.

After registering, fork the project from this page to your own GitHub account. You can find more information about what forking really is from [here](https://help.github.com/articles/fork-a-repo/).

Then clone the forked project to your own machine. You 	an find help for cloning a project from [here](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork).

Next up is to set up all the external services that the application uses.

#### Heroku

Register to [Heroku](https://www.heroku.com/).

Follow instructions on setting the application up on heroku from [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

For your own configurations, you have to set environment variables for the application. You can do this easily in your application's dashboard. You can find more information about setting environment variables in Heroku from [here](https://devcenter.heroku.com/articles/config-vars).

Set a username and a password for your application. You have to set two environment variables for that:

- `USERNAME`: Your username
- `PASSWORD`: Your password

#### Database

We recommend that you use the MongoLab add-on in Heroku to store the data. MongoLab provides an easy set up and good monitoring for the database. You can find more information about setting up MongoLab from [here](https://devcenter.heroku.com/articles/mongoLab).

You have to set an url for MongoLab to your applications environment variables:

- `MONGOLAB_URI`: MongoLab url

#### Amazon S3

Amazon S3 is used to store the static files in the application. For the connection, memebooth uses the [Knox](https://www.npmjs.org/package/knox) client.

Amazon offers a free tier to be used for a year and you can register for it [here](http://aws.amazon.com/).

After registering to the service, you have to obtain the necessary keys and tokens for membooth to be able to connect to AWS (Amazon Web Services). You can find information about where to obtain the keys from [here](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).

You also have to create a bucket for your S3 instance. You can find more information about creating a bucket from [here](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html).

You have to set three environment variables for your application:

- `KNOX_KEY`: S3 key
- `KNOX_SECRET`: S3 secret
- `KNOX_BUCKET`: Bucket's name, which was created previously

#### Twitter

It's also possible to publish your memes to Twitter automatically.

First you have to create an account for Twitter. You have to get API keys and tokens for the application so that it's authorized to post to Twitter.

You have to add four environment variables for your application:

- `TWITTER_CONSUMER_KEY`: Consumer key
- `TWITTER_CONSUMER_SECRET`: Consumer secret
- `TWITTER_TOKEN`: Token
- `TWITTER_TOKEN_SECRET`: Token secret

#### Running the application locally

Install the dependancies locally by running the command: `npm install`

Create a file called `.env` where you can store your local environment variables. An example of the file looks like this:
```
KNOX_KEY=your_s3_key
KNOX_SECRET=your_s3_secret
KNOX_BUCKET=your_bucket
TWITTER_CONSUMER_KEY=your_twitter_consumer_key
TWITTER_CONSUMER_SECRET=your_twitter_consumer_secret
TWITTER_TOKEN=your_twitter_token
TWITTER_TOKEN_SECRET=your_twitter_token_secret
USERNAME=your_username
PASSWORD=your_password
MONGOLAB_URI=your_mongolab_uri
```

Then you can run the application with the command:
`foreman start`

#### Deploying the application to Heroku

If you have followed the heroku options in the instruction, you should have everything set up correctly. Now you can deploy the application with the command: `git push heroku master`.

You will still have to increase your Heroku dynos so that the application will run. You can change the amount of dynos from your Heroku applications dahsboard easily or by running the command: `heroku ps:scale web=1`.

The URL's for the site:

- `/filter` which will show the camera with the meme filters
- `/memes` which will list the taken memes
- `/` which will show the camera
- `/photos` which will list the taken photos

If you run into some problems during the installation, don't hesitate to contact us at spice@futurice.com.

If you encounter a problem and find a solution for it, please submit a pull request describing the problem and the solution.

Contact
-------

You can contact us by email at spice@futurice.com

If you want to now more about the #snapshot-exhibition, you can contact Risto Sarvas by email at risto.sarvas@futurice.com
