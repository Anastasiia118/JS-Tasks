//вывести имена тех сотрудников, кто получает больше 1000

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

const getRichWorkers = (workersArr) => {
    const RichWorkers = [];

    workersArr.forEach( currentWorker => {
        if(currentWorker.salary > 1000){
            RichWorkers.push(currentWorker.name);
        }
    });

    return RichWorkers;
};



    
console.log(getRichWorkers(workers));