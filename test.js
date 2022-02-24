const fs = require('fs');
let text = [];
let listOfContributors = [];
let listOfProjects = [];



try {
    const data = fs.readFileSync('a_an_example.in.txt', 'utf8')
    text = data;
} catch (err) {
    console.error(err)
}
text = text.split('\n');
const contributors = text[0][0];
const projects = text[0][2];
//console.log(text);

class Contributor {
    constructor(name, skills, listOfSkills) {
        this.name = name;
        this.skills = skills;
        this.listOfSkills = listOfSkills;
    }
}

class Project {
    constructor(name, duration, points, day, skills, listOfSkills) {
        this.name = name;
        this.duration = duration;
        this.points = points;
        this.day = day;
        this.skills = skills;
        this.listOfSkills = listOfSkills;
    }
}
let i = 1;
while ( listOfContributors.length < contributors) {
    let listOfSkills = [];
    for (let j=0;j<text[i].split(' ')[1];j++) {
        let obj = {name:text[i+1+j].split(' ')[0].toString(), value:text[i+1+j].split(' ')[1]}
        listOfSkills.push(obj);
    }
    let contributor = new Contributor(text[i].split(' ')[0], text[i].split(' ')[1], listOfSkills);
    listOfContributors.push(contributor);
    i = i +1+ parseInt(text[i].split(' ')[1]);
}

while (listOfProjects.length < projects) {
    let listOfSkills = [];
    for (let j=0;j<text[i].split(' ')[4];j++) {
        let obj = {name:text[i+1+j].split(' ')[0].toString(), value:text[i+1+j].split(' ')[1]}
        listOfSkills.push(obj);
    }
    let project = new Project(text[i].split(' ')[0], text[i].split(' ')[1], text[i].split(' ')[2], text[i].split(' ')[3], text[i].split(' ')[4], listOfSkills);
    listOfProjects.push(project);
    i = i +1+ parseInt(text[i].split(' ')[4]);
}




//console.log(listOfContributors);
//console.log(listOfProjects);


