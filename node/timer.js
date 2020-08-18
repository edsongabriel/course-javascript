const schedule = require('node-schedule');

const assignment1 = schedule.scheduleJob('*/5 * 16 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function () {
    assignment1.cancel();
    console.log('Cancelando tarefa 1!');
}, 20000);

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = (new schedule.Range(1, 5));
rule.hour = 16;
rule.second = 30;

const assignment2 = schedule.scheduleJob(rule, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds());
})