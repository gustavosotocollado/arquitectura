Despliegue rápido

Opciones:

1) Vercel (recomendado)
- Conectar tu repo en https://vercel.com/new y seleccionar la cuenta/organización.
- Si no quieres conectar el repo, instala la CLI y despliega desde la carpeta local:
  npm i -g vercel
  vercel login
  vercel --prod

2) Netlify
- En Netlify, crear un nuevo sitio y conectar tu repo o arrastrar la carpeta `dist`.
- CLI:
  npm i -g netlify-cli
  netlify login
  netlify deploy --prod --dir=dist

3) GitHub Pages
- Añadido script `deploy` que usa `gh-pages`.
- Instala dependencias y ejecuta:
  npm install
  npm run deploy

Notas:
- Antes de desplegar asegúrate de haber hecho `npm run build` o ejecutado los scripts de deploy que ejecutan `predeploy`.
- Para despliegue automático con Vercel/Netlify conecta tu repo y las plataformas desplegarán al hacer push.
