// Bootstrap ships separate LTR and RTL stylesheets. They are served from /public so the
// app can swap between them at runtime when the language changes (see src/i18n/index.js).
const fs = require('fs');
const path = require('path');

const from = path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'css');
const to = path.join(__dirname, '..', 'public', 'bootstrap');
fs.mkdirSync(to, { recursive: true });
['bootstrap.min.css', 'bootstrap.rtl.min.css'].forEach((file) => {
  fs.copyFileSync(path.join(from, file), path.join(to, file));
});
