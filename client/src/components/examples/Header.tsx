import { useState } from 'react';
import Header from '../Header';
import { type ViewMode } from '../ViewToggle';

export default function HeaderExample() {
  const [content, setContent] = useState(`# Sample Document\n\nThis is sample content for the header demo.`);
  const [viewMode, setViewMode] = useState<ViewMode>('split');

  const handleLoadFile = (newContent: string, filename?: string) => {
    setContent(newContent);
    console.log(`File loaded: ${filename}`);
  };

  const handleSave = () => {
    console.log('Save triggered from header');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        content={content}
        onLoadFile={handleLoadFile}
        onSave={handleSave}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <div className="p-4">
        <div className="text-sm text-muted-foreground">
          Current view mode: <strong>{viewMode}</strong>
        </div>
      </div>
    </div>
  );
}