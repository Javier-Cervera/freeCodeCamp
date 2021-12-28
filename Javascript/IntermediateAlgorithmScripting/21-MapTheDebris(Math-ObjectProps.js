function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(x => {
        x.orbitalPeriod = Math.round(Math.sqrt(Math.pow(earthRadius + x.avgAlt, 3) / GM) * 2 * Math.PI);
        delete x.avgAlt;
        return x
    })
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));