// import {domain} from "plotly.js/src/traces/pie/attributes";

const config = {
    autosize: true,
    displayModeBar: false,
    staticPlot: true,
    showticklabels: true,
    // showLegend: false
};

function graph(exp, name, domain, range) {
    multi_graph([exp], name, domain, range);
    // graph_parametric("t", exp.replaceAll('x', 't'), name, domain, range);
}

function graph_inverse(exp, name, domain, range) {
// Generate values
//     const xValues = [];
//     const yValues = [];
//     for (let y = domain[0]; y <= domain[1] * 5; y += .01) {
//         xValues.push(eval(exp));
//         yValues.push(y);
//     }
//     let trace = [__make_trace(xValues, yValues)];
//     __plot_graph(trace, domain, range, name);
    graph_parametric(exp.replaceAll('y', 't'), 't', name, domain, range);
}

function graph_parametric(x_eq, y_eq, name, domain_t, range_xy) {
    const xValues = [];
    const yValues = [];
    for (let t = domain_t[0]; t <= domain_t[1]; t += .01) {
        xValues.push(eval(x_eq));
        yValues.push(eval(y_eq));
    }
    let trace = [__make_trace(xValues, yValues)];
    __plot_graph(trace, domain_t, range_xy, name);
}

function multi_graph(exps, name, domain, range) {
    const traces = [];
    for (let current_exp = 0; current_exp < exps.length; current_exp++) {
        const xValues = [];
        const yValues = [];
        for (let x = domain[0]; x <= domain[1] * 5; x += .01) {
            xValues.push(x);
            yValues.push(eval(exps[current_exp]));
        }

        traces.push(__make_trace(xValues, yValues));
    }
    __plot_graph(traces, domain, range, name);
}

function polar_graph(exp, _name, domain, theta_range=[0, 360], accuracy=6) {
    const rhoValues = [];
    const thetaValues = [];

    for (let theta = theta_range[0]; theta <= theta_range[1]; theta += accuracy) {
        let rho = eval(exp);
        console.log("r " + rho);
        console.log("theta " + theta);
        if (rho >= 0) {
            thetaValues.push(toDegrees(theta));
            rhoValues.push(rho);
        } else {
            thetaValues.push(toDegrees(theta) + 180);
            rhoValues.push(-rho);
        }

    }
    let _data = [{r: rhoValues, theta: thetaValues, mode: 'lines', type: 'scatterpolar'}];
    let layout = {
        polar: {
            radialaxis: {
                range: domain,
                constrain: 'domain'
            },
            angularaxis: {
                direction: 'counterclockwise'
            },
            theta: {
            },
            name: _name,
        },
        };

    Plotly.newPlot(_name, _data, layout, config);
}

function __plot_graph(traces, domain, range, name) {
    const layout = {
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
            constrain: 'domain'
        },
    };

    Plotly.newPlot(name, traces, layout, config);
}

function __make_trace(xValues, yValues) {
    return {x: xValues, y: yValues, mode: 'lines', line: {color: 'blue'}, showlegend: false}
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}