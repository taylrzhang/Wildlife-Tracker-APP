# Wildlife Tracking App

The Wildlife Tracking App is a tool that allows users to document and track wild animals they encounter in various locations. Whether you're a nature enthusiast, researcher, or simply curious about wildlife, this app lets you record your wildlife sightings, view them on a map using the Google Maps API, and even edit your records when you encounter the same animal again.


## Features

- **Sightings Log**: Keep a detailed log of wildlife sightings, including the date, time, and location of each encounter.

- **Google Maps Integration**: View your wildlife sightings on an interactive map powered by the Google Maps API. Get a visual representation of where you've spotted animals.

- **Animal Identification**: Record the species or type of animal you've encountered. Attach descriptions, notes, or images to your sightings for future reference.

- **Edit and Update**: If you encounter the same animal again or have additional information to add to your existing records, easily edit and update your sightings.

## Getting Started

To use the Wildlife Tracking App, follow these steps:

1. **Clone the Repository**: Begin by cloning this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/wildlife-tracking-app.git
   cd wildlife-tracking-app
   ```
   
2. **Install Dependencies**: Install the required dependencies for the app. You'll need Node.js and npm (Node Package Manager) installed on your machine.

    ```bash
    npm install
    ```
    
3. **Set Up Google Maps API Key**:

    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project or select an existing one.
    - Enable the "Maps JavaScript API" for your project.
    - Create an API Key and restrict its usage to your project's URL (e.g., `http://localhost:3000` for local development).
    - Copy the API Key.

4. **Add your Google Maps API Key to the .env file**:

    - Create a ```.env.local``` file in the root directory of your project.
    - Add your Google Maps API Key to the ```.env.local``` file:
      ```bash
      REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
      ```
5. **Run the App:**

    Start the development server and open the app in your default web browser:
      ```bash
      npm start
      ```
      
6. **Start Tracking Wildlife**:

   Use the app to start tracking wildlife sightings, view them on the map, and edit your records as needed.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the Google Maps API for powering the mapping functionality.
- Icons used in this app are provided by [Bootstrap Icon](https://icons.getbootstrap.com/).

## Contact

If you have any questions or feedback, feel free to contact me.



<br/>
Happy wildlife tracking!

