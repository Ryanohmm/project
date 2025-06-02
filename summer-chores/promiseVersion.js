function mowYard(personName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${personName} mowed the yard.`);
            resolve();
        }, 2000);
    });
}

function weedEat(personName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(`${personName} finished using the weed eater.`);
                resolve();
            } else {
                reject(`${personName} fell asleep after mowing the yard.`);
            }
        }, 1500);
    });
}

function trimHedges(personName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log(`${personName} finished trimming the hedges.`);
                resolve();
            } else {
                reject(`${personName} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
}

function collectWood(personName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                console.log(`${personName} finished collecting wood.`);
                resolve();
            } else {
                reject(`${personName} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
}

function waterGarden(personName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.25) {
                console.log(`${personName} finished watering the garden.`);
                resolve();
            } else {
                reject(`${personName} fell asleep after collecting wood.`);
            }
        }, 500);
    });
}

function doSummerChores(personName) {
    mowYard(personName)
        .then(() => weedEat(personName))
        .then(() => trimHedges(personName))
        .then(() => collectWood(personName))
        .then(() => waterGarden(personName))
        .then(() => console.log(`${personName} finished all their chores!`))
        .catch((error) => console.log(error));
}


doSummerChores('Ryan');