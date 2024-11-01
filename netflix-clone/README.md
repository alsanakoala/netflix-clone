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





# Netflix Clone

A Netflix-inspired web application built using **React.js** that allows users to browse and search for movies, view movie details, watch trailers, and manage a personalized watchlist. The app uses **TMDb API** for fetching movie data and **Firebase** for authentication and data storage.

## Features

- **Home Page**: Displays trending, top-rated, upcoming, and now-playing movies.
- **Movie Details Page**: Provides detailed information about a movie, including an overview, release date, rating, and trailer.
- **Search Functionality**: Allows users to search for movies by title.
- **Genre Filtering**: Users can filter movies based on genres.
- **Watchlist**: Users can sign in and save movies to their personalized watchlist.
- **Dark/Light Mode**: Toggle between light and dark themes for a personalized viewing experience.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **React.js**: For building the user interface and managing the application's state.
- **JavaScript (ES6+)**: Core programming language used.
- **TMDb API**: To fetch movie data.
- **Firebase**: Used for authentication and Firestore database for storing user data.
- **react-slick**: For creating movie carousels.
- **react-modal**: For displaying movie trailers in a modal.
- **CSS**: Custom styles for the application.

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd netflix-clone
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a `.env` file** in the root directory and add your TMDb API key and Firebase configuration:
   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```
   - Replace `your_tmdb_api_key` with your TMDb API key.
5. **Start the development server**:
   ```bash
   npm start
   ```
6. Open your browser and visit `http://localhost:3000` to view the app.

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Set up Firestore Database and Authentication.
3. Get your Firebase configuration details and add them to your `.env` file.

## Folder Structure

```
/src
  /components
    - Auth.js
    - GenreFilter.js
    - Hero.js
    - MovieDetails.js
    - MovieList.js
    - Navbar.js
    - Recommendations.js
    - UserProfile.js
    - Watchlist.js
  /firebase
    - firebase.js
  /api
    - api.js
  App.js
  App.css
  index.js
  index.css
  i18n.js
```

## How to Use

1. **Browse Movies**: Explore trending, top-rated, upcoming, and now-playing movies.
2. **Search for Movies**: Use the search bar to find movies by title.
3. **Filter by Genre**: Select genres to filter movies.
4. **View Movie Details**: Click on a movie to view more information and watch the trailer.
5. **Manage Your Watchlist**: Sign in to save and manage your favorite movies.
6. **Toggle Dark/Light Mode**: Click the theme icon to switch between dark and light themes.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request on GitHub.



## Acknowledgments

- **TMDb API**: For providing movie data.
- **Firebase**: For authentication and database services.
- **Netflix**: For the inspiration behind the UI design.

Feel free to modify the content to better fit your project specifics or to add any additional information you deem necessary.























