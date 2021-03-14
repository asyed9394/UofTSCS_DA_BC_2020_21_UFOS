// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Above code is to point to the first tobody tag in the html file used for the program
// use id or name and created mulitiple select if there are many tbody tags in html

function buildTable(data) {
    //Clear the table in the html to esnure we are clearing old data
    tbody.html("");
    //Looped through each object in the array
    // and append a row and cells for each value in the row
    
    data.forEach((dataRow) => {
        //Appended a row to the HTML table
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}