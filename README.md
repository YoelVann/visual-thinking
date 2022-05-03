# Visual thinking app

This project is a API that provides students data.

### Technologies used in the project

* Node JS: to run the API server
* Jest: to execute the tests and make the unit tests
* Eslint: format the code style with the rules specified in the ``.eslintrc.js`` file
* express: Framework used to make the API


### Requirement
Given a students data list:

1. Enable an endpoint to consult all students with all the fields.
2. Enable an endpoint to consult all students email if the student have a certification.
3. Enable an endpoint to consult all students with credist higher to 500

### Design
All the students data have the following structure. Example of student object:
```json
   {
    "id": "6264d5d8878a117a9c57c5c4",
    "name": "Claudia",
    "email": "Howell@visualpartnership.xyz",
    "credits": 227,
    
    "enrollments": [
    "Visual Thinking Avanzado"
    ],
    "previousCourses": 5,
    "haveCertification": true
    }
```
#### Overview diagram of the project

The following diagram is a general overview of the design followed to create the project, original art by @carlogilmar.

The project have four principal parts:

    1. JSON Reader class, a class that reads any json file
    2. StudentService class, provides the required data interact directly with Reader class, all the logic is here. 
    3. StudentsController class, provides an interface to get the data, only calls functions interacts directly with StudentsServer class.
    4. API server, gets the data only using StudentsController class, with their static methods.

#### Data flow

The data flow is following the next diagram

```mermaid
graph TD;
Reader -> StudentsService -> StudentsController -> Server;
```

### API endpoints

| Endpoint | Request | Description |
| --- | --- | --- |
| `localhost:3000/v1/students` | `localhost:3000/v1/students`| Return all students with all their fields |
| `localhost:3000/v1/students/emails` | `localhost:3000/v1/students/emails`| Return all students emails with certification  |
| `localhost:3000/v1/students/credits` | `localhost:3000/v1/students/credits`| Return all students with credits higher than 500 |

![image](https://user-images.githubusercontent.com/17634377/165870375-fe5a730a-eada-4abe-ac9c-42334e003b18.png)

### Usage
Fisrt, install the node modules

```bash
npm install
```

To run the server, use the following script:

```bash
npm run server
```

To run the tests, use the following script:

```bash
npm run test
```