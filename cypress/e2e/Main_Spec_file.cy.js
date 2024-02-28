describe('Test suite - Envn. Variable', () => {
 
    // will need to execute the same set of tests on various test environments such as DEV, QA, UAT, etc. 
    // But there can be certain values/variables, such as the application URL or credentials, which can have different values on different test environments.
    //  To handle such situations, Cypress provides ways to access environment variables in the test scripts.

    // we can set env. variable in cypress in four ways .By configuring
    // 1. Cypress.config.js file 
    // 2. Creating cypress.env.json
    // 3. CMD >> CYPRESS_*
    // 4. CMD >> --env


    // for 3rd and 4th =- refer (https://www.toolsqa.com/cypress/environment-variables-in-cypress/) 
    //  && 
    //  (https://docs.cypress.io/guides/guides/environment-variables#Option-3-CYPRESS_)

   
// Cypress offers a method "env()" on the Cypress object, which provides access to all the environment variables. 


// // Access all the environment variables
// Cypress.env()

// // Access specific environment variable with a name
// Cypress.env(name)
// For Example, suppose we do have the following environment variables defined in the cypress.json file:

// {
//   "env": {
//     "Key1": "Value1",
//     "Key2": "Value2"
//   }
// }
// Now, if we want to access all the environment variables, we do it as follows:

// Cypress.env(); // It will return {Key1: "Value1", Key1: "Value2"}
// Similarly, if we want to access specific environment variables, It can be achieved as follows:

// Cypress.env("Key1"); // // It will return "Value1"


it('1. Cypress.config,js File', () => {


    // we can maintain test environment-specific URLs as environment variables and keep different config files for all the test environments.

    // Now let's update the URL we have been using for our test in cypress.config.js, and it should look like below :
    
    // {
    //   env: {
    //     "url": "https://shop.demoqa.com/my-account/"
    //   }
    // }

    const CONFIG_FILE_URL = Cypress.env('url_in_cypress_config_js_file')

    cy.visit(CONFIG_FILE_URL);

  });


it('2. Cypress.env.json file ', () => {

    // You can create your own cypress.env.json file that Cypress will automatically check. 
    // Values in here will overwrite conflicting environment variables in your Cypress configuration.

    // This strategy is useful because if you add cypress.env.json to your .gitignore file,
    //  the values in here can be different for each developer machine.

    // NOTE :  All the values provided in this file will always take precedence over the config file environment variables. They will be declared as a JSON and can be syntactically declared as follows:


    // -------Steps----------

    // create one file with the name cypress.env.json file 
    // Add the data in the file in json formt i.e key :value pair. Like this 

        // {
        //   "Key1": "Value1",
        //   "Key2": "Value2"
        // }

        const URL_FROM_ENV_FILE = Cypress.env("Env_File_URL")
        const random_value = Cypress.env("API_KEY")


        cy.visit(URL_FROM_ENV_FILE)
        cy.log(random_value) 
});


it.only('3. CYPRESS_* ', () => {
  
    // All the environment variables that start with either CYPRESS_ or cypress_ automatically act as an environment variable and 
    // accessible in the test files. Its syntax looks like below:

    // export cypress_access_token="ToolsQACypressTutorials"
        
    // export CYPRESS_env_variables="ShopDemoQAEnvironmentVariable"

    // All the environment variables declared from the command-line using the "export" command takes 
    // precedence over the values saved in cypress.config.js and cypress.env.json.

    const export_cypress_base_url = Cypress.env("CYPRESS_BASE_URL")
cy.visit(export_cypress_base_url)


});




});