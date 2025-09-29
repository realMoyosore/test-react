import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CodeEditor from '@/components/CodeEditor';
import MarkdownPreview from '@/components/MarkdownPreview';
import { type ViewMode } from '@/components/ViewToggle';
import { useToast } from '@/hooks/use-toast';

const STORAGE_KEY = 'markdown-editor-content';
const DEFAULT_CONTENT = `# Welcome to Markdown Preview

This is a professional markdown editor with real-time preview, syntax highlighting, and file operations.

## ✨ Features

- **Real-time Preview**: See your markdown rendered instantly
- **Syntax Highlighting**: CodeMirror-powered editor with markdown support
- **File Operations**: Load and save markdown files
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Auto-saves your work as you type

## 🚀 Getting Started

1. Start typing in the editor panel
2. Watch your content render in real-time
3. Use the view toggle to switch between editor, preview, or split view
4. Load existing files or download your work

## 📝 Markdown Examples

### Text Formatting

Make text **bold** or *italic*. You can also use ~~strikethrough~~.

### Code

Inline \`code\` looks like this.

\`\`\`javascript
// Code blocks support syntax highlighting
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
\`\`\`

### Lists

#### Unordered Lists
- Feature 1
- Feature 2
  - Nested item
  - Another nested item
- Feature 3

#### Ordered Lists
1. First step
2. Second step
3. Third step

### Links and Images

[Visit GitHub](https://github.com)

### Blockquotes

> This is a blockquote. It can contain multiple paragraphs and other markdown elements.
> 
> The markdown editor handles these beautifully.

### Tables

| Feature | Status | Notes |
|---------|---------|--------|
| Editor | ✅ Complete | CodeMirror integration |
| Preview | ✅ Complete | Real-time rendering |
| File Ops | ✅ Complete | Load/save functionality |

---

**Happy writing!** 🎉`;

export default function Home() {
  const [content, setContent] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    setContent(savedContent || DEFAULT_CONTENT);
  }, []);

  // Auto-save content to localStorage
  useEffect(() => {
    if (content) {
      localStorage.setItem(STORAGE_KEY, content);
    }
  }, [content]);

  // Listen for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Listen for manual theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleLoadFile = (newContent: string, filename?: string) => {
    setContent(newContent);
    if (filename) {
      toast({
        title: "File loaded successfully",
        description: `Loaded ${filename}`,
      });
    }
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, content);
    localStorage.setItem('markdown-saved-at', new Date().toISOString());
    toast({
      title: "Content saved",
      description: "Your work has been saved locally",
    });
  };

  const renderLayout = () => {
    switch (viewMode) {
      case 'editor':
        return (
          <div className="h-full">
            <CodeEditor
              value={content}
              onChange={setContent}
              isDark={isDark}
              placeholder="Start typing your markdown..."
            />
          </div>
        );
      
      case 'preview':
        return (
          <div className="h-full">
            <MarkdownPreview content={content} />
          </div>
        );
      
      case 'split':
      default:
        return (
          <div className="h-full flex flex-col lg:flex-row gap-4">
            <div className="flex-1 min-h-0">
              <CodeEditor
                value={content}
                onChange={setContent}
                isDark={isDark}
                placeholder="Start typing your markdown..."
              />
            </div>
            <div className="flex-1 min-h-0">
              <MarkdownPreview content={content} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        content={content}
        onLoadFile={handleLoadFile}
        onSave={handleSave}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <main 
        className="flex-1 p-4 min-h-0"
        role="main"
        aria-label="Markdown editor workspace"
      >
        {renderLayout()}
      </main>
    </div>
  );
}