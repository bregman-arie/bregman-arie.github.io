---
layout: single
title:  "Flask + MongoDB Tutorial"
date:   2019-11-17
categories: flask mongo
toc: true
toc_label: "topics"
---

In this tutorial I’ll demonstrate how to use Flask together with MongoDB.

## Structure

We’ll use the following structure for our project

```
app/
    __init__.py        # Flask app
    database.py        # Main database class
    models/
        job.py         # Job DB model
    main/
        __init__.py
        routes.py      # Main page routes
    templates
        main.html      # Main page HTML template
requirements.txt       # Requirements for running the application
```

## Flask Mongo Libraries

There are several libraries which provide you with simple integration and convenience helpers when it comes to using Flask together with MongoDB.

Flask-PyMongo
Flask-MongoEngine
Flask-MongoAlchemy

For this tutorial purpose, we’ll use pymongo as it is, without any helper library.

## Create the Flask application

Let’s start by adding the code for creating the application.

`vi app/__init__.py`

```python
from flask import Flask

from app.database import DB


def create_app(config):
    app = Flask(__name__)
    DB.init()
    register_blueprints(app)
    return app


def register_blueprints(app):

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)
```

A pretty standard function for creating a Flask application. First, we create an instance of Flask, then we initialize the database (we’ll write the code for it in the next section) and finally, we register the blueprints, which allows users to access our app routes.

If you are not familiar with blueprints, I recommend reading about them here. Personally, I find the concept of blueprints very useful, especially when you build large applications.

## Add the database module

In order to connect to our database and run operations on it, we would want to have a generic module and class that we can use anywhere in our application code.

`vi app/database.py`

```python
import pymongo


class DB(object):

    URI = "mongodb://127.0.0.1:27017"

    @staticmethod
    def init():
        client = pymongo.MongoClient(DB.URI)
        DB.DATABASE = client['sample_app']

    @staticmethod
    def insert(collection, data):
        DB.DATABASE[collection].insert(data)

    @staticmethod
    def find_one(collection, query):
        return DB.DATABASE[collection].find_one(query)
```

We have two basic functions the class adds – insert and find_one. We will use these functions in order to search for documents in our collections and insert new documents.

Note: if your database is using a different port, change the URI accordingly.

## Add a Job Model

Now let’s create a model which represents our job. We will use his model for all the operations related to jobs collection in the database.

`vi app/models/job.py`

```python
import datetime

from app.database import DB


class Job(object):

    def __init__(self, name):
        self.name = name
        self.created_at = datetime.datetime.utcnow()

    def insert(self):
        if not DB.find_one("jobs", {"name": self.name}):
            DB.insert(collection='jobs', data=self.json())

    def json(self):
        return {
            'name': self.name,
            'created_at': self.created_at
        }
```

The first thing to note is that we import the DB class we created in the previous section. This is our connection to the database and we’ll use it for inserting and searching for jobs.

Next, our Jobs will have only two fields in the documents:

* name – self-explanatory

* created_at – datetime object which represents the date when the job was added to the database
The ‘insert’ method is the method responsible for inserting the job object into the database, using the ‘json’ method which returns a JSON representation of our object. Note it will only add the object if there is not already such job/document in the jobs collection.

## Add Jobs

Now that we have the ability to add some jobs, let’s modify our app creation function to add them once the user started the application

`vi app/__init__.py`

```python
from flask import Flask

from app.database import DB
from app.models.job import Job


def create_app(config):
    app = Flask(__name__)
    DB.init()
    register_blueprints(app)
    for job_name in ['job1', 'job2', 'job3']:
        new_job = Job(name=job_name)
        new_job.insert()
    return app


def register_blueprints(app):

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)
```

As you can see, we are adding three jobs to our database, using the names in the list. The ‘created_at’ attribute has a default value so we don’t need to pass it.

## Main Route

Remember we registered a blueprint called ‘main’ in app/__init__.py? Well, then it’s time to define it. Let’s start by adding app/main/__init__.py

```python
from flask import Blueprint

bp = Blueprint('main', __name__)

from app.main import routes  # noqa
```
As you can see we’ll define the routes in its own file in app/main/routes.py

```python
from flask import render_template

from app.main import bp  # noqa
from app.models.job import Job

@bp.route('/')
def index():
    """Main page route."""
    button_text = "Add Job"
    return render_template('main.html', button_text=button_text)


@bp.route('/add_job')
def add_job():
    """Adds job4 to the database."""
    new_job = Job(name='job4')
    new_job.insert()
    return ('', 204)
```

We defined two routes. First one (‘/’) is for users accessing our app. The only thing this route does is to render the main.html template which we will define in the next section. Every time a user will access our app this way http://x.x.x.x:5000/the main.html will be rendered and displayed to the user in its browser.

The second route (‘/add_job’) will be used to add a job named ‘job4’ when a user clicks on the button we’ll define in the ‘main.html’ template.

## Main HTML template

Our main page will be very simple and will include only one simple button with the text “Add Job” on it.

```
<a id=link><button type="button" class="btn btn-info">{{ button_text }}</button></a>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type=text/javascript>
        $(function() {
          $('a#link').bind('click', function() {
            $.getJSON('/add_job',
                function(data) {
            });
            return false;
          });
        });
</script>
```

This template will be rendered the moment the user access our app.

The jquery javascript code is used whenever the user clicks on the button to add a job. It will use the second route we defined for adding the job named ‘job4’.

A question for you to answer: will clicking multiple times on “Add Job” button will add multiple documents of “job4”?

## Install requirements

Finally, don’t forget to set up the requirements for running the app successfully

`vi requirements.txt`

```
flask
pymongo
```

## Run the application!
That’s it. Perhaps you have the simplest app ever created but it’s a start!

Now all you need to do is to install the requirements and run the app. From the app root directory run the following

```
virtualenv ~/app_venv && source ~/app_venv/bin/activate
pip install -r requirements.txt
flask run
```

That’s it. Your app is running! you should see in the terminal similar output to the following

```
* Environment: production
  WARNING: Do not use the development server in a production environment.
  Use a production WSGI server instead.
* Debug mode: off
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
Going to 127.0.0.1:5000 in the browser, you should see a button with “add job” string. Clicking on it, will add
```

You can verify it with mongo shell the following way

```
> use sample_app
switched to db sample_app
> db.jobs.find({})
{ "_id" : ObjectId("5c9218017c58a975d123ff8d"), "name" : "job1", "created_date" : ISODate("2019-03-20T10:37:53.353Z") }
{ "_id" : ObjectId("5c9218017c58a975d123ff8e"), "name" : "job2", "created_date" : ISODate("2019-03-20T10:37:53.382Z") }
{ "_id" : ObjectId("5c9218017c58a975d123ff8f"), "name" : "job3", "created_date" : ISODate("2019-03-20T10:37:53.383Z") }
{ "_id" : ObjectId("5c9218067c58a975d123ff90"), "name" : "job4", "created_date" : ISODate("2019-03-20T10:37:58.411Z") }
```

## Few Notes

* This is one of many possible structures. I usually prefer this one but it doesn’t mean you can’t use a different structure (e.g. skip using blueprints for no good reason :] )

* A proper project would include several additional files for distributing the project, CLI support, static properties, etc. There are many great projects in GitHub demonstrating this.

* You can find all the code snippets in this post in my [flask-examples](https://github.com/bregman-arie/flask-examples) repository
