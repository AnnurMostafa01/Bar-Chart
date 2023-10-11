// Use JavaScript to load the Vega-Lite visualisation into the HTML page
var vg_1 = "daily_cost_bar_chart.vg.json";//contains the location of the Vega-Lite JSON file



vegaEmbed("#bar_chart", vg_1).then(function(result) { //embeds the Vega-Lite visualisation stored in “vg_1” in the div container named “bar_chart

//If you have more than one Vega-Lite visualisation, you can add another div container to the page,
//define a “vg_2” variable to embed the second (and third, etc.) Vega-Lite visualisations in the
//corresponding div.

    // Access the Vega view instance
//(https:vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

