import { FileText } from 'lucide-react';
import FileOperations from './FileOperations';
import ThemeToggle from './ThemeToggle';
import ViewToggle, { type ViewMode } from './ViewToggle';

interface HeaderProps {
  content: string;
  onLoadFile: (content: string, filename?: string) => void;
  onSave?: () => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function Header({ 
  content, 
  onLoadFile, 
  onSave, 
  viewMode, 
  onViewModeChange 
}: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 py-3" role="banner">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">
              Markdown Preview
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <ViewToggle 
              currentMode={viewMode}
              onModeChange={onViewModeChange}
            />
          </div>
          
          <FileOperations
            content={content}
            onLoadFile={onLoadFile}
            onSave={onSave}
          />
          
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile view toggle */}
      <div className="sm:hidden mt-3 pt-3 border-t border-border">
        <ViewToggle 
          currentMode={viewMode}
          onModeChange={onViewModeChange}
          className="justify-center"
        />
      </div>
    </header>
  );
}