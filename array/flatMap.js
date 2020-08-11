const school = [
    {
        name: 'Turma M1',
        pupils: [
            {
                name: 'Gustavo',
                grade: 8.1
            },
            {
                name: 'Ana',
                grade: 9.3
            }
        ]
    },
    {
        name: 'Turma M2',
        pupils: [
            {
                name: 'Rebeca',
                grade: 8.9
            },
            {
                name: 'Roberto',
                grade: 7.3
            }
        ]
    }
];

const getGradePupils = element => element.grade;
const getGradeClasses = element => element.pupils.map(getGradePupils);
const grades1 = school.map(getGradeClasses)
console.log(grades1);

Array.prototype.flatMap = function (callback) { 
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getGradeClasses);
console.log(grades2); // [ 8.1, 9.3, 8.9, 7.3 ]