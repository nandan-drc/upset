function plotSetSelection() {
    var cellDistance = 20;
    var cellSize = 18;
    var w = 200;
    var headerHeight = 40;
    var setHeight = sets.length * cellSize
    var h =  setHeight + headerHeight;

    var truncateAfter = 25;


    d3.select("#setSelect").select("svg").remove();
    var svg = d3.select("#setSelect").append("svg").attr("width", w)
        .attr("height", h);

    svg.append("text").text("Choose Sets").attr({
        transform: 'translate(0, 20)'
    });

    var setRowScale = d3.scale.ordinal().rangeRoundBands([ headerHeight, h ], 0);
    setRowScale.domain(sets.map(function (d) {
        return d.id;
    }));

    var setGrp = svg.selectAll('.setRow')
        .data(sets)
        .enter()
        .append('g')
        .attr({transform: function (d, i) {
            return 'translate(0, ' + setRowScale(d.id) + ')';
            //  return 'translate(0, ' + ( cellDistance * (i)) + ')';
        },
            class: 'setRow'});



//    setGrp.append('rect').attr({
//        transform: function (d, i) {
//            return 'translate(' + (cellDistance * i ) + ', ' + setMatrixHeight + ')';
//        },
//        width: cellSize,
//        height: textHeight - 2,
//        class: "connection vertical"
//    })
//        .on("mouseover", function(d, i) {
//            d3.selectAll(".connection, .combination rect")
//                .style("opacity", .3)
//            d3.selectAll(".connection.diagonal").filter(function(dd, ii) { return ii == i;})
//                .style("opacity", 1)
//            d3.selectAll(".combination").selectAll("rect").filter(function(dd, ii) { return ii == i; })
//                .style("opacity", 1)
//            d3.select(this)
//                .style("opacity", 1)
//        })
//        .on("mouseout", function(d, i) {
//            d3.selectAll(".connection, .combination rect").style("opacity", 1)
//        })

    setGrp.append("text").text(
        function (d) {
            return d.elementName.substring(0, truncateAfter);
        }).attr({
            class: "setLabel",
            id: function (d) {
                return d.elementName.substring(0, truncateAfter);
            }
//            transform: function (d, i) {
//                return 'translate(' + (cellDistance * (i ) + cellDistance / 2) + ',' + (setMatrixHeight + textHeight - textSpacing) + ')rotate(270)';
//            }

        });

}