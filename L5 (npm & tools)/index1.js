// (5.1)+(5.2):: npm & npm-init: node package manager: helps in managing projects, downloading modules and has its own repositories
// npm init: intialising npm in the project. Look at app1.js 
//after coming from app1.js
//the npm init command will create a package.json file we can create it by our own or by npm init commands
// by creating this file we almost complete our any noded project we were working on, this file will store all the dependencies of our project. So simply if package.json is created it means your project is almost completed

//5.3: npm-scripts: npm supports many scripts
// now look app1.js again we created a command for starting our server
// so now our command we created named as "Start" instead of writting node app1.js for starting of our server we can use the command - npm start 
// and it will run our server
// we can also use our custom commands to start the server, the process is same but while entering the command in terminal use: node run (name of file)

//5.4 npm Packages: 
// npm is the package manager of node js codes, packages are the reusable codes or libraries
//5.5 Installing packages: command:  npm install <package-name>
/* 7.5 Installing Packages
npm install <package-name>
-save: Adds the package to the project’s dependencies in package.json.
-save-dev: Adds the package to the project’s devDependencies (used only in development) in package.json.
-g: Installs the package globally, making it available system-wide, not just in a specific project.
-save-exact: Installs the exact version specified without updating for newer versions.
-force: Forces npm to fetch and install packages even if they are already installed.
*/
