Table of Contents
---

- [lucky-one-crescentpartha](#lucky-one-crescentpartha)
  - [`Description:`](#description)
  - [`What submits: Client-Code & Live-Server Resources`](#what-submits-client-code--live-server-resources)
  - [`What I did in this Project`](#what-i-did-in-this-project)
  - [`Bonus Marks:`](#bonus-marks)
  - [`Optional tasks:`](#optional-tasks)
  - [`Project Management Secrete:`](#project-management-secrete)
- [Inefficient Regular Expression Complexity in nth-check (`Fix vulnerabilities`)](#inefficient-regular-expression-complexity-in-nth-check-fix-vulnerabilities)
  - [`Solutions`](#solutions)

# lucky-one-crescentpartha

## `Description:`

> This is a React Application called `Table Chooser`. You can choose your __favorite table__ from here and __add to cart__ for the future recommendations and for buying purpose. You also get a __user recommendation__ after choosing some table items and clicking the `CHOOSE 1 FOR ME` button. Whether you can __clear your all cart items__ by clicking `CHOOSE AGAIN` button or you can manually __delete one by one__ clicking `trash icon`, as your wish. This is fully responsive application. <br> __Thank you for visiting__.

**[🔼Back to Top](#table-of-contents)**

## `What submits: Client-Code & Live-Server Resources`
- [Repository Link:](https://github.com/Programming-Hero-Web-Course4/lucky-one-crescentpartha/blob/main/README.md "Main Repository Link | Table Chooser - React App")
- [Live Site:](https://50-1table-chooser.netlify.app/ "Table Chooser - React App | Live-Site")

**[🔼Back to Top](#table-of-contents)**

## `What I did in this Project`

- [x] Give __different name__ of your website.
- [x] You can't give cloths related product, try with different like books, shoes or __different one__.
- [x] __Collect photo__ from freepik or others website.
- [x] __Create fake data__ any one of three way.
- [x] Fake data __contains__ id (for key purpose), name, price, photos.
- [x] Fake data need to contains almost __9 to 12 set of product__.
- [x] You need to add a __button with icon__ (React-fontAwesomeIcons or Hero Icons)
- [x] __CSS framework__ like Bootstraps or Tailwind are allowed, if you want to apply or use __plain CSS__.
- [x] Make your website __responsive__. (Mobile = 1 columns & regular device = 3 columns)
- [x] __Interactive:__ Add to Card - Selected Products (photo & delete button optional)
- [x] Add __"CHOOSE 1 FOR ME"__ & __"CHOOSE AGAIN"__ Button
  - If clicked "CHOOSE 1 FOR ME", __choose 1 product randomly__ for recommendation.
  - If clicked "CHOOSE AGAIN", __clear all products__.
- [x] __Folder Structure__, __Meaningful Components Name__, everything should __organize__.
- [x] You don't have to do __local storage activities__. Although it is optional, you can do it if you want.

**[🔼Back to Top](#table-of-contents)**

## `Bonus Marks:`
- [x] Use __destructuring__ 
- [x] At least __6 commit__
- [x] __Edit__ your __README.md__ file which __contains__ project name & live website link.
- [x] __Project description__ is optional.
- [x] If clicked __"CHOOSE AGAIN"__, __clear__ all products. (set state with empty array)
- [x] __Answer 3 questions__ by creating components in the bottom of the page. Answer contains __5 to 10 lines__. Answer at least __2 out of 3 questions__.
  1. How React works?
  2. Props vs State?
  3. How useState works?

**[🔼Back to Top](#table-of-contents)**

## `Optional tasks:`
- [x] __Delete__ button 🗑 - remove the product.
- [x] __photo__ with name
- [x] __Same product__ won't add to cart again. (use __alert__)
- [x] Cart contains __only 4 products__. (give warning that (Oops...) Can't select more than 4!)

**[🔼Back to Top](#table-of-contents)**

---

## `Project Management Secrete:`
1. Don't think whole thing at a time. __Divide__ your work to __small pieces__. Create a __checklist__ what to do next as a sequence.
2. After doing small piece, __commit__ your work in the git repository.
3. If you __Stuck__ anywhere, send __30 minutes to 1 hour__, not more than.
4. If does not work anything, start the __next small piece__.
5. __Deploy__ your site. check it is __work properly or not__.

**[🔼Back to Top](#table-of-contents)**

# Inefficient Regular Expression Complexity in nth-check (`Fix vulnerabilities`)

- [Help, npm audit says I have a vulnerability in react-scripts!](https://github.com/facebook/create-react-app/issues/11174 "facebook/create-react-app - github")
- [github Dependabot alert: Inefficient Regular Expression Complexity in nth-check](https://stackoverflow.com/questions/71282206/github-dependabot-alert-inefficient-regular-expression-complexity-in-nth-check "stackoverflow.com")

**[🔼Back to Top](#table-of-contents)**

## `Solutions`

`npm audit` says there's a warning about ___vulnerabilities___ in my project
Open `package.json`. You will find this:

``` JSON
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  }
```

Take `react-scripts` and move it to `devDependencies` (if you **don't have** it, **create it**):

``` JSON
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "react-scripts": "4.0.3"
  },
```

Then, ensure you run `npm audit --production` rather than `npm audit`.

This will fix your warnings.

**[🔼Back to Top](#table-of-contents)**

