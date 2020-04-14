const covid19ImpactEstimator = (data) => {
    const input = data,
    impact = { currentlyInfected: input.reportedCases * 10 }
    const severeImpact = { currentlyInfected: input.reportedCases * 50 }
    const { periodType } = input;
    const { timeToElapse } = input;
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** timeToElapse);
 

 
return {
        data: input,
        impact: {},
        severeImpact: {}
    },
},

export default covid19ImpactEstimator;
