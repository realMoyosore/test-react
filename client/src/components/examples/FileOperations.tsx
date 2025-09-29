import { useState } from 'react';
import FileOperations from '../FileOperations';

export default function FileOperationsExample() {
  const [content, setContent] = useState(`# Sample Markdown Document

This is some sample content for testing file operations.

## Features
- Load markdown files
- Download current content
- Save to local storage

**Try the file operations above!**`);

  const handleLoadFile = (newContent: string, filename?: string) => {
    setContent(newContent);
    console.log(`Loaded file: ${filename}`);
  };

  const handleSave = () => {
    console.log('Save triggered');
  };

  return (
    <div className="space-y-4">
      <FileOperations
        content={content}
        onLoadFile={handleLoadFile}
        onSave={handleSave}
      />
      <div className="p-4 bg-muted rounded-md">
        <h3 className="font-medium mb-2">Current Content:</h3>
        <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
          {content.substring(0, 200)}...
        </pre>
      </div>
    </div>
  );
}