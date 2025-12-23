/**
 * Projects Data File
 * Structured, exportable data for all portfolio projects
 * Organized by category for clean management
 */

export const projectCategories = {
  GRAPHICS_SYSTEMS: "graphics-systems",
  WEB_APPLICATIONS: "web-applications",
  LOW_LEVEL_FOUNDATIONS: "low-level-foundations",
  EDUCATION: "education",
  LEADERSHIP: "leadership",
};

export const projects = [
  // Featured Graphics & Systems Projects
  {
    id: "miniRT",
    slug: "miniRT",
    category: projectCategories.GRAPHICS_SYSTEMS,
    title: "miniRT — Ray Tracer",
    shortDescription: "CPU-based ray tracing engine written in C",
    description:
      "A high-performance ray tracer built from scratch in C, demonstrating deep understanding of computer graphics fundamentals.",
    longDescription: `MiniRT is a CPU-based ray tracing engine that showcases strong fundamentals in graphics programming and performance optimization.

## Implementation Details

- **Ray-Object Intersections**: Implemented geometric calculations for rays intersecting with spheres, planes, and cylinders
- **Lighting & Shadows**: Full Phong lighting model with shadow casting and ambient occlusion
- **Reflections & Transparency**: Recursive ray tracing for realistic material properties
- **Texture Mapping**: Support for texture coordinates and image-based materials
- **Camera & Viewport**: Configurable camera with custom viewport calculations

## Performance Optimizations

- Multithreaded rendering using POSIX threads for CPU utilization
- Memory-efficient data structures minimizing cache misses
- Spatial partitioning for intersection acceleration
- Optimized math operations with SIMD considerations

## Technical Highlights

- Pure C with manual memory management
- No external graphics libraries (custom math implementation)
- .rt file parser for scene description
- Output to PPM image format
- Handles complex scenes with dozens of objects

**Skills**: C, Graphics Math, Multithreading, Performance Optimization, Memory Management`,
    tags: ["C", "Ray Tracing", "Graphics", "Performance", "Multithreading"],
    technologies: ["C", "POSIX Threads", "Mathematics", "File I/O"],
    year: "2024",
    status: "completed",
  },

  {
    id: "irc-server",
    slug: "irc-server",
    category: [projectCategories.GRAPHICS_SYSTEMS],
    title: "IRC Server",
    shortDescription: "Socket-based IRC-style server implementation in C++",
    description:
      "A fully functional IRC protocol server showcasing advanced network programming and concurrent system design.",
    longDescription: `An IRC (Internet Relay Chat) protocol implementation demonstrating mastery of network programming, concurrent systems, and protocol design.

## Core Implementation

- **Socket Programming**: Raw socket API usage for TCP/IP communication
- **Non-blocking I/O**: Event-driven architecture using poll() syscall
- **Concurrent Client Handling**: Support for multiple simultaneous connections
- **IRC Protocol**: Full RFC compliance for basic IRC operations

## Features

- User authentication and channel management
- Message routing and broadcasting
- PRIVMSG, JOIN, PART, NICK commands
- Bot integration support
- Robust error handling and connection management

## Performance Considerations

- Non-blocking I/O for maximum throughput
- Efficient memory pooling for client data structures
- Minimal copying of message data
- Fast channel lookup using hash tables

## Technical Highlights

- C++ with low-level socket APIs
- poll() for efficient event multiplexing
- Protocol parsing and state machine implementation
- Thread-safe data structures

**Skills**: C++, Network Programming, Concurrent Systems, Protocol Design, Systems Thinking`,
    tags: ["C++", "Network", "Sockets", "Concurrency", "Protocols"],
    technologies: ["C++", "POSIX Sockets", "poll()", "IRC Protocol"],
    year: "2024",
    status: "completed",
  },


  // Web & Application Projects
  {
    id: "treasure-hunt-2024",
    slug: "treasure-hunt-2024",
    category: projectCategories.WEB_APPLICATIONS,
    title: "Treasure Hunt — UM6P Benguerir 2024",
    shortDescription:
      "Front-end lead for large-scale interactive event application",
    description:
      "Responsive and performant front-end for a treasure hunt game event at UM6P Benguerir.",
    longDescription: `Led the front-end development for a large-scale interactive event platform at UM6P Benguerir.

## Responsibilities

- **Front-end Architecture**: Designed scalable, component-based architecture
- **Interactive Flows**: Implemented complex user progression and game state management
- **Performance**: Optimized for live event scenarios with minimal latency
- **Responsiveness**: Ensured seamless experience across devices and network conditions

## Technical Implementation

- Real-time user progression tracking
- Event-driven state updates
- Custom animation system for engagement
- Mobile-first responsive design
- API integration with backend team

## Challenges Addressed

- High concurrency during peak event hours
- Unreliable network conditions at venue
- Cross-device compatibility
- Real-time leaderboard updates
- Smooth performance with heavy animations

**Skills**: React, Performance Optimization, Event-Driven Architecture, Team Collaboration`,
    tags: ["React", "Web", "Events", "Real-time", "Performance"],
    technologies: ["React", "JavaScript", "CSS", "REST API"],
    year: "2024",
    status: "completed",
  },

  {
    id: "treasure-hunt-2025",
    slug: "treasure-hunt-2025",
    category: projectCategories.WEB_APPLICATIONS,
    title: "Treasure Hunt — UM6P 2025",
    shortDescription: "Scalable front-end system for multiple UM6P locations",
    description:
      "Enhanced treasure hunt platform deployed across multiple UM6P locations with reusable architecture.",
    longDescription: `Developed and deployed an enhanced treasure hunt platform across multiple UM6P locations (Rabat & Benguerir).

## Key Achievements

- **Scalable Architecture**: Built reusable front-end framework for multiple locations
- **Event-Specific Customization**: System supporting custom UI/UX per location
- **Multi-Game Orchestration**: Unified system managing different game flows
- **Custom Assets**: Integrated location-specific visual assets and branding
- **Performance**: Maintained sub-100ms interaction latency under load

## Technical Architecture

- Component-based design for maximum reusability
- Configurable game logic separated from UI
- Asset loading optimization
- State synchronization across game instances
- Analytics integration for event insights

## Scalability Improvements over 2024

- Modular game system for easy addition of new games
- Centralized configuration management
- Improved error recovery and offline support
- Enhanced monitoring and debugging tools

**Skills**: Scalable Architecture, React, System Design, Cross-Location Deployment`,
    tags: ["React", "Architecture", "Multi-Location", "Games", "Scale"],
    technologies: ["React", "TypeScript", "REST API", "Analytics"],
    year: "2025",
    status: "completed",
  },

  {
    id: "escape-building-2025",
    slug: "escape-building-2025",
    category: projectCategories.WEB_APPLICATIONS,
    title: "Escape the Building — UM6P 2025",
    shortDescription:
      "Front-end for interactive puzzle-based escape game event",
    description:
      "Complete front-end implementation for an escape-the-building game with interactive puzzles and real-time progression.",
    longDescription: `Built the complete front-end application for an escape-the-building game event at UM6P.

## Core Features

- **Game Progression Logic**: Sequential puzzle system with branching paths
- **Interactive Puzzles**: Custom puzzle mechanics with visual feedback
- **Event-Driven Updates**: Real-time synchronization with game server
- **User Interface**: Intuitive puzzle interface optimized for touch and desktop
- **Hint System**: Progressive hint delivery with hint economy

## Technical Implementation

- React-based puzzle component system
- WebSocket integration for real-time updates
- Canvas-based puzzle visualizations
- Timer and score tracking
- Mobile-responsive design

## Challenges Solved

- Preventing puzzle spoilers while supporting hints
- Smooth state transitions between puzzles
- Network latency resilience
- Touch gesture handling for puzzle interactions
- Real-time leaderboard updates

**Skills**: React, Real-time Systems, Game Logic, UX Design`,
    tags: ["React", "Games", "Puzzles", "Real-time", "UX"],
    technologies: ["React", "WebSocket", "Canvas", "JavaScript"],
    year: "2025",
    status: "completed",
  },

  {
    id: "laravel-platform",
    slug: "laravel-platform",
    category: projectCategories.WEB_APPLICATIONS,
    title: "Laravel Attendance & Course Management Platform",
    shortDescription:
      "Full-featured backend and frontend platform for academic management",
    description:
      "Comprehensive web application for course management, session tracking, and attendance handling with multilingual support.",
    longDescription: `A complete web platform built with Laravel and Livewire for managing courses, sessions, and attendance tracking.

## Features

- **Course Management**: Create and manage courses with sessions and resources
- **Attendance Tracking**: Automated attendance marking and analytics
- **Dashboard System**: Real-time dashboards for students, instructors, and administrators
- **Multilingual Support**: Full translation support for English, French, and Arabic
- **Student Progression**: Track and report on student performance and attendance

## Backend Architecture

- Clean Laravel architecture with service layer pattern
- Database normalization for data consistency
- Query optimization for reporting performance
- RESTful API design
- Robust validation and error handling

## Frontend Implementation

- Livewire components for dynamic UI without JavaScript framework
- CRUD operations with real-time updates
- Complex reporting views with filtering
- Responsive admin interface
- Accessibility compliance

## Key Challenges

- Performance at scale with thousands of attendance records
- Complex reporting queries across multiple relationships
- Multilingual UI consistency
- Real-time data synchronization

**Skills**: Laravel, PHP, Database Design, Livewire, System Architecture`,
    tags: ["Laravel", "PHP", "Database", "Livewire", "Backend"],
    technologies: ["Laravel", "PHP", "MySQL", "Livewire", "Blade"],
    year: "2024",
    status: "completed",
  },

  {
    id: "englshool",
    slug: "englshool",
    category: projectCategories.WEB_APPLICATIONS,
    title: "englshool.com",
    shortDescription: "Production web platform for language learning",
    description:
      "Maintained and developed features for a live educational web platform.",
    longDescription: `englshool.com is a live production web platform focused on language learning and education. Contributed to platform development and maintenance.

## Responsibilities

- **Feature Development**: Implemented new learning modules and user features
- **Performance Optimization**: Profiled and optimized slow database queries
- **Bug Fixes**: Rapid iteration on production issues
- **Code Quality**: Maintained clean, readable, production-grade code
- **Testing**: Comprehensive testing for new features

## Technical Stack

- Modern PHP backend with clean architecture
- Database optimization and indexing strategies
- Frontend with modern JavaScript practices
- Performance monitoring and logging
- Continuous deployment pipeline

## Production Practices

- Zero-downtime deployments
- Database migration management
- User-facing documentation
- Performance monitoring
- Incident response procedures

**Skills**: Production Development, Web Platform Maintenance, Performance Optimization`,
    tags: ["Web", "Production", "PHP", "Performance", "Backend"],
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "REST API"],
    year: "2024",
    status: "completed",
  },

  // Foundational Low-Level Projects
  {
    id: "libft",
    slug: "libft",
    category: projectCategories.LOW_LEVEL_FOUNDATIONS,
    title: "Libft — Custom C Standard Library",
    shortDescription: "Recreation of essential C standard library functions",
    description:
      "Comprehensive implementation of core C library functions demonstrating deep understanding of memory management and string manipulation.",
    longDescription: `Libft is a foundational project recreating core C standard library functions from scratch.

## Implemented Functions

- **String Operations**: strlen, strcpy, strdup, substr, split, join
- **Memory Management**: malloc, memset, memcpy, calloc
- **Type Checking**: isalpha, isdigit, isalnum, etc.
- **Data Structures**: Linked list implementation with full operations
- **Utility Functions**: atoi, itoa, tolower, toupper

## Learning Outcomes

- Deep understanding of memory layout and pointer manipulation
- String processing and null-termination
- Efficient algorithm implementation
- Code organization in libraries
- Makefile and build system basics

## Technical Details

- Pure C with no external dependencies
- Efficient implementations minimizing redundant copying
- Proper error handling and edge cases
- Comprehensive header documentation
- Unit testing methodology

**Skills**: C Fundamentals, Memory Management, Standard Library Design`,
    tags: ["C", "Foundations", "Algorithms", "Library", "Low-Level"],
    technologies: ["C", "Make", "POSIX"],
    year: "2023",
    status: "completed",
  },

  {
    id: "ft-printf",
    slug: "ft-printf",
    category: projectCategories.LOW_LEVEL_FOUNDATIONS,
    title: "ft_printf — Variadic Formatted Output",
    shortDescription:
      "Implementation of printf with support for common format specifiers",
    description:
      "Recreation of the printf function supporting variadic arguments and format specifiers.",
    longDescription: `ft_printf is an implementation of the printf function demonstrating variadic function handling and string formatting.

## Features

- **Format Specifiers**: %c, %s, %d, %i, %u, %x, %X, %p, %%
- **Flags**: -, 0, space, +, #
- **Width and Precision**: Full support for width and precision modifiers
- **Variadic Arguments**: Proper stdarg handling

## Implementation Challenges

- Variadic argument handling with type safety
- Complex parsing of format strings
- Buffer management and output efficiency
- Correct handling of edge cases (NULL pointers, zero values)

## Technical Achievements

- No external string formatting functions used
- Efficient character-by-character output
- Proper memory management
- Comprehensive edge case handling

**Skills**: Variadic Functions, String Parsing, Standard Library Functions`,
    tags: ["C", "Printf", "Variadic", "String", "Formatting"],
    technologies: ["C", "stdarg.h"],
    year: "2023",
    status: "completed",
  },

  {
    id: "get-next-line",
    slug: "get-next-line",
    category: projectCategories.LOW_LEVEL_FOUNDATIONS,
    title: "get_next_line — Buffered File Reading",
    shortDescription:
      "Efficient line-reading function with configurable buffer",
    description:
      "Implementation of line reading from file descriptors with optimized buffering.",
    longDescription: `get_next_line provides efficient line reading from file descriptors, handling multiple FDs and incomplete reads.

## Features

- **Buffered Reading**: Configurable buffer size for I/O efficiency
- **Multiple FDs**: Support for reading from multiple file descriptors simultaneously
- **Dynamic Allocation**: Properly handles files of any size
- **Edge Cases**: Handles files without newlines, empty lines, and EOF

## Implementation Details

- Static buffer management for state persistence
- Efficient string operations minimizing copies
- Proper memory cleanup
- Support for BUFFER_SIZE variation

## Performance Optimization

- Single read() call per line (when possible)
- Minimal string copying and reallocation
- Efficient buffer searching algorithms

## Technical Highlights

- File descriptor management
- Static variable usage for state
- Memory leak prevention
- Robust error handling

**Skills**: File I/O, Buffer Management, Memory Efficiency`,
    tags: ["C", "File I/O", "Buffering", "Optimization", "Low-Level"],
    technologies: ["C", "POSIX File I/O", "Make"],
    year: "2023",
    status: "completed",
  },

  {
    id: "philosophers",
    slug: "philosophers",
    category: projectCategories.LOW_LEVEL_FOUNDATIONS,
    title: "Philosophers — Multithreading & Synchronization",
    shortDescription: "Dining philosophers problem with threading and mutexes",
    description:
      "Practical implementation of classic concurrency problem demonstrating thread synchronization.",
    longDescription: `The Philosophers project implements the classic dining philosophers concurrency problem using POSIX threads and synchronization primitives.

## Problem Setup

- N philosophers sitting at a round table
- Each philosopher alternates between thinking and eating
- Limited forks (resources) available
- Must prevent deadlock and starvation

## Implementation Approaches

- **Mutex-based Solution**: Lock-based synchronization
- **Semaphore Variant**: Alternative synchronization with semaphores
- **State Machine**: Robust state tracking for philosophers

## Concurrency Concepts Demonstrated

- Mutex creation and destruction
- Critical section protection
- Deadlock prevention strategies
- Race condition identification
- Thread lifecycle management

## Monitoring and Debugging

- Philosopher state logging with timestamps
- Death detection system
- Performance metrics (eat counts, think times)

## Technical Highlights

- POSIX thread creation and joining
- Fine-grained locking strategies
- Atomic operations awareness
- Debugging concurrent systems

**Skills**: Multithreading, Synchronization, Concurrency, Deadlock Prevention`,
    tags: ["C", "Threads", "Synchronization", "Concurrency", "Mutex"],
    technologies: ["POSIX Threads", "Mutex", "C"],
    year: "2023",
    status: "completed",
  },

  {
    id: "born2beroot",
    slug: "born2beroot",
    category: projectCategories.LOW_LEVEL_FOUNDATIONS,
    title: "Born2beroot — Linux Administration",
    shortDescription: "Linux system setup with security hardening",
    description:
      "Complete Linux system configuration demonstrating administration, security, and DevOps fundamentals.",
    longDescription: `Born2beroot is a Linux system administration project focused on secure system setup and hardening.

## System Setup

- **Operating System**: Debian or CentOS configuration
- **Partitioning**: LVM and encrypted volumes
- **Boot Management**: GRUB configuration and optimization

## Security Hardening

- **SSH Configuration**: Key-based authentication, port hardening
- **Firewall**: UFW configuration and rules
- **User Management**: Sudo groups, permissions, password policies
- **PAM Configuration**: Password complexity and aging rules
- **System Monitoring**: Log management and audit trails

## System Administration

- Service management with systemd
- Cron job scheduling
- System monitoring and metrics
- Resource limitation (ulimits)
- Backup strategies

## Monitoring Implementation

- Custom monitoring script (bash)
- System metrics collection
- Performance reporting
- Automated alerts

## Security Principles Applied

- Principle of least privilege
- Defense in depth
- Secure defaults
- Audit and monitoring
- Regular patching

**Skills**: Linux Administration, Security, System Hardening, DevOps`,
    tags: ["Linux", "Administration", "Security", "DevOps", "System"],
    technologies: ["Debian", "Bash", "SSH", "UFW", "LVM"],
    year: "2023",
    status: "completed",
  },

  // Education & Programs
  {
    id: "1337-42network",
    slug: "1337-42network",
    category: projectCategories.EDUCATION,
    title: "1337 / 42 Network",
    shortDescription: "Intensive project-based software engineering curriculum",
    description:
      "Rigorous software engineering program emphasizing peer learning, low-level programming, and systems thinking.",
    longDescription: `1337 is part of the 42 Network, an innovative, project-based software engineering school.

## Program Characteristics

- **Peer-Driven**: Evaluation by peers rather than traditional instructors
- **Project-Based**: Learning through implementing real projects
- **Self-Paced**: Flexibility in learning speed and scheduling
- **No Lectures**: Learning through exploration and collaboration

## Core Curriculum Areas

- **C Programming**: Foundational systems programming
- **Algorithms & Data Structures**: Efficient problem solving
- **Unix/Linux**: System administration and command-line proficiency
- **Networks**: TCP/IP, socket programming, protocols
- **Rendering**: Graphics programming and visualization
- **Web Development**: Full-stack web applications

## Notable Projects Completed

- Custom C library implementation
- Multithreaded applications
- Network servers and clients
- Graphics rendering engines
- Complex algorithms and data structures

## Learning Approach

- Incremental difficulty progression
- Real-world problem solving
- Code quality emphasis
- Collaborative learning environment
- Strong peer feedback culture

## Skills Developed

- Problem decomposition
- Systems thinking
- Collaborative development
- Self-directed learning
- Technical communication

**Skills**: Systems Programming, Self-Learning, Peer Collaboration, Full-Stack Development`,
    tags: [
      "Education",
      "Programming",
      "Systems",
      "Full-Stack",
      "Peer Learning",
    ],
    technologies: ["C", "C++", "JavaScript", "Python", "Bash"],
    year: "2023-2024",
    status: "in-progress",
  },

  {
    id: "alx-africa",
    slug: "alx-africa",
    category: projectCategories.EDUCATION,
    title: "ALX Africa — Software Engineering",
    shortDescription:
      "Comprehensive software engineering program through Python modules",
    description:
      "Completed ALX Africa program covering programming fundamentals through Python-focused software engineering.",
    longDescription: `ALX Africa (previously Holberton School) is a rigorous software engineering program focused on practical skills and real-world problem solving.

## Program Completion

- **Modules Completed**: Through Python modules
- **Duration**: Intensive full-time program
- **Focus**: Practical software engineering and autonomous learning

## Technical Areas Covered

- **Python Fundamentals**: Core language features and idioms
- **Data Structures**: Lists, dictionaries, sets, custom structures
- **Algorithms**: Sorting, searching, graph algorithms
- **Object-Oriented Programming**: Classes, inheritance, polymorphism
- **Backend Development**: Web frameworks and REST APIs
- **Databases**: SQL, relational design, ORMs
- **Testing**: Unit testing and test-driven development

## Project-Based Learning

- Practical projects reinforcing each concept
- Real-world problem solving
- Code quality and best practices
- Documentation and communication skills

## Emphasis on Autonomy

- Self-directed learning approach
- Research and problem-solving skills
- Peer code reviews
- Collaborative project work

## Skills Developed

- Rapid problem solving
- Code organization and architecture
- Testing and debugging
- Communication and documentation
- Independent learning

**Skills**: Python, Backend Development, Problem Solving, Self-Directed Learning`,
    tags: ["Education", "Python", "Backend", "Full-Stack", "Fundamentals"],
    technologies: ["Python", "SQL", "Flask/Django", "Git"],
    year: "2022-2023",
    status: "completed",
  },

  // Leadership & Community
  {
    id: "web-club-1337",
    slug: "web-club-1337",
    category: projectCategories.LEADERSHIP,
    title: "Web Club — 1337 (Vice President)",
    shortDescription: "Technical leadership and mentorship in web development",
    description:
      "Leadership role organizing and mentoring web development community at 1337.",
    longDescription: `As Vice President of the Web Club at 1337, provided technical leadership and mentorship in web development.

## Leadership Responsibilities

- **Technical Sessions**: Organized and led workshops on web technologies
- **Mentorship**: Guided students through backend and performance optimization
- **Curriculum Design**: Created learning tracks and challenge problems
- **Community Building**: Fostered collaborative learning environment
- **Industry Connections**: Invited guest speakers and industry experts

## Technical Topics Covered

- **Backend Performance**: Database optimization, caching strategies, API design
- **Web Architecture**: Scalability, load balancing, microservices
- **Modern Web Development**: React, Node.js, TypeScript
- **DevOps Practices**: Deployment, monitoring, containerization
- **Code Quality**: Best practices, testing, code review

## Challenges & Problems Created

- Algorithm challenges for skill development
- Real-world project simulations
- Performance optimization exercises
- Full-stack application projects
- Code quality assessment tools

## Student Impact

- Mentored 20+ students in backend development
- Helped students pass technical interviews
- Contributed to students landing internships
- Built strong technical foundation for cohorts

## Community Impact

- Strengthened web development community at 1337
- Bridged gap between theoretical knowledge and industry practice
- Created sustainable learning resources
- Established mentorship patterns for future leaders

**Skills**: Technical Leadership, Mentorship, Communication, Community Building, Teaching`,
    tags: [
      "Leadership",
      "Mentorship",
      "Web Development",
      "Education",
      "Community",
    ],
    technologies: ["Web Stack", "Teaching", "Organization"],
    year: "2024-present",
    status: "in-progress",
  },
];

/**
 * Get project by slug
 */
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category) {
  return projects.filter((project) => project.category === category);
}

/**
 * Get all categories with counts
 */
export function getCategoryStats() {
  const stats = {};
  Object.values(projectCategories).forEach((category) => {
    stats[category] = projects.filter((p) => p.category === category).length;
  });
  return stats;
}

/**
 * Category display names
 */
export const categoryNames = {
  [projectCategories.GRAPHICS_SYSTEMS]: "Featured Systems & Graphics",
  [projectCategories.WEB_APPLICATIONS]: "Web & Application Projects",
  [projectCategories.LOW_LEVEL_FOUNDATIONS]: "Foundational Low-Level Projects",
  [projectCategories.EDUCATION]: "Education & Programs",
  [projectCategories.LEADERSHIP]: "Leadership & Community",
};
