'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "bmi-secret",
  // Control debug level for modules using visionmedia/debug
  DEBUG: '',
  STORMPATH_API_KEY_ID: '218GAVF749TC6NDV1Q6O5I3PX',
  STORMPATH_API_KEY_SECRET: 'TVuFxRoC1ZnGRw5ew0doT/wlT22dz05AMmIbhjVEs7w',
  STORMPATH_APP_HREF: 'https://api.stormpath.com/v1/applications/63EVVEqGJ7jvUt2LM9ufsy'
};
