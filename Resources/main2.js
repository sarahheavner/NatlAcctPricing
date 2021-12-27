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

//data for pie chart invoice count summary
d3.csv("Resources/CleanData/StatSummary.csv").then(function(invData) {
    console.log(invData);

    // create variable for branch name (Labels) and Invoice Counts (Data) for pie and bar charts
    var branch_inv = [];
    var branch_name = [];
    var branch_issue = [];
    var branch_no_issue = [];
    var branch_amt = [];

    // loop through rows 0-2 of csv to save branch data. Do not need last row for chart.
    for (var i = 0; i < 3; i++) {
        branch_inv.push(invData[i].Total_Inv);
        branch_name.push(invData[i].Branch);
        branch_issue.push(invData[i].Issue);
        branch_no_issue.push(invData[i].No_Issue);
        branch_amt.push(invData[i].Dollar_Amt);
    };
    console.log(branch_inv);
    console.log(branch_name);
    console.log(branch_issue);
    console.log(branch_no_issue);
    console.log(branch_amt);


    //variable for total invoice pie chart data, layout and formatting
    var pieData = [{
        values: branch_inv,
        labels: branch_name,
        domain: {column: 0},
        name: "Invoice Count",
        textinfo: "label+value+percent",
        hole: 0.4,
        type: "pie"
    },{
        values: branch_amt,
        labels: branch_name,
        domain: {column: 1},
        name: "Dollar Amount",
        textinfo: "label+value+percent",
        hole: 0.4,
        type: "pie"
    }];
            
    console.log(pieData);
    
    var layout = {
        title: "Invoice Stats per Branch",
        annotations: [
            {
                font: {
                    size: 13
                },
                showarrow:false,
                text: "Inv Count",
                x: 0.16,
                y: 0.5
            },
            {
                font: {
                    size:13
                },
                showarrow:false,
                text: "$$ Amt",
                x:0.82,
                y:0.5
            }
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: {rows: 1, columns: 2}
    };

    Plotly.newPlot("pie", pieData, layout)






    //variable for issue/no issue invoice count bar chart
    var issueTrace = {
        x: branch_name,
        y: branch_issue,
        name: "Issue",
        marker: {
            color: "#ff0000"
        },
        type: "bar"
    };

    var NoIssueTrace = {
        x: branch_name,
        y: branch_no_issue,
        name: "No Issue",
        marker: {
            color: "#009933"
        },
        type: "bar"
    };

    var barData = [issueTrace, NoIssueTrace];

    var barlayout = {barmode: "group"};

    Plotly.newPlot("bar", barData, barlayout);



});


