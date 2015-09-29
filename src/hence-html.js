'use strict';
/**
 * @module hence-html
 */

import Hence from 'hence-component-framework';
import _isString from 'lodash/lang/isString';

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
    let target = this.$.content;

    // If the parameter comes through as an HTML node, we want to append it to ensure it displays
    if (!_isString(content)) {
      target.appendChild(content);
    } else { // Else, just render it as raw html
      target.innerHTML = content;
    }
  }
});

export default HenceHtml;
