// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/pages/about.js")),
  "component---src-pages-code-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/pages/code.js")),
  "component---src-pages-design-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/pages/design.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/pages/index.js")),
  "component---src-pages-prototyping-js": preferDefault(require("/Users/adrianababakanian/Code/gatsby-starter-blog/src/pages/prototyping.js"))
}

exports.json = {
  "layout-index.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/layout-index.json"),
  "design-cal-hacks-branding.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design-cal-hacks-branding.json"),
  "code-dinestination.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/code-dinestination.json"),
  "prototyping-mo.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/prototyping-mo.json"),
  "design-dinestination.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design-dinestination.json"),
  "code-stubhub-city-pages.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/code-stubhub-city-pages.json"),
  "prototyping-pond-in-geared-motion.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/prototyping-pond-in-geared-motion.json"),
  "design-cal-hacks-4.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design-cal-hacks-4.json"),
  "code-cal-hacks-permanent-site.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/code-cal-hacks-permanent-site.json"),
  "prototyping-breathing-kirigami.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/prototyping-breathing-kirigami.json"),
  "code-cal-hacks-5-portal.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/code-cal-hacks-5-portal.json"),
  "design-doodles.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design-doodles.json"),
  "prototyping-drawing-machine.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/prototyping-drawing-machine.json"),
  "design-feaster.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design-feaster.json"),
  "design-innovative-design.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design-innovative-design.json"),
  "dev-404-page.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/404.json"),
  "about.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/about.json"),
  "code.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/code.json"),
  "design.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/design.json"),
  "index.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/index.json"),
  "prototyping.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/prototyping.json"),
  "404-html.json": require("/Users/adrianababakanian/Code/gatsby-starter-blog/.cache/json/404-html.json")
}