# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## EcoDelivery Tracker

EcoDelivery Tracker is a simple web application for small delivery and transport companies.
The application allows users to manage delivery orders, track delivery status and estimate CO₂ emissions based on delivery distance.

## Features
- Create delivery orders
- Track delivery status (Pending, In Transit, Delivered)
- Manual distance input (km)
- Simple CO₂ emission estimation
- React Router based navigation

## Sustainability
The application supports sustainable development by helping companies organize deliveries more efficiently and by providing a simplified CO₂ emission estimate.

## CO₂ calculation
The application calculates estimated CO₂ emissions based on distance 
==> 1km = 0.2 kg CO₂

## Application Flow Diagram

Order Created ==> Assigned to Driver ==> Delivery In Transit ==> Delivered ==> Distance Logged ==> CO₂ Emissions Calculated

## App structure

Delivery process:
1. Delivery is created
2. Distance is added (km)
3. CO₂ is calculated from distance
4. Status is updated (Pending / Delivered)


## Netlify link

https://tranquil-quokka-fae4a8.netlify.app/#/

## React 1
- Routing with react-router
- State and props
- Deployed application

## How to run Locally
### Backend

Open terminal in the server folder:

cd server
npm install
npm start

The server runs on port 5000

### Frontend

Open terminal in the main project folder:

npm install
npm start

Open the browser at http://localhost:3000

## Technologies

 React (frontend)
 React Router (navigation)
 Node.js + Express (backend API)
 CORS
 CSS / simple styling

## React 2
- Forms and controlled inputs
- Shared state with useState and props
- Deployed version updated

https://tranquil-quokka-fae4a8.netlify.app/#/

Netlify link paused ===> platform limits

GitHub:

https://younes971.github.io/eco-delivery-tracker/#/
