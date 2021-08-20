const fs = require('fs');

try {  
  const documentStyles = fs.readFileSync('./style.css');
  const document = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.0/styles/default.min.css">
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.0/highlight.min.js"></script>
    </head>
    <body>
    <label>Flex Box</label>
    <pre><code class="css">${documentStyles}</code></pre>
    <label>Flex Box</label>
    </body>
  </html>
`;

fs.appendFile('css.html', document, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
} catch(e) {
    console.log('Error:', e.stack);
}