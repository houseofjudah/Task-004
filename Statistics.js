// MEASURES OF CENTRAL TENDENCY
             

 let data = [ 1, 4, 6, 1, 8, 15, 18, 1, 5, 1 ]

                    // MEAN
// //const sum = data.reduce((acc, value) => acc + value, 0);
// const mean = sum / data.length;
// console.log(mean);


             // Median
// const sortedData = data.sort((a, b) => a - b);
// const median = sortedData[Math.floor(sortedData.length / 2)];

// console.log(median)

           // Mode

const freqData = {};
data.forEach((value) => {
freqData[value] = freqData[value] + 1 || 1;
});
const mode = Object.keys(freqData).reduce((a, b) =>
freqData[a] > freqData[b] ? a : b
);
console.log(mode);

        // Measures Of Dispersion



     //  Variance
const n = data.length;
const mean = data.reduce((a, b) => a + b) / n;
const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2))

console.log(variance)


                  // Range
const range = Math.max(...data) - Math.min(...data);
console.log(range)


const standardDeviation = Math.sqrt(variance);
console.log(standardDeviation);

const meanDeviation = data.reduce((a, b) => a + Math.abs(b - mean), 0) / n

console.log(meanDeviation);

const quartileDeviations = data.map(value => Math.abs(value - mean));