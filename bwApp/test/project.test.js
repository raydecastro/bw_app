'use strict';

var assert = require('chai').assert;
var Project = require('../app/scripts/project.js');

describe('Project', function () {
    it('should exist', function () {
        var project = new Project(); 

        assert.notEqual(project, undefined);
    });
    it('should have an id', function () {
        var project = new Project(); 

        project.id = 1;
        assert.equal(project.id, 1);
    });
    it('should have child projects', function () {
        var main = new Project(); 
        var project_sub1 = new Project(); 
        var project_sub2 = new Project();
        var project_sub3 = new Project();

        main.addProject(project_sub1);
        main.addProject(project_sub2);
        main.addProject(project_sub3);

        main.getProjectCount();

        assert.equal(main.getProjectCount(), 3);
    });
});