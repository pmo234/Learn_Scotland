
# Learn_Scotland: Learning scotland website
<b> Contributors: [Struan](https://github.com/stustr), [Peter](https://github.com/pmo234), 
[David](https://github.com/dvdjms) & [Mikhail](https://github.com/MikhailGorbunov) </b>


A full-stack React website that allows users to log in, see a score rating and be able to play 4 different quizzes about Scotland.

<!-- 🚧 <b> NB: This is app has reached its MVP, but is still under construction</b> 🚧 -->


## Contents 

* [Ideas](#idea)
* [Showcase](#showcase)
* [Technologies](#technologies)
* [Brief](#brief)
* [Challenges](#challenges)
* [Running a Learn Scotland demonstration](#running-a-learn-scotland-demonstration)


<br>

## Idea



Since Covid-19 many entertaining industries are getting a shortage in the number of users. Based on an [open source statistics](https://www.statista.com/statistics/586826/national-museum-of-scotland-visitor-numbers-united-kingdom-uk/)(figure below) the national museum of Scotland is not exempt from this issue. Our group has volunteered to try and combat this issue. We went on a trip to investigate how we can improve visitors' experience, and found that the museum has interactive screens which display different quizzes based on a historical object. Therefore, we have decided to make an interactive app/website that can be possibly used within the museum.

![Screenshot 2022-12-21 at 20 00 00](https://user-images.githubusercontent.com/68015812/222269171-043b02d9-fb88-4ea9-917d-f149279cb073.png)

<br>

## Showcase

https://user-images.githubusercontent.com/60407763/222799748-ed8ebe16-5251-44bf-9205-a95a3bd93b90.mp4

<br>


## Technologies

These are the main technologies we used to construct the project.

* ![React]
* ![React Router]
* ![NPM]
* ![HTML]
* ![JavaScript]
* ![Tailwind]
* ![MongoDB]
* ![Express]


<br>


## Brief

Our initial brief was extremely ambitious, and so was our team. Together, by following the iterative model (development cycle), we have managed to accomplish the following tasks (shown bellow) in just 5 days!

**MVP**


- [x] Create an educational quiz app.
- [x] Make a multiple-choice quiz and leaderboard.
- [x] Generate a database.
- [x] Construct a forum page.

<!-- API find or make -->

 Extensions 

Some of the features currently in progress:

- [x] An alternate set of questions that requires the user to input answers
- [] Give the forum page extra functionality of comments
- [x] Produce questions from MoS objects 
- [x] Upgrade questions to include APIs/ libraries

 Goals 

- [x] Get as close as possible to an efficient app development cycle
- [x] Create functions that are out of the scope of our course


<br>

## Challenges

Here are some of the things we've found challenging:

* Learning a new framework while planning & building 
* Using a hybrid working method
* Making login functionality
* File structuring & naming conventions as the project scaled up in size


<br>



## Running a Learn Scotland demonstration

Run Locally

Clone the project and go to the project directory:
```
cd Learn_Scotland
  ```
Install dependencies in both the client and the server folders:

```
cd client
npm install

cd server
npm install
```
Seed the database. Within the server/db folder:
```
mongosh < seeds.js
```
Run express (leave running in a terminal window). Within the server folder:
```
npm run server:dev
```
Run React development environment (leave running in a terminal window). Within client folder:
```
npm start
```
The application is running on port 3000 so visit http://localhost:3000/ to try out!


<!-- MARKDOWN LINKS & IMAGES -->

<!-- [ReactNative]:https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB -->
[Java]:https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white
[Spring]:https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Hibernate]:https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white
[PostgreSQL]:https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[IntelliJ_IDEA]: https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white
[ReactNative]:https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[stats]:https://img.shields.io/tokei/lines/github/pmo234/Learn_Scotland

[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[React Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[Express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB

