import MarkdownPreview from '../MarkdownPreview';

export default function MarkdownPreviewExample() {
  const sampleContent = `# Welcome to Markdown Preview

This is a **markdown editor** with syntax highlighting!

## Features
- Real-time preview
- Syntax highlighting  
- File operations
- Responsive design

### Code Examples

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`

### Blockquotes

> This is a blockquote with some *emphasis* and **strong** text.
> 
> It can span multiple lines and contain other markdown elements.

### Lists

1. Numbered list item
2. Another numbered item
3. Third item

- Bullet point
- Another bullet
- Third bullet

### Links and Images

[Visit GitHub](https://github.com)

---

*This is italic text* and **this is bold text**.

Here's some \`inline code\` within a paragraph.`;

  return (
    <div className="h-96 w-full">
      <MarkdownPreview content={sampleContent} />
    </div>
  );
}