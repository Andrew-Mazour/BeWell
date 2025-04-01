# BeWell - A Mental Health App Inspired by BeReal

## Overview
BeWell is a mental health app designed to encourage users to engage in activities that improve their well-being. Inspired by BeReal, the app prompts users to capture a moment where they are doing something beneficial for their mental health. Using **Cohere's AI**, BeWell personalizes recommendations based on the user's mood and current state of health.

## Features
- 📸 **Daily Prompts:** Users receive reminders to take a picture of their mental health activity.
- 🧠 **Personalized Suggestions:** Cohere AI provides activity recommendations based on individual preferences.
- ☁️ **Cloud-Based Storage:** Securely store images and activity logs using **Google Cloud**.
- 📊 **Progress Tracking:** Users can monitor their mental health journey over time.
- 🏆 **Community Engagement:** Optionally share progress with friends for support and encouragement.

## Tech Stack
- **Frontend:** TypeScript (React Native with Expo Go)
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **AI Integration:** Cohere API for personalized mental health suggestions
- **Cloud Services:** Google Cloud for storage and authentication

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB
- Google Cloud SDK
- Cohere API key (may have to pay for)
- Expo Go (for mobile testing)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Andrew-Mazour/BeWell.git
   cd BeWell
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file and add:
     ```env
     MONGO_URI=your-mongodb-connection-string
     GOOGLE_CLOUD_API_KEY=your-google-cloud-key
     COHERE_API_KEY=your-cohere-key
     ```
4. Start the application:
   ```bash
   npm run dev
   ```

## Usage
1. Sign up and create a profile.
2. Write about how you are feeling (be descriptive)
3. Receive a prompt to take a picture while engaging in a mental wellness activity.
4. Upload the picture and log how the activity makes you feel.
5. Get AI-powered suggestions for future activities.
6. Track your mental health journey over time.

## Future Improvements
- 📅 **Calendar View** for tracking activities.
- 🎨 **Custom Themes** for a more personalized experience.
- 📱 **Mobile App Version** for iOS and Android.

## Contributing
Feel free to submit pull requests and issues to help improve BeWell!

## License
This project is licensed under the MIT License.
