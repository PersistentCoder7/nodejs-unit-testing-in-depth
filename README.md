
# [Node.js Unit Testing In-Depth](https://www.udemy.com/course/nodejs-unit-testing-in-depth/)

​A focused, in-depth look into Node.js unit testing, from absolute beginner to very advanced.

## Notes

1. Structuring the test directory: Under the test directory mirror the src code directory and create test files under it. The second approach is to create a test file in each direction beside the source code. The second approach is favoured because it invovles less work if the files are moved around.
2. To ensure that the only the files names containing 'test' are picked and executed. Make the following changes. The single quotes are important to escape the text correctly.

```Javascript
mocha './lib/**/*.test.js'
mocha --recursive //This is used if we want to recurse the sub-directories.
```

## Resources

1. [Mocha](https://mochajs.org/)
2. [Chai assertion library](https://www.chaijs.com/)
3. [Sinon] (https://sinonjs.org/)

### Description

This is a focused, in-depth course about unit testing, where we will look at lots of code, and learn how to test it. We will go through everything from the simplest JavaScript function to ES6 classes & private code testing. We will also learn how to test your code coverage, so you always know where you stand.

One of the goals of this course is to teach you how to think about unit testing, and not simply teach you the basic syntax or how to call an assertion.

We will go through most scenarios you will run into day to day, as well as address a number of issues and examples ignored by most unit testing courses available online.

You should have some node experience, you don't need to be an expert, but you should at least know the basics.

I am always looking to improve the course, please send me any feedback you may have directly!

Please go ahead and add me on LinkedIn, I love to connect with my students (I also love endorsements :D)
