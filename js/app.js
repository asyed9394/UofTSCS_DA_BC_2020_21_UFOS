// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var varFilters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
    //for debugging print something on console
    console.log("got to the updatefilters function");
    // 4a. Save the element that was changed as a variable.
    let varEventElement = d3.event.target
    // 4b. Save the value that was changed as a variable.
    let varValue = d3.event.target.value
    // 4c. Save the id of the filter that was changed as a variable.
    let varFilterID = varEventElement.id
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (varValue != "") {
      varFilters[varFilterID]= varValue ;
    }
    else { delete varFilters[varFilterID]; };
    //debugging
    console.log (varFilters);
    // 6. Call function to apply all filters and rebuild the table
    
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    ////debugging
    //console.log ("Got to filterTable function");
    //console.log(varFilters);
    
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
    // Using for loop
     for (let varFilterKey in varFilters) { 
    
    //  print info to console for debugging  
       console.log ("Got to varFilters.forEach");
       console.log (varFilterKey +"=" + varFilters[varFilterKey] + " and the data column name is " + varFilterKey);
    
       filteredData = filteredData.filter(row => row[varFilterKey] === varFilters[varFilterKey] );
      }
   

 
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#datetime").on("change", updateFilters);
  d3.selectAll("#city").on("change", updateFilters);
  d3.selectAll("#state").on("change", updateFilters);
  d3.selectAll("#country").on("change", updateFilters);
  d3.selectAll("#shape").on("change", updateFilters);
  // Build the table when the page loads
  buildTable(tableData);
