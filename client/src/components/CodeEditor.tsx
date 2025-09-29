import { useRef, useEffect } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  isDark?: boolean;
  placeholder?: string;
  className?: string;
}

export default function CodeEditor({ 
  value, 
  onChange, 
  isDark = false, 
  placeholder = "Start typing your markdown...",
  className = ""
}: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView>();

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        markdown(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange(update.state.doc.toString());
          }
        }),
        EditorView.theme({
          '&': {
            height: '100%',
            fontSize: '14px',
            fontFamily: 'var(--font-mono)',
          },
          '.cm-content': {
            padding: '16px',
            minHeight: '100%',
          },
          '.cm-focused': {
            outline: 'none',
          },
          '.cm-editor': {
            height: '100%',
          },
          '.cm-scroller': {
            height: '100%',
          }
        }),
        EditorView.contentAttributes.of({
          'aria-label': 'Markdown editor',
          'data-testid': 'markdown-editor'
        }),
        ...(isDark ? [oneDark] : [])
      ]
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, [isDark]);

  useEffect(() => {
    if (viewRef.current && viewRef.current.state.doc.toString() !== value) {
      const transaction = viewRef.current.state.update({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: value
        }
      });
      viewRef.current.dispatch(transaction);
    }
  }, [value]);

  return (
    <div 
      ref={editorRef} 
      className={`h-full w-full bg-card border border-border rounded-md overflow-hidden ${className}`}
      role="textbox"
      aria-label="Markdown editor"
    />
  );
}