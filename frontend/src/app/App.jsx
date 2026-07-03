// import { useState } from 'react'

import './App.css'
import { Editor } from "@monaco-editor/react"

function App() {

  const handleEditorMount = (editor, monaco) => {
    monaco.editor.defineTheme('cursor-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#0a0a0a',
        'editor.lineHighlightBackground': '#111111',
        'editorLineNumber.foreground': '#3a3a3a',
        'editorLineNumber.activeForeground': '#888888',
        'editorCursor.foreground': '#ffffff',
        'editor.selectionBackground': '#264f78',
        'editorGutter.background': '#0a0a0a',
      }
    })
    monaco.editor.setTheme('cursor-dark')
  }

  return (
   <main className="h-screen w-full flex bg-[#0a0a0a]">

    <aside className="h-full w-[250px] bg-[#0d0d0d] border-r border-[#1f1f1f]">
    </aside>

    <section className="flex-1 bg-[#0a0a0a]">

      <Editor
        height="100%"
        language="javascript"
        theme="vs-dark"
        onMount={handleEditorMount}
        options={{
          minimap: {
            enabled: false
          },
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          lineHeight: 22,
          padding: {
            top: 16
          },
          scrollBeyondLastLine: false,
          renderLineHighlight: 'line',
        }}
      />

    </section>


   </main>


  )
}

export default App