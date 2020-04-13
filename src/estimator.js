const covid19ImpactEstimator = (data) =>{ const input = data,
   const impact = { currentlyInfected: input.reportedCases * 10 } 
   const severeImpact= {currentlyInfected: input.reportedCases * 50}
   const { periodType } = input;
   const { timeToElapse } = input;

// const { region:{ avgDailyIncomeInUSD: dailyIncome } } = input;
// const { region: { avgDailyIncomePopulation: population } } = input;
  
impact.infectionsByRequestedTime = impact.currentlyInfected * parseInt(Math.pow(2,timeToElapse))


return{
data: input,
impact,
severeImpact
    };
};

export default covid19ImpactEstimator;
