**Clientbase v4**

About project
As a part of the collaboration team I would like to announce you that our small API automation testing project is starting.
I was inspired to create a new repository for our project where we can store the tests we create together.
It will be a good practice to improve your REST API automated testing skills.

All of you are already well familiar with "CB_CRM_moduleX4" itself in its various versions.
Please read the information below carefully on how to work with our project.
I have provided some examples of REST API requests that should be used for the written test at the very beginning.


**Project setup:**
Please clone this project into your IDE.
Once you download this project to your local machine please do not forget to create your own branch and work within it.
Personal branches and files should be named according to naming policy (see below)
About the architecture:
    - there are three main directories called 'config', 'helpers, and 'tests'
    - files with global hooks should be placed in config directory
    - files which classes should be placed in helpers directory
    - tests files should be placed in tests directory and contains unit-tests

Rename .env.example file into .env. Edit data in this file to correct ones (we are using out test data - business owner).
All necessary npm are already installed. If you think our project is desperate in another package,
please do not hesitate to contact me and share your thoughts about the package
that may improve our project and make our coding life easier.


Route names with examples:

/v4/users/login
Being called with email/password credentials and returns authorization token in response.

/v4/users
Being called with a particular body request and the next actions with the User has to be done:
creation/searching.

etc

Please do not forget to name your commits properly.
All pull requests will be checked for conflicts and only then merged to the main branch.
The Main branch updates will be declared in the slack channel.
Please be in connection with your teammates.

I wish you a happy coding which is not only a happy path... lol
