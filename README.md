# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Installation

#### Prep work
Make sure that the [backend](https://github.com/Confluente/backend-v2) is up and running.

#### Setup and running
1. Clone the repo and put it next to the backend repo
2. Do `npm install`
3. Do `npm install --only=dev`
4. Run the frontend using `npm run start`
5. Navigate to [`http://localhost:80/`](http://localhost:80/)

Note: the application will automatically reload if any changes are made to the source files in the frontend.
if you change any of the source files.

## General intuition (for starting developers)
When starting out, don't worry about anything outside the `src/` folder. Until you are very familiar with the `src/` 
folder and have made some good pull requests, everything outside the `src/` folder is unimportant.

So what's in the `src/` folder? For starters, the folders `src/app/core/` and `src/assets/img/` are of importance.
The former stores the all important code regarding website content, whilst the latter contains all the images that are
displayed on the website.

So, you want to edit the home page? The code of the home page is stored in `src/app/core/pages/home/`. This folder
contains 4 files, just like most folders of other pages. First, there is the `.component.html` file. This file contains 
the specifications of the layout and content. If you want to edit something written in text, you will have to edit 
the `*.component.html` file. Second, there is the `.component.ts` file. This TypeScript file specifies any additional 
functionality, such as loading data from the backend, interacting with services, or custom function specifications. 
Third, there is the `.component.css` file. This file contains styling specifications specific to that page. 
There is also a general `styles.css` (`src/styles.css`) file which contains styling specifications that are used more 
widely throughout the website. Lastly, there is a `.component.spec.ts` file which contains specifications on automatic 
code tests for testing the `component.ts` file. In many instances, no tests are written as most frontend functionality 
is either very difficult to test or unnecessary to test.

### Templates
Although the `src/app/core/pages/` folder contains many of the standard pages, the interesting coding happens in the 
`src/app/core/templates/` folder. This folder contains all the pages that interact heavily with the backend (database). 
These include, for example, pages about planned activities, posted vacancies and user profiles. A big exception is the 
manage page, located in `src/app/core/pages/manage/`.

### Services
Services (`src/app/core/services/`) are essential for interacting with the backend and thus for retrieving data from 
the database. Services only provide functionality. Therefore, in this folder, no `.css` or `.html` files can be found.
These services all directly connect to the routes of the backend. Just look at the functionality of the activities 
service (`src/app/core/services/activities/activities.service.ts`). The first function is named `getAll()`, which sends
a `GET` request to the backend route `api/activities` (see backend) which is the first route function in the backend 
`src/routes/activity.route.ts` file.

Apart from the general `.services.ts` files, there are several `-resolver.service.ts` files. These files contain 
functionality to load information from the backend before loading a page. For example, the 
`all-activities-resolver.service.ts` file contains functionality to call the previously mentioned `getAll()` function 
and load the data before a page is loaded, which is important for the functionality of the page that shows all the upcoming events.

## Creating a new component (page) or service (Code Scaffolding)
Instead of having to create 4 files by hand and add references in multiple other files, it is possible to generate all
of this automatically by making use of what is called `Code Scaffolding`. For generating a new component, use the 
terminal and run `ng generate component <component name>`. To make sure that it is immediately put in the right place, 
make sure to add the path to the component name. For example, to create a new page in the pages folder, run
`ng generate component core/pages/<component name>`.

Code scaffolding can also be used to generate other stuff (like services). You can thus also use `ng generate 
service|pipe|directive|class|guard|interface|enum|module`
