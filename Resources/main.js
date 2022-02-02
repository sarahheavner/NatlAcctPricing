//connect to StatsSummary csv, read data
d3.csv("Resources/CleanData/InvStats.csv").then(function(tData) {
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


//data for pie chart invoice count summary
d3.csv("Resources/CleanData/InvStats.csv").then(function(invData) {
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
        branch_amt.push(invData[i].Annual$);
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
        textinfo: "label+percent",
        hole: 0.4,
        type: "pie"
    },{
        values: branch_amt,
        labels: branch_name,
        domain: {column: 1},
        name: "Dollar Amount",
        textinfo: "label+percent",
        hole: 0.4,
        type: "pie"
    }];
            
    console.log(pieData);
    
    var layout = {
        annotations: [
            {
                font: {
                    size: 13
                },
                showarrow:false,
                text: "Inv Count",
                x: 0.17,
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
        width: 550,
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
            color: "#E1361E",
            opacity: 0.85,
            line: {
                color: "#701b0f",
                width: 1
            }
        },
        type: "bar"
    };

    var NoIssueTrace = {
        x: branch_name,
        y: branch_no_issue,
        name: "No Issue",
        marker: {
            color: "#1EC9E1",
            opacity: 0.85,
            line: {
                color: "#0f6570",
                width: 1
            }
        },
        type: "bar"
    };

    var barData = [issueTrace, NoIssueTrace];

    var barlayout = {
        barmode: "group",
        height: 400,
        width: 550,
    };

    Plotly.newPlot("bar", barData, barlayout);

});


//data for monthly dollar summary
d3.csv("Resources/CleanData/InvStats.csv").then(function(dollarData) {
    console.log(dollarData);

    var branch_name = [];
    var january = [];
    var february = [];
    var march = [];
    var april = [];
    var may = [];
    var june = [];
    var july= [];
    var august = [];
    var september = [];
    var october = [];
    var november = [];
    var december = [];

    for (var i = 0; i < dollarData.length; i++) {
        branch_name.push(dollarData[i].Branch);
        january.push(dollarData[i].January);
        february.push(dollarData[i].February);
        march.push(dollarData[i].March);
        april.push(dollarData[i].April);
        may.push(dollarData[i].May);
        june.push(dollarData[i].June);
        july.push(dollarData[i].July);
        august.push(dollarData[i].August);
        september.push(dollarData[i].September);
        october.push(dollarData[i].October);
        november.push(dollarData[i].November);  
        december.push(dollarData[i].December);
    };

    console.log(branch_name);
    console.log(january);
    console.log(february);
    console.log(march);
    console.log(april);
    console.log(may);
    console.log(june);
    console.log(july);
    console.log(august);
    console.log(september);
    console.log(october);
    console.log(november);
    console.log(december);


    var traceabq = {
        x: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        y: [january[0], february[0], march[0], april[0], may[0], june[0], july[0], august[0], september[0], october[0], november[0], december[0]],
        name: "ABQ",
        type: "line",
        marker: {
            color: "#009933"
        },
    };

    var traceden = {
        x: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        y: [january[1], february[1], march[1], april[1], may[1], june[1], july[1], august[1], september[1], october[1], november[1], december[1]],
        name: "DEN",
        type: "line",
        marker: {
            color: "#0066ff"
        },
    };

    var traceslc = {
        x: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        y: [january[2], february[2], march[2], april[2], may[2], june[2], july[2], august[2], september[2], october[2], november[2], december[2]],
        name: "SLC",
        type: "line", 
        marker: {
            color: "#ff6600"
        },
    };


    //bar chart
    var lineData = [traceabq, traceden, traceslc]
    layout = {
        height: 450,
        width: 550
    };

    Plotly.newPlot("line", lineData, layout);
 
});


//customer dollars per branch
d3.csv("Resources/CleanData/CustDollars.csv").then(function(customerData) {
    console.log(customerData);

    var branch_name = [];
    var Amazon = [];
    var Americold = [];
    var Aramsco = [];
    var BakerDist = [];
    var BigLots = [];
    var Bunzl = [];
    var CompositesOne = [];
    var Costco = [];
    var DHL = [];
    var Ferguson = [];
    var Gensco = [];
    var Grainger = [];
    var HarborFreight = [];
    var HD_Pro = []; 
    var HD_Supply = [];
    var HomeDepot = []; 
    var Ikea = []; 
    var KeHE = [];
    var KuehneNagel = [];
    var Lineage = [];
    var MattressFirm = [];
    var Medline = [];
    var OfficeDepot = [];
    var Peloton = [];
    var Petco = [];
    var SamsClub = [];
    var Sealy = [];
    var TireCenters = [];
    var US_Auto = [];
    var Walmart = [];
    var Wayfair = [];
    var XPO = [];
    var XPO_LM = [];

    for(var i = 0; i < customerData.length; i++) {
        branch_name.push(customerData[i].Branch);
        Amazon.push(customerData[i].Amazon);
        Americold.push(customerData[i].Americold);
        Aramsco.push(customerData[i].Aramsco);
        BakerDist.push(customerData[i].BakerDist);
        BigLots.push(customerData[i].BigLots);
        Bunzl.push(customerData[i].Bunzl);
        CompositesOne.push(customerData[i].CompositesOne);
        Costco.push(customerData[i].Costco);
        DHL.push(customerData[i].DHL);
        Ferguson.push(customerData[i].Ferguson);
        Gensco.push(customerData[i].Gensco);
        Grainger.push(customerData[i].Grainger);
        HarborFreight.push(customerData[i].HarborFreight);
        HD_Pro.push(customerData[i].HD_Pro);
        HD_Supply.push(customerData[i].HD_Supply);
        HomeDepot.push(customerData[i].HomeDepot);
        Ikea.push(customerData[i].Ikea);
        KeHE.push(customerData[i].KeHE);
        KuehneNagel.push(customerData[i].KuehneNagel);
        Lineage.push(customerData[i].Lineage);
        MattressFirm.push(customerData[i].MattressFirm);
        Medline.push(customerData[i].Medline);
        OfficeDepot.push(customerData[i].OfficeDepot);
        Peloton.push(customerData[i].Peloton);
        Petco.push(customerData[i].Petco);
        SamsClub.push(customerData[i].SamsClub);
        Sealy.push(customerData[i].Sealy);
        TireCenters.push(customerData[i].TireCenters);
        US_Auto.push(customerData[i].US_Auto);
        Walmart.push(customerData[i].Walmart);
        Wayfair.push(customerData[i].Wayfair);
        XPO.push(customerData[i].XPO);
        XPO_LM.push(customerData[i].XPO_LM);
    };



});



