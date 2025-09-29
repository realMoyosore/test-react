import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Download, Save, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileOperationsProps {
  content: string;
  onLoadFile: (content: string, filename?: string) => void;
  onSave?: () => void;
  className?: string;
}

export default function FileOperations({ 
  content, 
  onLoadFile, 
  onSave,
  className = ""
}: FileOperationsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
      toast({
        title: "Invalid file type",
        description: "Please select a markdown file (.md or .markdown)",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onLoadFile(content, file.name);
      toast({
        title: "File loaded",
        description: `Successfully loaded ${file.name}`,
      });
    };
    reader.onerror = () => {
      toast({
        title: "Error loading file",
        description: "Failed to read the selected file",
        variant: "destructive"
      });
    };
    reader.readAsText(file);

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `document-${new Date().toISOString().split('T')[0]}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "File downloaded",
        description: "Your markdown file has been saved",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download the file",
        variant: "destructive"
      });
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave();
    } else {
      // Default behavior: save to localStorage
      localStorage.setItem('markdown-content', content);
      localStorage.setItem('markdown-saved-at', new Date().toISOString());
      toast({
        title: "Content saved",
        description: "Your work has been saved locally",
      });
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".md,.markdown"
        onChange={handleFileUpload}
        className="hidden"
        data-testid="file-input"
      />
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => fileInputRef.current?.click()}
        data-testid="button-upload"
        aria-label="Load markdown file"
      >
        <Upload className="h-4 w-4 mr-2" />
        Load File
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleDownload}
        data-testid="button-download"
        aria-label="Download markdown file"
      >
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleSave}
        data-testid="button-save"
        aria-label="Save content"
      >
        <Save className="h-4 w-4 mr-2" />
        Save
      </Button>
    </div>
  );
}