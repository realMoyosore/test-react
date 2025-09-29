import { useState } from 'react';
import CodeEditor from '../CodeEditor';

export default function CodeEditorExample() {
  const [content, setContent] = useState(`# Welcome to Markdown Preview

This is a **markdown editor** with syntax highlighting!

## Features
- Real-time preview
- Syntax highlighting
- File operations
- Responsive design

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`

> This is a blockquote with some *emphasis* and **strong** text.

- List item 1
- List item 2
- List item 3`);

  return (
    <div className="h-96 w-full">
      <CodeEditor
        value={content}
        onChange={setContent}
        placeholder="Start typing your markdown..."
      />
    </div>
  );
}