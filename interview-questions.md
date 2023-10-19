# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: R.O

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: you can fix this mistake by making a migration file. The name of the foreign key would be provided by ruby typically a number. The foreign key would be on the students model since Students belongs to Cohorts 

Researched answer: To create a foreign key you will first need to create a migration file. The name would be student_id. The foreign key would be on the students model since Students is a association to Cohorts. 

2. Which RESTful routes must always be passed params?

Your answer: I believe it would be Edit and create 

Researched answer: Show, destroy, update, edit and create all need params. The RESTful path parameter enables a developer to pack every bit of information necessary to identify a resource on a server but also creates an incredibly rigid design.

3. Name three rails generator commands. What is created by each?

Your answer: rails new creates new rails app. Rails generate creates a model. rails console allows you to work within the rails console to create data entries.

Researched answer: Create a simple Rails application using the rails new command.The rails generate command uses templates to create a whole lot of things. Running rails generate by itself gives a list of available generators. The console command lets you interact with your Rails application from the command line. On the underside, rails console uses IRB, so if you've ever used it, you'll be right at home. This is useful for testing out quick ideas with code and changing data server-side without touching the website.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
this will show a list of all students. Method name index

action: "POST" location: /students
this will create a new student. Method name create

action: "GET" location: /students/new
this will create a form to show in the index for a new user. Method name new

action: "GET" location: /students/2
this will show the newly created student. Method name show

action: "GET" location: /students/2/edit
this will show a form for the newly created student to update with. Method name update_form

action: "PATCH" location: /students/2
this will update the newly created student. Method name update

action: "DELETE" location: /students/2
this will delete the newly created student. Method name destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a  developer make a new rails app for a to do list.
2. As a  developer  create a data base for your app.
3. As a  developer create a Task model for your app.
4. As a  developer allow task list to be shown to the user.
5. As a  developer allow user to add a task to the model of your app.
6. As a  developer allow user to edit the task and have it be shown to the user.
7. As a  developer  allow user to add another task to your app.
8. As a  developer  create a button to allow user to jump back to the top of your app.
9. As a  developer allow user to delete a task from your app.
10. As a  developer allow task to show on a different page of your app.

