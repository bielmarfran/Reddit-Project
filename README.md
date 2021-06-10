# Reddit Project

Link: https://thirsty-villani-f5cdd2.netlify.app/

## Description

The idea was to develop a generic social/forum platform, where I get inspired by reddit.

### Main Features

- Account Login / Registration.
- Create and Edit of Posts / Comments.
- Profile / Cover Photo Upload

## Sub Features

- Input Validation
  - All Forms ara validated, example password need to 8 or more characters.
  - Photos Upload, have a type (png,jpg) and a size 5MB restriction.
- Feedback
  - Most Errors have Alert Type notification to help the user.
  - All types of validation have support error messages to help the user.

## Technologies Used:

- JavaScipt

### Front End:

- Vite
- ReactJS
- Tailwind CSS

### Back End:

- NodeJS
- ExpressJS
- MySQL
- Sequelize ORM

## Demo Hosting

### Front End:

- Netlify

### Back End:

- Heroku

### Photo Hosting:

- Cloudinary

# To run the project locally

## Client

    cd client

    npm install

    npm run dev

## Server

    cd server

    npm install

    nodemon
    
## DB
Config your local mysql environment and create your DB. Then go to :

    cd server
    
    cd config
    
    config.json
    
 Edit the file according to your environment and data.
