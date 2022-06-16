// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {

    #round(f,d=2) {
        return Math.round(f * Math.pow(10, d)) / Math.pow(10, d)
    }
    
    #freq() {
        const occurrences = {}
        for (let i = 0; i < this.data.length ; i++) {
            occurrences.hasOwnProperty(this.data[i])
                ? occurrences[this.data[i]]++
                : occurrences[this.data[i]] = 1
        }
        const sorted_by_value = Object.keys(occurrences).sort(function(a,b){return occurrences[b]-occurrences[a]})
        return { occurrences, sorted_by_value }
    }

    constructor(data) {
        this.data = [...data]
        this.data.sort((a, b) => a - b);
    }

    mean() {
        return this.data.reduce((sum,val) => sum+=val)/this.data.length
    }

    median() {
        return this.data.length % 2 != 0
            ? this.data.at(Math.floor(this.data.length/2))
            : this.data.slice(this.data.length/2-1, this.data.length/2).reduce((sum,v)=>sum+v)/2
    }

    mode() {
        const { occurrences, sorted_by_value } = this.#freq()
        const mode = {}
        for (const key of sorted_by_value) {
            if (Object.keys(mode).length < 1 || Object.values(mode).includes(occurrences[key]))
                mode[key] = occurrences[key]
            else break;
        }
        return mode
    }

    freqDist() {
        const { occurrences, sorted_by_value } = this.#freq()
        const sorted_freq_dist = []
        const count = this.count()
        for (let i = 0; i < sorted_by_value.length; i++) {
            const key = sorted_by_value[i]
            sorted_freq_dist.push([this.#round(Number(occurrences[key] / count * 100), 1), key])
        }
        return sorted_freq_dist

    }

    range() {
        return Math.abs(this.data.at(0) - this.data.at(-1))
    }

    var() {
        const avg = this.mean()
        const variance = this.data.reduce((sum_dev,v) => sum_dev += Math.pow(v-avg, 2), 0) / this.count()
        return this.#round(variance)
    }

    std() {
        return this.#round(Math.sqrt(this.var()))
    }
    
    count() {
        return this.data.length
    }

    sum() {
        return this.data.reduce((sum,v)=>sum+=v)
    }

    min() {
        return this.data.at(0)
    }
    
    max() {
        return this.data.at(-1)
    }

}

let statistics = new Statistics(ages)


console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0,
