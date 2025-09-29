import { useMemo } from 'react';
import { marked } from 'marked';
import { Card } from '@/components/ui/card';

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

export default function MarkdownPreview({ content, className = "" }: MarkdownPreviewProps) {
  const htmlContent = useMemo(() => {
    try {
      // Configure marked for security
      marked.setOptions({
        breaks: true,
        gfm: true,
      });
      
      return marked(content || '# Welcome to Markdown Preview\n\nStart typing in the editor to see your content rendered here.');
    } catch (error) {
      console.error('Markdown parsing error:', error);
      return '<p class="text-destructive">Error parsing markdown content</p>';
    }
  }, [content]);

  return (
    <Card className={`h-full overflow-auto ${className}`}>
      <div className="p-6 h-full">
        <div 
          className="prose prose-sm max-w-none dark:prose-invert
                     prose-headings:text-foreground prose-p:text-foreground 
                     prose-strong:text-foreground prose-code:text-foreground
                     prose-blockquote:text-muted-foreground prose-blockquote:border-border
                     prose-pre:bg-muted prose-pre:text-muted-foreground
                     prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                     prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                     prose-hr:border-border prose-th:text-foreground prose-td:text-foreground"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          data-testid="markdown-preview"
          role="document"
          aria-label="Markdown preview"
        />
      </div>
    </Card>
  );
}