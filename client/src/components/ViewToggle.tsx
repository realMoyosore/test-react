import { Button } from '@/components/ui/button';
import { PanelLeftOpen, PanelRightOpen, Columns2 } from 'lucide-react';

export type ViewMode = 'editor' | 'preview' | 'split';

interface ViewToggleProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  className?: string;
}

export default function ViewToggle({ currentMode, onModeChange, className = "" }: ViewToggleProps) {
  const modes = [
    { mode: 'editor' as ViewMode, icon: PanelLeftOpen, label: 'Editor Only' },
    { mode: 'split' as ViewMode, icon: Columns2, label: 'Split View' },
    { mode: 'preview' as ViewMode, icon: PanelRightOpen, label: 'Preview Only' },
  ];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {modes.map(({ mode, icon: Icon, label }) => (
        <Button
          key={mode}
          variant={currentMode === mode ? "default" : "outline"}
          size="sm"
          onClick={() => onModeChange(mode)}
          data-testid={`button-view-${mode}`}
          aria-label={label}
          title={label}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}