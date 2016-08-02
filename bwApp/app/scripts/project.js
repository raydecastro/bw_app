'use strict';

var love = love || {};

(function(namespace) {
    namespace.Project = Project;

    function Project() {
        this.subProjects = [];         
    }

    Project.prototype.addProject = function(project) {
        this.subProjects.push(project);
    };

    Project.prototype.getProjectCount = function () {
        return this.subProjects.length; 
    };
    
    module.exports = Project;

})(love);