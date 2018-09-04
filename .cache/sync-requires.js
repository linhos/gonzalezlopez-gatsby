// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/carlos/projects/gonzalezlopez-gatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/carlos/projects/gonzalezlopez-gatsby/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/carlos/projects/gonzalezlopez-gatsby/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/json/dev-404-page.json"),
  "404.json": require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/json/404.json"),
  "index.json": require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/json/index.json"),
  "page-2.json": require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/json/page-2.json"),
  "404-html.json": require("/home/carlos/projects/gonzalezlopez-gatsby/.cache/json/404-html.json")
}