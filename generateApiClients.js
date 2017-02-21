(function(){

    var FILE_ENCODING = 'UTF-8';

    var fs = require('fs');
    var YAML = require('yamljs');
    var CodeGen = require('swagger-js-codegen').CodeGen;

    generateClients();

    function generateClients(){
        generateDataDownloaderClient();
    }

    function generateDataDownloaderClient(){

        var swaggerDefinitionFilePath = '../../api/docs/v3/datadownload.swagger.yaml';
        var generatedFilePath = 'resources/angular/apiRequest/swaggerClient.DataDownloaderRequest.js';
        var fileContent = fs.readFileSync( swaggerDefinitionFilePath, FILE_ENCODING );
        var swaggerDefinition = YAML.parse( fileContent );
        var angularSourceCode = CodeGen.getAngularCode({
            moduleName:'swaggerClient.DataDownloaderRequest',
            className:'DataDownloaderRequest',
            swagger:swaggerDefinition
        });

        fs.writeFile( generatedFilePath, angularSourceCode, FILE_ENCODING );

    }

})();