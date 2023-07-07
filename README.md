# FURNITURE APP
This project was developed from both the frontend and the backend using react and rails respectively.

### Link to our Project[https://furniture-lsmt.onrender.com/]


Furniture app is a program that allows a user to view and rate available funiture and add a furniture by posting it. They can also update the furniture incase they need to change the image or the name. A user can also delete the product they have posted. This application allows for user login rights and our admin rights which contains different priviledges.  The following is what is entailed:

# Available Scripts
In the project directory run the following commands:
# Bundle install
Running this in the terminal installs all dependencies needed in our project.
# Rails db:migrate db:seed 
Migration allows a user to use a version control system to keep things synchronized with the code.
seeding allows a user to populate a database with data for the project.

Once it is done, it is now time to ensure that our project displays perfectly in the browser.
In our directory *cd client*  and run npm install, then npm install sweetalert2.

# Branches
The project was built from different branches that were merged to ensure its success.
# Project details
This project merged the frontend and the backend. It contains models and controllers which are important for its functionality as follows;

# Models
# Furnishing
Furnishing model deals with validation of the furniture and the relationship with user tables.

# user
User model validates the user and the relationship of the furniture

# Controllers
# Furnishing_controller
Defines the method to manipulate our furniture while considering the CRUD functionality.

# Session_controller
Defines the session login and logout

# User_controller
Defines the method to manipulate our user while considering the CRUD functionality.

# Running Furniture App in the browser.
The following are the instructions to consider when running the furniture app project in your machine.
In your directory run the rails server using the rails s command which opens http://localhost:3000 

Open another terminal and run  npm start --prefix client
Running this opens http://localhost:4000 in the browser.

# Navigating through the Furniture app
Once your server is running, the next step is accessing the content in our project. 
# User Navigation
# Login
The first action is to register and login by clicking at the login button at the navbar. The login has a link that redirects to the register page key in the details,register then login.
After successfull login
You will see a welcome message with the username to our furniture app.
click on get started button which redirects you to furniture page.
# Furniture page
The furniture page allows a user to choose their seat of preference and by clicking on the image which redirects you to another page where you will see the seat image and a place on where to rate it.
# Add Furniture
By clicking the add furniture button, it redirects a user to another page where they can key in the seat details, the image and the price. Only a user who Adds a furniture can update the furniture details and they can also delete the furniture they have added.

# Administrator Navigation
# Login
The administrator has to login to the application, in our case we have an admin named muchuku
# Administrator priviledges
At the furniture, once an admin clicks on an image they are given the option of either updating the furniture or deleting it. Only the admin can delete any information posted by the users.  

# Github pages link : 

# Authors
Github name: ConsolattaChepchirchir
Email: tuweiconsolatta@gmail.com

Github name: JohnMuchuku
Email: john.muchuku@student.moringaschool.com

Github name: Marambii
Email:marambib2019@gmail.com

# MIT License

Copyright (c) 2023 Baruch Marambi,John Muchuku, Consolatta Tuwei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


