# Feed Reader Testing Project

Front-End Web Developer Nanodegree Course Sixth Project [Udacity](https://udacity.com)

In this project, we wrote a number of test for an excisting application with [Jasmine](http://jasmine.github.io/)

-----------------------------------------

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

---------------------------------------------

## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

-------------------------------------------------

## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

----------------------------------------------

# How I completed this project?

- The test code are written in jasmine/spec/feedreader.js 
- 'RSS Feed: has URL' create a loop using allFeeds length and ensures it has Url defined and the URL is not empty.
- 'RSS Feed: has name' create a loop using allFeeds length and ensures it has name is defined and not empty.
- 'Menu: is hidden by default' ensures the menu-hidden class is hidden by default.
- 'Menu: changes visibility' ensures by clicking the menu icon so that the menu hidden class is true or false by clicking it again.
- 'Initial Entries: has .entry in .feed after loading' ensures whether the loadFeed is called and after loading, there is atleast one .entry in the feed container.
- 'New Feed Selection: new feed is loaded' ensures that the new feed is loaded in the html and by the loadFeed function the content changes.

-----------------------------------------------

### How to run this application

1. Download the repository [Feed Reader Test Project](https://github.com/renurevzranju/feedreader) to your Desktop

2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080

-----------------------------------------------

###License

this project is licensed under the [MIT License](license.txt)

-------------------------------------------
