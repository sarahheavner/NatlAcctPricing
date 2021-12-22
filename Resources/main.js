//connect to StatsSummary csv, read data
d3.csv("Resources/CleanData/StatSummary.csv").then(function(tData) {
    console.log(tData);

    //select tablebody to append stats
    var tbody = d3.select("tbody");

    //loop through data, collect keys and values from each Object and append to table rows/cells
    tData.forEach(function(stats) {
        var row = tbody.append("tr");
        Object.entries(stats).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});


//data for pie chart invoice summary
d3.csv("Resources/CleanData/StatSummary.csv").then(function(invData) {
    console.log(invData);

    // create variable for branch name (Labels) and Invoice Count (Data)
    var branch_inv = []
    var branch_name = []

    // loop through rows 0-2 of csv to save branch data. Do not last row for chart.
    for (var i = 0; i < 3; i++) {
        branch_inv.push(invData[i].Total_Inv);
        console.log(branch_inv)
        branch_name.push(invData[i].Branch);
        console.log(branch_name)
    };


//variable for pie chart
    var pieData = [{
        values: branch_inv,
        labels: branch_name,
        type: "pie"
    }];

        
    console.log(pieData);



    Plotly.newPlot("pie", pieData)
});
