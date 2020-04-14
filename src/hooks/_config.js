let env = process.env.NODE_ENV || "development"
// env = "production"
const project = process.env.GATSBY_GCP_PROJECT

const editorLinks = {
  development: "http://localhost:8093/editor/server/",
  production: `https://editor-dot-${project}.appspot.com/editor/server/`,
}

const cleanerLinks = {
  development: "http://localhost:8082/helper-cleaner/server/",
  production: `https://helper-cleaner-dot-${project}.appspot.com/helper-cleaner/server/`,
}

module.exports = {
  editor: editorLinks[env],
  cleaner: cleanerLinks[env],
}
