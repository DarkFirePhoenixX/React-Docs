# React-Docs
 <br>
 Simple React/NodeJS app similar to google docs, allowing simultaneous file edit across different devices.
 <br>
 The app features 2 main functionalities:
<ul>
 <li>Edit file simultaneously with other people just by sharing the generated link (automatic file save included)</li>
 <li>Saving and downloading the file in a word (dox) format</li>
</ul>
 <br>
 To be implemented:
<ul>
 <li>1. Add permissions such as read-only and edit.</li>
 <li>2. Add buttons for downloading and applying the permissions.</li>
</ul>

# Dependencies:

<ul>
 <li>Npm</li>
 <li>MongoDB</li>
</ul>

# Installation & Usage

 # 1. Npm modules installation
    1. After downloading, initiate "npm install" command inside the server folder.
    2. Next, you have to execute "npm audit fix"/"npm audit fix --force".
    3. After this, execute "npm fund".
    4. Repeat the 3 steps above in the client folder as well, and you are done with this part.

 # 2. Ensuring Back-end functionality
    1. Go inside the server folder and open the file index.js.
    2. Set your mongoDB connection string in the line: mongoose.connect("mongodb://127.0.0.1:27017/'your-database'", {})

 # 3. Running the project
    1. Run "npm start" inside the client folder to start the front-end.
    2. Run "npm start" inside the server folder to start the back-end.

 # 4. Usage
    1. When you first open the app in the browser, you will have your document ready to edit with a custom generated uuid associated with it in the browser's address bar.
    2. Send this link to other people, so you can work on the file and make changes simultaneously.
    3. To download the file, simply press Ctrl + S and you will be prompted to give it a name and save it in .dox format.
