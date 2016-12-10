/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    var allFeedsLength = allFeeds.length,
    body = $('body'),
    feed;
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Url for allFeeds are defined', function() {
            /*Since there are four url in the allFeeds, we create a loop using
            the allFeeds length so that we will know whether the url are
            defined and it has url for each feeds*/
            for(var i = 0; i < allFeedsLength ; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeedsLength[i]).not.toBe(0);
            }
         });
         
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name for allFeeds are define', function() {
            /*Since there are four name in the allFeeds, we create a loop using
            the allFeeds length so that we will know whether the url are
            defined and it has name for each feeds*/
            for(var j = 0; j < allFeedsLength; j++){
                expect(allFeeds[j].name).toBeDefined();
                expect(allFeedsLength[j]).not.toBe(0);
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hidden by default', function() {
            /*the menu is hidden by default and it is in the menu-hidden class*/
            expect(body.hasClass('menu-hidden')).toEqual(true);
          });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Changes visibility when clicking the menu icon', function() {
            $('.menu-icon-link').trigger('click');
            //while the icon is clicked a class named 'menu-hidden' disappears in body
            expect(body.hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            //while the icon is clicked again a new class 'menu-hidden' appears in body
            expect(body.hasClass('menu-hidden')).toBe(true);
          });
      });
    /* TODO: Write a new test suite named "Initial Entries" */
        describe('Initial Entries', function() {
        /* First we call a function to do an async request.
         * This way we ensure that data is loaded before we can test the results.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* When we have alreaded loaded the function, we test to ensure that
         * the loadFeed function has at least a single .entry article within
         * the .feed container, ones completed its work.
         */
        it('has an articles in the feed container', function (done) {
            var entry = $('.feed .entry')[0];
            expect(entry).not.toBe(0);
            done();
        });
     });
    /* TODO: Write a new test suite named "New Feed Selection"*/
        describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function (done) {
            /*This test ensures that the new feed is loaded in the html*/
            loadFeed(0, function () {
                feed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('is loaded and the content actually changes', function() {
            expect($('.feed').html()).not.toEqual(feed);
        });
     });
}());
