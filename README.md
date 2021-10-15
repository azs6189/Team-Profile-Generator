# Team-Profile-Generator

<a href="https://choosealicense.com/licenses/mit" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)

## Description

Team-Profile-Generator is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Installation

First, ensure node.js is installed on your computer. Next, clone this repository. Open the repository in a code editor such as VS Code.

## Usage

After cloning the repository to your computer, follow the next steps:

1. Open Team-Profile-Generator repository in VS Code

2. Open Terminal and type the syntax below

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run tests

   ```bash
   npm run test
   ```

   c. Run the application

   ```bash
   node index.js
   ```

   d. THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number.

   e. WHEN I enter the team manager’s name, employee ID, email address, and office number
   THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team.

   f. WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.

   g. WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.

   h. WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated.

## Video

Link to [Team-Profile-Generator Video](https://drive.google.com/file/d/1vxH8DDKKsGLasg4-1c1563hiRuIElO32/view?usp=sharing)
