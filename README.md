# Socialize -REST-
this is a REST social media web app.

* Authentication.
* Hashed passwords logic (bcryptjs salt).
* jsonwebtoken with 1 hour length.
* Adding posts to feed, each post is linked to the user who uploaded it. (and only him can edit or delete that post).
* All the models data (users, posts) is located in mongoose schemas
* Pagination splits the pages to 4 posts per page, navigate with next/previous buttons

### Screenshots:
* [Sign up](https://i.ibb.co/R38BpqW/signup.jpg)
* [Log in](https://i.ibb.co/gdQXkc4/login.jpg)
* [Feed page](https://i.ibb.co/0K5M4X2/feed.jpg)
* [Single post](https://i.ibb.co/K0DNP7j/singlepost.jpg)


## Dependencies:
* back-end:
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.3",
    "express": "^4.16.3",
    "express-validator": "^6.9.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.9",
    "multer": "^1.4.2",
    "uuid": "^8.3.2"

* frond-end:
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.4"

<img src="https://i.ibb.co/R38BpqW/signup.jpg" width="300"> <img src="https://i.ibb.co/gdQXkc4/login.jpg" width="300"> <img src="https://i.ibb.co/0K5M4X2/feed.jpg" width="300"> <img src="https://i.ibb.co/K0DNP7j/singlepost.jpg" width="300">
