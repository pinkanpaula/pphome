
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/async"
  },
  {
    "renderMode": 0,
    "route": "/home"
  },
  {
    "renderMode": 0,
    "route": "/details/*"
  },
  {
    "renderMode": 0,
    "route": "/homedecor"
  },
  {
    "renderMode": 0,
    "route": "/marimdecor"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 497, hash: '0d06d7625cedf491fa5ea2bbfaa27eeea78c6faa745791d13d9f687926632c81', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '0fe40642e9e558848ecf15885f01d3224901154f5c8ae1c6d754d3f02a070f14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
