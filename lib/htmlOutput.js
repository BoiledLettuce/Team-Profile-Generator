const path = require("path");
const fs = require("fs");
const templateDir = path.resolve(__dirname, "../templates");

const output = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(enginer => renderEngineer(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return outputMain(html.join(""));

};

const renderManager = manager => {


};

const renderEngineer = engineer => {

};

const renderIntern = intern => {

};


const outputMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf-8");
    return replacePlaceholders(template, "team", html);
};

const replaceStuff = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = output;