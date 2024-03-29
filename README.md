# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Final Product
Home page with favorite photos notification 
!["Home page with favorite photos notification"](docs/home_page.png)


Photos filtered by Nature category
!["Photos filtered by Nature category"](docs/active_topic.png)

Modal with clicked photo details 
!["Modal with clicked photo details"](docs/modal.png)

Modal with similar photos view
!["Modal with clicked photo details"](docs/modal_similar_photos.png)

Favorite photos page
!["Favorite photos page"](docs/favorite_photos.png)

## Features
* Users can view photos from the homepage loaded from the API.
* Users can navigate to different photo categories.
* Users can click on the PhotoLabs logo to view all photos.
* Users can click on a photo to view a larger version of the photo and relevant/similar photos.
* Users can like a photo from anywhere within the application where the photo is displayed.
* Users can view a heart icon with a notification in the navigation if there are liked photos.
* Users can click the heart icon in the navigation to see all the liked photos.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
## Dependencies
* Frontend: 
  * "@testing-library/jest-dom": "^5.16.5",
  * "@testing-library/react": "^13.4.0",
  * "@testing-library/user-event": "^13.5.0",
  * "react": "^18.2.0",
  * "react-dom": "^18.2.0",
  * "react-scripts": "5.0.1",
  * "web-vitals": "^2.1.4"

* Backend
  * "body-parser": "^1.18.3",
  * "cors": "^2.8.5",
  * "dotenv": "^7.0.0",
  * "express": "^4.16.4",
  * "helmet": "^3.18.0",
  * "pg": "^8.5.0",
  * "socket.io": "^2.2.0",
  * "ws": "^7.0.0"

