describe("Helpers test", function() {
    it('should correctly calculate the sum of payment totals on sumPaymentTotal()', function () {
      // Create some sample payments in the allPayments object
      allPayments = {
        payment1: {
          billAmt: '20',
          tipAmt: '5',
          tipPercent: 25
        },
        payment2: {
          billAmt: '30',
          tipAmt: '7',
          tipPercent: 23.33
        }
      };
  
      // Call the sumPaymentTotal function with different types
      const billAmtTotal = sumPaymentTotal('billAmt');
      const tipAmtTotal = sumPaymentTotal('tipAmt');
      const tipPercentTotal = sumPaymentTotal('tipPercent');
  
      // Expectations
      expect(billAmtTotal).toEqual(50); // Sum of bill amounts: 20 + 30 = 50
      expect(tipAmtTotal).toEqual(12); // Sum of tip amounts: 5 + 7 = 12
      expect(tipPercentTotal).toEqual(48.33); // Sum of tip percentages: 25 + 23.33 = 48.33
    });
  
    it('should correctly calculate the tip percentage on calculateTipPercent()', function () {
      // Call the calculateTipPercent function with different bill amounts and tip amounts
      const tipPercent1 = calculateTipPercent(40, 10); // 25%
      const tipPercent2 = calculateTipPercent(25, 5); // 20%
  
      // Expectations
      expect(tipPercent1).toEqual(25);
      expect(tipPercent2).toEqual(20);
    });
  
    it('should append a new td element to a table row on appendTd()', function () {
      // Create a new table row element
      const tr = document.createElement('tr');
  
      // Call the appendTd function with a value
      appendTd(tr, 'Test Value');
  
      // Get the appended td element
      const td = tr.querySelector('td');
  
      // Expectation
      expect(td.innerText).toEqual('Test Value');
    });
  });