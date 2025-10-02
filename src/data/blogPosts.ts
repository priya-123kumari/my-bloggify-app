export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to new frameworks.",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new changes. In this comprehensive guide, we'll explore the most significant trends that are reshaping how we build and interact with web applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how developers write code. From intelligent code completion to automated testing, AI tools are becoming indispensable in modern development workflows.</p>
      
      <h2>2. WebAssembly's Growing Adoption</h2>
      <p>WebAssembly (WASM) is gaining traction as developers seek near-native performance in web applications. This technology enables running code written in various languages directly in the browser.</p>
      
      <h2>3. Enhanced Developer Experience</h2>
      <p>Tools and frameworks are increasingly focusing on developer experience, with faster build times, better debugging tools, and more intuitive APIs becoming the norm.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Building Sustainable Design Systems",
    excerpt: "Learn how to create design systems that scale with your organization and stand the test of time through proper documentation and governance.",
    content: `
      <p>Design systems are the backbone of consistent user experiences across digital products. But creating a sustainable design system requires more than just a collection of components.</p>
      
      <h2>Foundations First</h2>
      <p>Start with solid foundations: typography, color, spacing, and iconography. These elements should be well-defined and documented before moving to components.</p>
      
      <h2>Component Architecture</h2>
      <p>Build components with flexibility and reusability in mind. Each component should serve a clear purpose and be easily maintainable.</p>
    `,
    author: "Michael Chen",
    publishDate: "Jan 12, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "The Psychology of User Experience",
    excerpt: "Dive deep into the psychological principles that drive user behavior and learn how to apply them to create more intuitive interfaces.",
    content: `
      <p>Understanding user psychology is crucial for creating products that not only function well but feel natural to use. Let's explore the key principles that drive user behavior.</p>
      
      <h2>Cognitive Load Theory</h2>
      <p>Users have limited mental resources. Designing interfaces that minimize cognitive load helps users focus on their goals rather than figuring out how to use your product.</p>
      
      <h2>The Role of Emotion</h2>
      <p>Emotional design creates memorable experiences. Understanding how colors, typography, and interactions affect emotions can significantly impact user engagement.</p>
    `,
    author: "Dr. Emma Rodriguez",
    publishDate: "Jan 10, 2024",
    readTime: "10 min read",
    category: "UX Design"
  },
  {
    id: "4",
    title: "Mastering CSS Grid: Advanced Layouts Made Simple",
    excerpt: "Unlock the full potential of CSS Grid with advanced techniques for creating complex, responsive layouts that adapt to any screen size.",
    content: `
      <p>CSS Grid has revolutionized web layout, offering unprecedented control over two-dimensional layouts. This guide covers advanced techniques for modern web design.</p>
      
      <h2>Grid Areas and Named Lines</h2>
      <p>Learn how to use named grid areas and lines to create maintainable and semantic layouts that are easy to understand and modify.</p>
      
      <h2>Responsive Design with Grid</h2>
      <p>Discover how to create truly responsive layouts using CSS Grid's auto-fit, minmax, and repeat functions without media queries.</p>
    `,
    author: "Alex Kumar",
    publishDate: "Jan 8, 2024",
    readTime: "7 min read",
    category: "CSS"
  },
  {
    id: "5",
    title: "The Art of Technical Writing",
    excerpt: "Master the craft of technical writing to create documentation that developers actually want to read and use in their daily work.",
    content: `
      <p>Great technical writing bridges the gap between complex concepts and practical understanding. Here's how to create documentation that truly serves its purpose.</p>
      
      <h2>Know Your Audience</h2>
      <p>Understanding your readers' skill level, context, and goals is the foundation of effective technical writing. Tailor your content accordingly.</p>
      
      <h2>Structure for Clarity</h2>
      <p>Use clear headings, bullet points, and logical flow to make information easy to scan and digest. Your readers are often looking for specific information quickly.</p>
    `,
    author: "Jennifer Park",
    publishDate: "Jan 5, 2024",
    readTime: "5 min read",
    category: "Writing"
  },
  {
    id: "6",
    title: "Modern JavaScript Testing Strategies",
    excerpt: "Explore comprehensive testing approaches that ensure code quality and reliability in modern JavaScript applications.",
    content: `
      <p>Testing is essential for building reliable applications. This guide covers modern testing strategies and tools that help maintain code quality at scale.</p>
      
      <h2>The Testing Pyramid</h2>
      <p>Understand the different levels of testing and how to balance unit tests, integration tests, and end-to-end tests for optimal coverage and speed.</p>
      
      <h2>Testing Tools Ecosystem</h2>
      <p>Navigate the modern testing landscape with tools like Jest, Testing Library, Cypress, and Playwright. Learn when to use each tool for maximum effectiveness.</p>
    `,
    author: "David Thompson",
    publishDate: "Jan 3, 2024",
    readTime: "9 min read",
    category: "JavaScript"
  }
];