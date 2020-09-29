# InterviewClient

This project was generated with [Angular CLI] version 8.0.6.

## Prev requirements

# Windows
Install [NodeJs](https://nodejs.org/es/) version 8 or higher.
Install [NPM](https://www.npmjs.com/get-npm).
Install [Angular-Cli](https://cli.angular.io/).

# MacOs
Install [NodeJs](https://nodejs.org/es/) version 8 or higher.
Install [NPM](https://www.npmjs.com/get-npm).
Install [Angular-Cli](https://cli.angular.io/).
Install [ZSH](https://ohmyz.sh/).

# Editor
It's recommended to install visual studio code. [Visual Studio Code](https://code.visualstudio.com/).

After installing the prerequisites in the console or windows bash we execute `npm install`.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Directions

This project is a simple interview client project:

There are 3 main modules:
1- Admin Module - Only admin role users can access to
    - Simple users list gather via service and use of observables, pipe, map
    - Added nesting component to assign account to selected user
    - Use of input, output to communicate child and parent components

2- Shared Module - All loggedin users can access to
    - Simple Lorem Ipsum es component no logical structures there
    - Adding nested component for admin role
    - Structural directives to show admin module

3- Login Module - All users 
    - Login to enter simple project
    - Use of reactive forms

Mock Users
username: leo
password: 1234
role: admin

username: karen
password: 1234
role: admin

username: jovan
password: 1234
role: user


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
