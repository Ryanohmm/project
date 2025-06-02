async function mowYard(personName) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`${personName} mowed the yard.`);
}

async function weedEat(personName) {
    await new Promise((resolve, reject) => setTimeout(() => {
        if (Math.random() > 0.2) {
            console.log(`${personName} finished using the weed eater.`);
            resolve();
        } else {
            reject(`${personName} fell asleep after mowing the yard.`);
        }
    }, 1050));
}

async function trimHedges(personName) {
    await new Promise((resolve, reject) => setTimeout(() => {
        if (Math.random() > 0.1) {
            console.log(`${personName} finished trimming the hedges.`);
            resolve();
        } else {
            reject(`${personName} fell asleep after weed eating the yard.`);
        }
    }, 1800));
}

async function collectWood(personName) {
    await new Promise((resolve, reject) => setTimeout(() => {
        if (Math.random() > 0.2) {
            console.log(`${personName} finished collecting wood.`);
            resolve();
        } else {
            reject(`${personName} fell asleep after trimming the hedges.`);
        }
    }, 1300));
}

async function waterGarden(personName) {
    await new Promise((resolve, reject) => setTimeout(() => {
        if (Math.random() > 0.3) {
            console.log(`${personName} finished watering the garden.`);
            resolve();
        } else {
            reject(`${personName} fell asleep after collecting wood.`);
        }
    }, 500));
}

async function doSummerChores(personName) {
    try {
        await mowYard(personName);
        await weedEat(personName);
        await trimHedges(personName);
        await collectWood(personName);
        await waterGarden(personName);
        console.log(`${personName} finished all their chores!`);
    } catch (error) {
        console.log(error);
    }
}


doSummerChores('Ryan');