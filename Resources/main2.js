d3.csv("Resources/CleanData/StatSummary.csv").then(function(tData) {
    console.log(tData);

    var tbody = d3.select("tbody");

    tData.forEach(function(stats) {
        var row = tbody.append("tr");
        Object.entries(stats).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});

d3.csv("Resources/CleanData/StatSummary.csv").then(function(pieData) {
    console.log(pieData);

    // create variable for each branch total invoices
    var ABQ_INV = [];
    var DEN_INV = [];
    var SLC_INV = [];

    // loop through csv rows and store Total_Inv into variables based on Branch
    for (var i = 0; i < pieData.length; i++) {
        if (pieData[i].Branch === "ABQ") {
            ABQ_INV.push(pieData[i].Total_Inv);
            console.log(ABQ_INV)
        };
        if (pieData[i].Branch === "DEN") {
            DEN_INV.push(pieData[i].Total_Inv);
            console.log(DEN_INV)
        };
        if (pieData[i].Branch === "SLC") {
            SLC_INV.push(pieData[i].Total_Inv);
            console.log(SLC_INV)
        };
    };



});
