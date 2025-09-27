# Terminal Portfolio Website

A modern, interactive terminal-style portfolio website built with Next.js and Tailwind CSS. Features a realistic terminal interface with typing animations, command history, and auto-completion.

## ✨ Features

- **Interactive Terminal Interface**: Realistic terminal experience with command-line navigation
- **Typing Animation**: Smooth typewriter effect for command responses
- **Command History**: Navigate through previous commands using arrow keys
- **Auto-completion**: Tab completion for commands
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Easy Customization**: Simple configuration file for personalizing content
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Customize your portfolio**
   - Edit `src/app/config.js` with your personal information
   - Update contact details, skills, projects, and about section

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start typing commands to explore!

## 🎨 Customization

### Personal Information

Edit the `src/app/config.js` file to customize your portfolio:

```javascript
export const portfolioConfig = {
  // Update with your information
  name: "Your Name",
  title: "Your Title", 
  location: "Your City, Country",
  
  // Add your contact details
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  
  // Customize your projects
  projects: [
    {
      name: "Your Project",
      description: "Project description",
      technologies: ["React", "Node.js"],
      github: "github.com/yourname/project"
    }
  ]
};
```

## 🎯 Terminal Commands

The following commands are available:

- `help` - Show all available commands
- `about` - Display information about you  
- `skills` - Show your technical skills
- `projects` - List your projects
- `contact` - Show contact information
- `clear` - Clear the terminal
- `whoami` - Display current user
- `date` - Show current date and time
- `ls` - List portfolio sections
- `cat [file]` - Read file contents

### Navigation
- **Arrow Keys**: Navigate through command history (↑/↓)
- **Tab**: Auto-complete commands
- **Enter**: Execute commands

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - JavaScript library  
- **[Tailwind CSS 4](https://tailwindcss.com/)** - CSS framework

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Deployment
1. Build the project: `npm run build`
2. Start the production server: `npm start`

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
