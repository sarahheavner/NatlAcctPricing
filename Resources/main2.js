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

