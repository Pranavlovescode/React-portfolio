"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioConfig } from "./config";

export default function Home() {
  return (
    <div className="h-screen text-green-400 bg-gray-700 font-mono p-8">
      <Terminal />
    </div>
  );
}

function Terminal() {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: "Show available commands",
      execute: () => `Available commands:
  help     - Show this help message
  about    - Learn about me
  skills   - View my technical skills
  projects - See my projects
  contact  - Get my contact information
  clear    - Clear the terminal
  whoami   - Display current user
  date     - Show current date and time
  ls       - List files (portfolio sections)
  cat      - Read file contents
  
Type any command to get started!`
    },
    about: {
      description: "Learn about me",
      execute: () => {
        const { about, name } = portfolioConfig;
        return {
          text: `About Me
=========

${about.introduction.replace('[Your Name]', name)}

🎓 Background:
${about.background.map(item => `   • ${item}`).join('\n')}

💼 Current Role:
${about.currentRole.map(item => `   • ${item}`).join('\n')}

🎯 Interests:
${about.interests.map(item => `   • ${item}`).join('\n')}

"${about.quote}"`,
          showProfileImage: true
        };
      }
    },
    skills: {
      description: "View technical skills",
      execute: () => {
        const { skills } = portfolioConfig;
        return `Technical Skills
===============

Frontend Development:
├── Languages: ${skills.frontend.languages.join(', ')}
├── Frameworks: ${skills.frontend.frameworks.join(', ')}
├── Styling: ${skills.frontend.styling.join(', ')}
└── Tools: ${skills.frontend.tools.join(', ')}

Backend Development:
├── Languages: ${skills.backend.languages.join(', ')}
├── Frameworks: ${skills.backend.frameworks.join(', ')}
├── Databases: ${skills.backend.databases.join(', ')}
└── APIs: ${skills.backend.apis.join(', ')}

Cloud & DevOps:
├── Platforms: ${skills.cloud.platforms.join(', ')}
├── Containers: ${skills.cloud.containers.join(', ')}
├── CI/CD: ${skills.cloud.cicd.join(', ')}
└── Monitoring: ${skills.cloud.monitoring.join(', ')}

Development Tools:
├── Version Control: ${skills.tools.versionControl.join(', ')}
├── IDEs: ${skills.tools.ides.join(', ')}
├── Design: ${skills.tools.design.join(', ')}
└── Testing: ${skills.tools.testing.join(', ')}

Proficiency Levels:
⭐⭐⭐⭐⭐ Expert
⭐⭐⭐⭐☆ Advanced  
⭐⭐⭐☆☆ Intermediate`;
      }
    },
    projects: {
      description: "View my projects",
      execute: () => {
        const { projects, contact } = portfolioConfig;
        const projectList = projects.map(project => {
          return `${project.icon} ${project.name}
   • ${project.description}
${project.features.map(feature => `   • ${feature}`).join('\n')}
   • Technologies: ${project.technologies.join(', ')}
   • GitHub: ${project.github}`;
        }).join('\n\n');
        
        return `My Projects
===========

${projectList}

For more projects, visit: ${contact.github}`;
      }
    },
    contact: {
      description: "Get contact information",
      execute: () => {
        const { contact, location, timezone } = portfolioConfig;
        return `Contact Information
==================

📧 Email: ${contact.email}
🌐 Website: ${contact.website}
💼 LinkedIn: ${contact.linkedin}
🐱 GitHub: ${contact.github}
📱 Twitter: ${contact.twitter}

📍 Location: ${location}
🕐 Timezone: ${timezone}

Let's connect and build something amazing together!

Feel free to reach out for:
• Collaboration opportunities
• Technical discussions  
• Job opportunities
• Open source contributions`;
      }
    },
    clear: {
      description: "Clear the terminal",
      execute: () => "CLEAR"
    },
    whoami: {
      description: "Display current user",
      execute: () => `guest@portfolio:~$ You are viewing ${portfolioConfig.name}'s portfolio`
    },
    date: {
      description: "Show current date and time",
      execute: () => new Date().toString()
    },
    ls: {
      description: "List portfolio sections",
      execute: () => `total 5
drwxr-xr-x 2 user user 4096 Dec 27 2024 about/
drwxr-xr-x 2 user user 4096 Dec 27 2024 skills/
drwxr-xr-x 2 user user 4096 Dec 27 2024 projects/
drwxr-xr-x 2 user user 4096 Dec 27 2024 contact/
-rw-r--r-- 1 user user  256 Dec 27 2024 README.md`
    },
    cat: {
      description: "Read file contents",
      execute: (args) => {
        const file = args[0];
        if (!file) {
          return "cat: missing file operand\nTry 'cat README.md' or 'help' for available commands";
        }
        if (file === "README.md") {
          return `# Welcome to My Portfolio Terminal

This is an interactive terminal-style portfolio website.

## Quick Start
- Type 'help' to see available commands
- Use 'about' to learn about me  
- Try 'projects' to see my work
- Use 'contact' to get in touch

## Navigation
- Use UP/DOWN arrows for command history
- Type 'clear' to clear the terminal
- All commands are case-insensitive

Happy exploring! 🚀`;
        }
        return `cat: ${file}: No such file or directory`;
      }
    }
  };

  const executeCommand = (input) => {
    const [command, ...args] = input.toLowerCase().trim().split(" ");
    
    if (command === "") return "";
    
    if (commands[command]) {
      const result = commands[command].execute(args);
      if (result === "CLEAR") {
        setHistory([]);
        return "";
      }
      // Handle object response with additional data
      if (typeof result === 'object' && result !== null) {
        return result;
      }
      return result;
    }
    
    return `Command not found: ${command}. Type 'help' for available commands.`;
  };

  const handleSubmit = () => {
    if (isTyping || !currentInput.trim()) return;
    
    const output = executeCommand(currentInput);
    const newEntry = {
      command: currentInput,
      output: output,
      timestamp: new Date().getTime()
    };
    
    setHistory(prev => [...prev, newEntry]);
    setCommandHistory(prev => [...prev, currentInput]);
    setHistoryIndex(-1);
    setCurrentInput("");
    
    // Refocus input after command execution
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 10);
  };

  const handleKeyDown = (e) => {
    if (isTyping) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete functionality
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  const typeWriter = (text, callback) => {
    setIsTyping(true);
    let index = 0;
    const speed = 1; // Faster typing
    
    const type = () => {
      if (index < text.length) {
        callback(text.substring(0, index + 1));
        index++;
        setTimeout(type, speed);
      } else {
        setIsTyping(false);
        // Refocus input after typing animation completes
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 10);
      }
    };
    
    type();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  // Ensure focus is maintained after typing animation completes
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  // Maintain focus when terminal is clicked
  useEffect(() => {
    const handleClick = (e) => {
      // Only refocus if clicking within the terminal area
      if (terminalRef.current && terminalRef.current.contains(e.target)) {
        if (inputRef.current && !isTyping) {
          inputRef.current.focus();
        }
      }
    };

    const handleBlur = (e) => {
      // Don't refocus if focus is moving to another input/button
      if (!e.relatedTarget || e.relatedTarget.tagName !== 'INPUT') {
        setTimeout(() => {
          if (inputRef.current && !isTyping) {
            inputRef.current.focus();
          }
        }, 10);
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleWindowFocus = () => {
      if (inputRef.current && !isTyping) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('focus', handleWindowFocus);
    
    if (inputRef.current) {
      inputRef.current.addEventListener('blur', handleBlur);
      inputRef.current.addEventListener('focus', handleFocus);
    }

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('focus', handleWindowFocus);
      if (inputRef.current) {
        inputRef.current.removeEventListener('blur', handleBlur);
        inputRef.current.removeEventListener('focus', handleFocus);
      }
    };
  }, [isTyping]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = portfolioConfig.terminal.welcomeMessage.replace('[Your Name]', portfolioConfig.name);

    setHistory([{
      command: "",
      output: welcomeMessage,
      timestamp: new Date().getTime()
    }]);
  }, []);

  return (
    <div className="md:h-[800px] flex flex-col p-5">

        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
            </div>
            <span className="text-gray-400 text-sm font-bold">portfolio@terminal:~</span>
          </div>
          <div className="text-gray-400 font-bold">
            Terminal Portfolio
          </div>
        </div>

        {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 bg-gray-950"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <TerminalEntry 
            key={index} 
            entry={entry} 
            typeWriter={typeWriter}
          />
        ))}
        
        {/* Current Input Line */}
        <div className="flex items-center mt-2">
          <span className="text-green-400 mr-2">{portfolioConfig.terminal.prompt}</span>
          <div className="flex items-center relative terminal-input-container">
            <span className="text-green-400 font-mono">{currentInput}</span>
            <BlinkingCursor isFocused={isFocused} />
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent outline-none caret-transparent font-mono"
              disabled={isTyping}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlinkingCursor({ isFocused }) {
  return (
    <span className={`text-green-400 inline-block ${isFocused ? 'terminal-cursor' : 'opacity-50'}`}>
      █
    </span>
  );
}

// Component to render text with clickable links
function TerminalText({ text }) {
  const urlRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|github\.com\/[^\s]+)/g;
  
  const parts = text.split(urlRegex);
  
  return (
    <span>
      {parts.map((part, index) => {
        if (urlRegex.test(part)) {
          let href = part;
          
          // Add protocol if missing
          if (part.includes('@')) {
            href = `mailto:${part}`;
          } else if (part.startsWith('github.com')) {
            href = `https://${part}`;
          } else if (!part.startsWith('http')) {
            href = `https://${part}`;
          }
          
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline cursor-pointer transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </span>
  );
}

function TerminalEntry({ entry, typeWriter }) {
  const [displayOutput, setDisplayOutput] = useState("");
  const [shouldType, setShouldType] = useState(true);
  const [outputData, setOutputData] = useState(null);

  useEffect(() => {
    if (!entry.output) return;
    
    // Handle complex output with additional data
    if (typeof entry.output === 'object' && entry.output !== null) {
      if (entry.output.text && shouldType) {
        typeWriter(entry.output.text, setDisplayOutput);
        setShouldType(false);
      } else if (entry.output.text) {
        setDisplayOutput(entry.output.text);
      }
      setOutputData(entry.output);
    } else if (entry.output && shouldType) {
      typeWriter(entry.output, setDisplayOutput);
      setShouldType(false);
    } else if (entry.output) {
      setDisplayOutput(entry.output);
    }
  }, [entry.output]);

  const renderOutput = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <div key={index}>
        <TerminalText text={line} />
        {index < lines.length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div className="mb-4">
      {entry.command && (
        <div className="flex items-center mb-1">
          <span className="text-green-400 mr-2">{portfolioConfig.terminal.prompt}</span>
          <span className="text-green-400">{entry.command}</span>
        </div>
      )}
      {displayOutput && (
        <div className="text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
          {renderOutput(displayOutput)}
        </div>
      )}
      {outputData && outputData.showProfileImage && (
        <div className="flex justify-start my-3">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-green-500">
            <img 
              src="/profile-pranav.png" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      )}
    </div>
  );
}
