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



