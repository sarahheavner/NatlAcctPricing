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

d3.csv("Resources/CleanData/StatSummary.csv").then(function(invData) {
    console.log(invData);

    // create variable for each branch total invoices
    var branch_inv = []
    var branch_name = []

    // loop through csv rows and store Total_Inv into variables based on Branch
    for (var i = 0; i < 3; i++) {
        branch_inv.push(invData[i].Total_Inv);
        console.log(branch_inv)
        branch_name.push(invData[i].Branch);
        console.log(branch_name)
    };


//variable for pie chart
    var data = [{
        values: branch_inv,
        labels: branch_name,
        type: "pie"
    }];

        
    console.log(data);



    Plotly.newPlot("pie", data)
});
