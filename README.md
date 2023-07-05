# FURNITURE APP
This project was developed from both the frontend and the backend using react and rails respectively.

# Available Scripts
In the project directory run the following commands:
# Bundle install
Running this in the terminal installs all dependencies needed in our project.
# Rails db:migrate db:seed 
Migration allows a user to use a version control system to keep things synchronized with the code.
seeding allows a user to populate a database with data for the project.

Once it is done, it is now time to ensure that our project displays perfectly in the browser.
In our directory *cd client*  and run npm install, then npm install sweetalert2.

# Running Furniture App in the browser.
In your directory run the rails server using the rails s command which opens http://localhost:3000

Open another terminal and run  npm start --prefix client
Running this opens http://localhost:4000 in the browser.

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

# Navigating through the Furniture app
Once your server is running, the next step is accessing the content in our project. 
# Login
The first action is to register and login by clicking at the login button at the navbar. The login has a link that redirects to the register page.
After successfull login
# Get started: Furniture page
The furniture page allows a user to choose their seat of preference  and choose what action to do in it.
# Add Furniture
By clicking the add furniture button, it allows a user to add furniture and by posting the furniture they will have the rights to update and delete.   


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

