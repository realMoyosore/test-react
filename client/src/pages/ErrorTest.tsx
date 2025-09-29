import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Bomb } from 'lucide-react';

export default function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // Intentionally throw an error to test ErrorBoundary
    throw new Error('This is a test error to demonstrate the Error Boundary functionality');
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Error Test Page</h1>
          <p className="text-muted-foreground">
            This page is designed to test the Error Boundary component
          </p>
        </div>

        <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
          <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          <AlertTitle className="text-orange-800 dark:text-orange-200">Test Environment</AlertTitle>
          <AlertDescription className="text-orange-700 dark:text-orange-300">
            This page intentionally triggers errors to test error handling. Click the button below to trigger an error that will be caught by the Error Boundary.
          </AlertDescription>
        </Alert>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Error Boundary Test</h2>
          <p className="text-muted-foreground mb-4">
            When you click the button below, this component will throw an error. The Error Boundary should catch it and display a user-friendly error message with options to recover.
          </p>
          
          <Button
            onClick={() => setShouldError(true)}
            variant="destructive"
            data-testid="button-trigger-error"
            className="w-full"
          >
            <Bomb className="h-4 w-4 mr-2" />
            Trigger Error (Test Error Boundary)
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-3 text-foreground">What should happen:</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Click the "Trigger Error" button above</li>
            <li>An error will be thrown in this component</li>
            <li>The Error Boundary will catch the error</li>
            <li>You'll see a user-friendly error message</li>
            <li>You'll have options to "Try Again" or "Reload Page"</li>
          </ol>
        </div>
      </div>
    </div>
  );
}