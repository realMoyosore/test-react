import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <div className="flex items-center gap-4 p-4">
      <span className="text-foreground">Toggle theme:</span>
      <ThemeToggle />
    </div>
  );
}