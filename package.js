Package.describe({
  summary: "Meteor packaging of the syntax highlighting library Prism.js (by Lea Verou)."
});

Package.on_use(function (api, where) {
  api.add_files(['prism.js', 'prism.css'], 'client');
});