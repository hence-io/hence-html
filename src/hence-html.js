'use strict';
/**
 * @module hence-html
 */

import Hence from 'hence-component-framework';

/**
 * HenceHtml Component
 * @constructor
 */
let HenceHtml = Hence.Ui({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-html',
  properties: {
    content: {
      type: String,
      observer: '_renderContent'
    }
  },

  /*********************************************************************************************************************
   * Observables
   ********************************************************************************************************************/

    _renderContent(content) {
    this.$.content.innerHTML = content;
  }
});

export default HenceHtml;
