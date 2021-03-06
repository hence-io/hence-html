'use strict';

import HenceHtml from './hence-html';
import docReady from 'doc-ready';

// Ensure we're waiting for the document to actually be loaded before interacting with it.
docReady(()=> {
  // Location to bind preview components too. Use this to ensure the style guide will display these too.
  let componentPreviewBox = document.getElementById('component-previews');

  // Spawn various states of the component to preview them side by side
  var content = document.createElement('div');
  content.innerHTML = "This <b>is my html</b> Content";

  HenceHtml.appendElementTo({
    content: content
  }, componentPreviewBox);
});
