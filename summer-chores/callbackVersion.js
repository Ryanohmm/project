function mowYard(personName, callback) {
    setTimeout(() => {
        console.log(`${personName} mowed the yard.`);
        callback();
    }, 2000); 
}


mowYard('Ryan', () => {
    console.log('Chore complete!');
});

function weedEat(personName, callback) {
    setTimeout(() => {
        if (Math.random() > 0.2) { 
            console.log(`${personName} finished using the weed eater.`);
            callback();
        } else {
            console.log(`${personName} fell asleep after mowing the yard.`);
        }
    }, 1500);
}
function trimHedges(personName, callback) {
    setTimeout(() => {
        if (Math.random() > 0.4) {
        console.log(`${personName} finished trimming the hedges`);
        callback();
        } else {
            console.log(`${personName} fell asleep after mowing the yard.`);
        }
    }, 2500);
}

function collectWood(personName, callback) {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            console.log(`${personName} finished collecting wood.`);
            callback();
        } else {
            console.log(`${personName} fell asleep after trimming the hedges.`);
        }
    }, 1750);
}
function waterGarden(personName, callback) {
    setTimeout(() => {
        if (Math.random() > 0.25) {
            console.log(`${personName} finished watering the garden.`);
            callback();
        } else {
            console.log(`${personName} fell asleep after collecting wood.`);
        }
    }, 500);
}

function doSummerChores(personName) {
    mowYard(personName, () => {
        weedEat(personName, () => {
            trimHedges(personName, () => {
                collectWood(personName, () => {
                    waterGarden(personName, () => {
                        console.log(`${personName} finished all their chores!`);
                    });
                });
            });
        });
    });
}


doSummerChores('Ryan');