// connect to statsummary json
var tData = d3.json("Resources/CleanData/StatSummary.json").then((data) => {
    console.log(data);
});

console.log(typeof tData);



// reference to table body
var tbody = d3.select("tbody");

tData.forEach((Branch) => {
    var row = tbody.append("tr");
    Object.entries(Branch).forEach(([key, value]) => {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);   
    });
});







