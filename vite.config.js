import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({
    exportAsDefault: true,
    namedExport: false,
    replaceAttrValues: { "#000": "currentColor" },
      template: (variables, { tpl }) => tpl`
        import React from 'react';
        const ${variables.componentName.replace(/^Svg/, '')} = (props) => ${variables.jsx};
        export default ${variables.componentName.replace(/^Svg/, '')};
      `,
    }),
  ],
})
