/*global require,exports*/
/********************************************************************
 * Copyright (C) 2024
 *
 * @author wanghaiyang
 * @date 2025/03/24
 *
 ********************************************************************
 */
'use strict'
var lib = require('./jsonbyxpath')
module.exports = {
    parseJSONValueType: lib.parseJSONValueType,
    getValueByXPath: lib.getValueByXPath,
    findValueByXPath: lib.findValueByXPath,
    setValueByXPath: lib.setValueByXPath
}