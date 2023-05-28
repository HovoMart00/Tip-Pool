describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table on updateServerTable()', function () {
    // Create some sample servers in the allServers object
    allServers = {
      server1: {
        serverName: 'Alice'
      },
      server2: {
        serverName: 'Bob'
      }
    };

    // Call the updateServerTable function
    updateServerTable();

    // Get the table rows in the server table
    const tableRows = serverTbody.querySelectorAll('tr');

    // Expectations
    expect(tableRows.length).toEqual(2); // Two servers should be added to the table
    expect(tableRows[0].childNodes[0].innerText).toEqual('Alice'); // Check the server name in the first row
    expect(tableRows[1].childNodes[0].innerText).toEqual('Bob'); // Check the server name in the second row
  });


  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
