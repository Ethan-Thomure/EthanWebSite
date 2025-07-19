
function graph(exp, name, domain, range) {
    // let sine_exp = "Math.sin(x)";

// Generate values
    const xValues = [];
    const yValues = [];
    for (let x = domain[0]; x <= domain[1] * Math.PI; x += .1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }

// Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    const layout = {
        title: "y = " + exp,
        xaxis: {title: "x", range: domain},
        yaxis: {title: "y", range: range},
        width: 800
    };
    Plotly.newPlot(name, data, layout);
}
