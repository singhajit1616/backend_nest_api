## Roche Galaxy NestJS Project
Project built on using NestJs, for documentation please refer [link](https://docs.nestjs.com/)

## Installation

```bash
// clone project locally
$ git clone https://<user_name>@bitbucket.org/docquitystrange/backend_nest_api.git

// go to root of project and install dependencies
$ npm install
```

## Running the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Best Coding Practices
1. There MUST NOT be trailing whitespace at the end of non-blank lines.
2. New lines MAY be added to improve readability and to indicate related blocks of code.
3. There MUST NOT be more than one statement per line.
4. The line length must be between 80-120 characters.
5. Import statements/ namespace must follow one empty line and then class definition.
6. ClassNames, FileName must be UpperCamelCase. The extends and implements keywords MUST be declared on the same line as the class name. The opening brace for the class MUST go on its own line. The closing brace for the class MUST go on the next line after the body.
7. Classes must follow multiple line comments which specifies the purpose, creator and version

```bash
//TestExampleClass.ts
/**
* purpose of TestExampleClass
* Author Name: Author
* Module Name: Module
* Version: version (in semantic versioning system for example: 0.0.1)
*/
Class TestExampleClass extends TestExampleClass1 implements TestExampleClass2 {

}

```
8. Functions or variables must be in lowerCamelCase.
9. Functions must follow multiple line comments and specify the purpose of function along with the parameters and their data type.
10. Space is to be added after the comma “,”.
11. Method arguments with default values must go at the end of the argument list.

```bash
/**
* purpose of testFunction
* @param arg1 usage of agr1
* @param arg3 usage of agr2
* @param arg3 usage of agr1
*/
function testFunction(arg1: dataType, arg2: dataType, arg3: dataType = 0) {
const testVariable: dataType = someValue;
}
```
12. The general style rules for control structures are as follows: 
    - Opening and closing parenthesis will always be in a new line. Reason easy to track opening and closing parenthesis.
    - The structure body MUST be indented once.
```bash
For Example: 
if ($expr1) 
{
// if body 
}
elseif ($expr2) 
{
// elseif body 
} 
else 
{
// else body; 
}
```
13. Error Handling and Exceptions:
    - Try/Catch block must be used to handle and break code.
    - Exception filters need to be used.
    - Unhandled exceptions must be handled and proper exception messages need to be sent.
```bash
For Example:
try
{
// try body
} 
catch (FirstExceptionType exception)
{
// catch body
} 
catch (OtherExceptionType exception)
{
// catch body
}
```
14. Use of interface
15. Request/Response object model

# Response Format
```bash
{
  "status": 1,  	// 1: Success, 0: failure
  "code": 2000, 	// 1000-series failure and 2000-series success
  "message": "success / invalid data", 	//API- message
  "data": {}, 	    // detail-> Object, list-> Array of objects
  "error": {
    "debugId": "", 	// debugId generated while writing to file
    "errorMessage": ["Reason1", "Reason2"], 	// Reasons of API failure
    "timestamp": "", 	// timestamp when API failed
    "path": ""	    //url or API which failed
  }
}
```

# Logging Format
Timestamp Loglevel #debugId: Error Messgae
Stack trace
```bash
2020-11-25 19:15:12 ERROR #Roche-CKHXGMYSJ0006PSSYDPLEH4HN : UsernameExistsException: An account with the given email already exists.
    at Request.extractError (D:\Node Projects\nestapi\node_modules\aws-sdk\lib\protocol\json.js:52:27)
    at Request.callListeners (D:\Node 
```

