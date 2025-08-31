
const config = {
    autosize: true,
    displayModeBar: false,
    staticPlot: true,
    showticklabels: true
};

function graph(exp, name, domain, range) {
    multi_graph([exp], name, domain, range);
}

function graph_inverse(exp, name, domain, range) {
// Generate values
    const xValues = [];
    const yValues = [];
    for (let y = domain[0]; y <= domain[1] * 5; y += .01) {
        xValues.push(eval(exp));
        yValues.push(y);
    }
    __plot_graph(xValues, yValues, domain, range, name)
}

function multi_graph(exps, name, domain, range) {
// Generate values
    const xValues = [];
    const yValues = [];
    var title = ""

    for (let current_exp = 0; current_exp < exps.length; current_exp++) {
        title = title + ", " + exps[current_exp];
        for (let x = domain[0]; x <= domain[1] * 5; x += .01) {
            xValues.push(x);
            yValues.push(eval(exps[current_exp]));
        }
    }
    __plot_graph(xValues, yValues, domain, range, name);
}

function __plot_graph(xValues, yValues, domain, range, name) {
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    const layout = {
        // title: {text: "y = " + title},
        xaxis: {
            title: {text: "x"},
            range: domain,
            scaleanchor: 'y',
            constrain: 'domain'
        },
        yaxis: {
            title: {text: "y"},
            range: range,
            scaleratio: 1,
            conatrin: 'domain'
        },
    };

    Plotly.newPlot(name, data, layout, config);
}