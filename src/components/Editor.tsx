import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Prism CSS for styling

// Ensure the Prism language components you need are imported
import 'prismjs/components/prism-javascript';


const Editor: React.FC = () => {
  const [code, setCode] = useState<string>(''); 

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="editor-container" style={{ display: 'flex' }}>
      <textarea
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{ width: '50%', height: '90vh', fontSize: '16px', fontFamily: 'monospace' }}
      />
      <pre
        style={{ width: '50%', height: '90vh', margin: 0, padding: '10px', overflow: 'auto', fontSize: '16px' }}
      >
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
};

export default Editor;
