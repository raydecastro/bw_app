'use strict';

var assert = require('chai').assert;
var Project = require('../app/scripts/project.js');

describe('Project', function () {
    it('should exist', function () {
        var project = new Project(); 

        assert.notEqual(project, undefined);
    });
});
