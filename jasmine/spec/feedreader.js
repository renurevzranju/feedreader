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


        /*Since there are four url in the allFeeds, we create a loop using
            the allFeeds length so that we will know whether the url are
            defined and it has url for each feeds*/
         it('Url for allFeeds are defined', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });
         
         /*Since there are four name in the allFeeds, we create a loop using
            the allFeeds length so that we will know whether the url are
            defined and it has name for each feeds*/
         it('name for allFeeds are define', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe('The menu', function(){
        /*the menu is hidden by default and it is in the menu-hidden class*/
        it('hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toEqual(true);
          });
         /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
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
    
        describe('Initial Entries', function() {
        /* First we call a function to do an async request.
         * This way we ensure that data is loaded before we can test the results.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* When we have alreaded loaded the function, we test to ensure that
         * the loadFeed function has at least a single .entry article within
         * the .feed container, ones completed its work.
         */
        it('has an articles in the feed container', function () {
            var entry = $('.feed .entry');
            expect(entry.length).not.toBe(0);
        });
     });
    
        describe('New Feed Selection', function() {
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
