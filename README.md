## Basic Git Flow acronyms
---
**feat** - New feature added.<br><br>
**fix** - Bug fix.<br><br>
**docs** - Changes to documentation.<br><br>
**style** - Changes that do not affect code (Formatting, whitespaces, tabs, etc.).<br><br>
**refactor** - Improvements to the internal structure / code readability.<br><br>
**test** - Add / refactor tests.<br><br>
**chore** - Routine tasks (Project maintenance).<br><br>
**perf** - Performance improvement<br><br>
**build** - Changes regarding the build system, compilation, external dependencies, etc.<br><br>
**ci** - Changes to integration config.<br><br>

## /src Folder Structure
---

src/\
├── assets/\
│   ├── images/\
│   ├── svgs/\
│   └── fonts/\
├── components/\
│   ├── common/\
│   │   └── Button.jsx\
│   └── specific/\
│       └── UserProfileCard.jsx\
├── pages/ (or views/)\
│   ├── HomePage.jsx\
│   └── AboutPage.jsx\
├── hooks/\
│   └── useAuth.js\
├── utils/\
│   └── helpers.js\
├── styles/\
│   ├── global.css\
│   └── variables.css\
├── App.jsx\
├── main.jsx (or main.tsx for TypeScript)\
└── index.css\


**assets/:**
    Contains static assets like images, SVGs, and fonts used throughout the application.<br><br>
**components/:**
    Houses reusable UI components. This can be further organized into:<br><br>
**common/:** For widely used, generic components (e.g., Button, Input).
    specific/: For components tied to particular features or pages (e.g., UserProfileCard).<br><br>
**pages/** (or **views/**):
    Contains the main page components of the application, often composed of various components from the components folder. <br><br>
**hooks/:**
    Stores custom React hooks to encapsulate and reuse stateful logic. <br><br>
**utils/:**
    Holds utility functions and helper modules that are not specific to UI components or pages.<br><br>
**styles/:**
    Contains global stylesheets or variables, often separated from component-specific styles.<br><br>
**App.jsx:**
    The root component of the React application, where other components are typically rendered.<br><br>
**main.jsx** (or **main.tsx**):
    The entry point of the application, responsible for rendering the App component into the DOM.<br><br>
**index.css:**
    Contains global styles applied to the entire application.<br><br>