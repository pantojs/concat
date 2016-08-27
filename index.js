/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-08-27[11:38:03]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');

class ConcatTransformer extends Transformer {
    transformAll(files) {

        const {
            sortBy,
            bundle
        } = this.options;

        let filename;

        let orderedFiles = files;

        if (panto._.isFunction(sortBy)) {
            orderedFiles = files.sort(sortBy);
        } else {
            panto.log.warn(`"sortBy" option for concat transformer should be a function`);
        }

        if (panto._.isFunction(bundle)) {
            filename = bundle.call(null, files);
        } else if (panto._.isString(bundle)) {
            filename = bundle;
        } else {
            return Promise.reject(new TypeError(
                `"bundle" option for concat transformer should be a string or function`));
        }

        const heap = Buffer.concat(orderedFiles.map(file => Buffer.from(file.content)));

        return Promise.resolve({
            filename,
            content: heap.toString()
        });
    }
    isTorrential() {
        return true;
    }
    isCacheable() {
        return false;
    }
}

module.exports = ConcatTransformer;
