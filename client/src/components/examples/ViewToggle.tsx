import { useState } from 'react';
import ViewToggle, { type ViewMode } from '../ViewToggle';

export default function ViewToggleExample() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('split');

  return (
    <div className="space-y-4 p-4">
      <div>
        <h3 className="font-medium mb-2">View Mode Controls:</h3>
        <ViewToggle
          currentMode={currentMode}
          onModeChange={setCurrentMode}
        />
      </div>
      <div className="p-3 bg-muted rounded-md">
        <span className="text-sm text-muted-foreground">
          Current mode: <strong>{currentMode}</strong>
        </span>
      </div>
    </div>
  );
}