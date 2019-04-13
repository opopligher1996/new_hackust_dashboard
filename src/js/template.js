// html skeleton provider
function template(title, initialState = {}, content = "", bundles = []){
  let scripts = ''; // Dynamically ship scripts based on render type
  let stylesheet = (content)?'client':'bundle';
  if(content){
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/assets/client.js"></script>
                ${bundles.map(bundle => {
                    if(bundle.file.slice(-2) === 'js')
                      return `<script src="${bundle.publicPath}"></script>`
                      // alternatively if you are using publicPath option in webpack config
                      // you can use the publicPath value from bundle, e.g:
                      // return `<script src="${bundle.publicPath}"></script>`
                      }).join('\n')
                }
                `
  } else {
    scripts = ` <script src="/assets/bundle.js"> </script>`
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="/assets/${stylesheet}.css" rel="stylesheet"/>
                ${bundles.map(bundle => {
                    if(bundle.file.slice(-3) === 'css')
                      return `<link href="${bundle.publicPath}" as="style" rel="preload"/>`
                      // alternatively if you are using publicPath option in webpack config
                      // you can use the publicPath value from bundle, e.g:
                      // return `<script src="${bundle.publicPath}"></script>`
                      }).join('\n')
                }
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              `;

  return page;
}

module.exports = template;
