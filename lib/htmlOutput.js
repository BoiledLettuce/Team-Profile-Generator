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
        .map(engineer => renderEngineer(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return outputMain(html.join(""));

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf-8");
    template = replaceStuff(template, "name", manager.getName());
    template = replaceStuff(template, "role", manager.getRole());
    template = replaceStuff(template, "email", manager.getEmail());
    template = replaceStuff(template, "id", manager.getId());
    template = replaceStuff(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf-8");
    template = replaceStuff(template, "name", engineer.getName());
    template = replaceStuff(template, "role", engineer.getRole());
    template = replaceStuff(template, "email", engineer.getEmail());
    template = replaceStuff(template, "id", engineer.getId());
    template = replaceStuff(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf-8");
    template = replaceStuff(template, "name", intern.getName());
    template = replaceStuff(template, "role", intern.getRole());
    template = replaceStuff(template, "email", intern.getEmail());
    template = replaceStuff(template, "id", intern.getId());
    template = replaceStuff(template, "college", intern.getCollege());
    return template;
};


const outputMain = html => {
    const template = fs.readFileSync(path.resolve(templateDir, "main.html"), "utf-8");
    return replaceStuff(template, "team", html);
};

const replaceStuff = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = output;