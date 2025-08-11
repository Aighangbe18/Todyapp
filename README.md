# Welcome to my Todyapp Expo app 👋

My Body Fitness App This is a simple React Native fitness application designed to help users track their progress and manage their workouts. The app features a clean, modern user interface, a streamlined authentication flow, and a modular project structure for easy maintenance and scalability. 🚀 Features User Authentication: Secure and responsive Login and Sign-up pages. Intuitive Navigation: A persistent footer for easy access to key sections of the app (Home, Workouts, Profile). Home Dashboard: A personalized home screen that welcomes the user and displays recent workout progress. Modular Components: Reusable components like WorkoutCard and a centralized stylesheet (styles.ts) for consistent design.

🎨 Design Choices The app's design follows a modern and clean aesthetic, prioritizing user experience and readability. Color Palette: A vibrant green (#24A19C) is used as the primary accent color to evoke a sense of health and energy.

Layout: The screens are designed to be fully responsive and adapt to different mobile device sizes. UI Elements: Forms use rounded, filled inputs, and buttons have subtle shadows and gradients for a more interactive and polished look. Icons from lucide-react-native are used for clear visual communication.

⚙️ Setup Instructions To get a local copy of the project up and running, follow these simple steps.

Prerequisites Node.js npm

Installation Clone the repository: git clone cd todyapp

Install dependencies: The project uses several key libraries. The following command will install all required packages.

npm install

Install additional packages: For the icons and gradients, you will need to install these specific libraries. npm install lucide-react-native react-native-svg expo-linear-gradient

Start the application: npx expo start This will launch the Expo development server, which you can use to run the app on an emulator or a physical device.

🚧 Challenges Faced Modular Codebase: A primary challenge was structuring the project into separate, logical files to ensure a clean and scalable architecture. The final structure places components, screens, navigation, and styles into dedicated directories.

Dependency Management: Ensuring all third-party libraries, such as expo-linear-gradient and lucide-react-native, were correctly installed and configured was a key step in resolving initial runtime errors.

State Management: The current app uses simple useState hooks for local screen state. A future challenge will be implementing a more robust global state management solution (e.g., React Context or a library like Zustand) for a more complex application.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
