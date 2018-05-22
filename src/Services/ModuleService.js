let _singleton = Symbol();

const ADDRESS = 'http://localhost:8080';
const MODULE_API_URL =
    'http://localhost:8080/api/module';

class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
    //Finds all modules
    findAllModules() {
        return fetch(MODULE_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    //Creates a module
    createModule(module, id) {
        return fetch(ADDRESS+'/api/course/' + id +'/module', {
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    //Finds all modules for a certain course id
    findAllModulesForCourse(id) {
        return fetch(ADDRESS+'/api/course/' + id +'/module')
            .then(function(response){
                return response.json();
            });
    }
    //Deletes a module
    deleteModule(id){
        return fetch(MODULE_API_URL + "/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            return response.json();
        })
    }



}
export default ModuleService;