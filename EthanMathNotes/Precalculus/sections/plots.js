
function graph(exp, name, domain, range) {
    multi_graph([exp], name, domain, range);
}

function graph_inverse(exp, name, domain, range) {
    // let sine_exp = "Math.sin(x)";

// Generate values
    const xValues = [];
    const yValues = [];
    for (let y = domain[0]; y <= domain[1] * Math.PI; y += .1) {
        xValues.push(eval(exp));
        yValues.push(y);
    }

// Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    const layout = {
        title: {text: "y = " + exp},
        xaxis: {
            title: {text: "x"},
            range: domain
        },
        yaxis: {
            title: {text: "y"},
            range: range
        },
        width: 800
    };

    const config = {
        displayModeBar: false,
        staticPlot: true,
        showticklabels: true
    };

    Plotly.newPlot(name, data, layout, config);
}

function multi_graph(exps, name, domain, range) {
// Generate values
    const xValues = [];
    const yValues = [];
    var title = ""

    for (let current_exp = 0; current_exp < exps.length; current_exp++) {
        title = title + ", " + exps[current_exp];
        for (let x = domain[0]; x <= domain[1] * Math.PI; x += .1) {
            xValues.push(x);
            yValues.push(eval(exps[current_exp]));
        }
    }



// Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    const layout = {
        title: {text: "y = " + title},
        xaxis: {
            title: {text: "x"},
            range: domain
        },
        yaxis: {
            title: {text: "y"},
            range: range
        },
        width: 800
    };

    const config = {
        displayModeBar: false,
        staticPlot: true,
        showticklabels: true
    };

    Plotly.newPlot(name, data, layout, config);
}