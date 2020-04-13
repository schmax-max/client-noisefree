let env = process.env.NODE_ENV || "development"
// env = "production"
const project = process.env.GATSBY_GCP_PROJECT

const editorLinks = {
  development: "http://localhost:8093/editor/server/",
  production: `https://editor-dot-${project}.appspot.com/editor/server/`,
}

module.exports = {
  editorLink: editorLinks[env],
}
