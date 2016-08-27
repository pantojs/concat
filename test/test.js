/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-08-27[11:38:03]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const ConcatTransformer = require('../');

describe('panto-transformer-concat', () => {
    describe('#transform', () => {
        it('should reject if no bundle', done => {
            const t = new ConcatTransformer();
            t.transformAll([{
                content: '1'
            }]).catch(e => done());
        });
        it('should concat emotion and mutiple-bytes word ', done => {
            const t = new ConcatTransformer({
                bundle: 'bundle.js'
            });
            t.transformAll([{
                filename: 'a.js',
                content: 'a'
            }, {
                filename: 'b.js',
                content: '😳'
            }, {
                filename: 'c.js',
                content: '我'
            }]).then(file => {
                assert.deepEqual(file.content, 'a😳我')
            }).then(() => done()).catch(e => console.error(e));
        });
        it('should support no file', done => {
            const t = new ConcatTransformer({
                bundle: 'bundle.js'
            });
            t.transformAll([]).then(file => {
                assert.deepEqual(file.content, '')
            }).then(() => done()).catch(e => console.error(e));
        });
        it('should sort by option "sortBy"', done => {
            const t = new ConcatTransformer({
                bundle: 'bundle.js',
                sortBy: (prev, next) => {
                    if (prev.filename > next.filename) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            });
            t.transformAll([{
                filename: 'b.js',
                content: 'b'
            }, {
                filename: 'a.js',
                content: 'a'
            }]).then(file => {
                assert.deepEqual(file.content, 'ab')
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});
