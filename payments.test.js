describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '100';
      tipAmtInput.value = '20';
    });
  

  
    it('should not create a new payment object and add it to allPayments on submitPaymentInfo() if inputs are empty', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should not create a new payment object and add it to allPayments on submitPaymentInfo() if bill amount is negative', function () {
      billAmtInput.value = '-100';
      tipAmtInput.value = '20';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should create a new payment object and add it to allPayments on submitPaymentInfo() if tip amount is negative', function () {
      billAmtInput.value = '100';
      tipAmtInput.value = '-20';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100.00');
      expect(allPayments['payment1'].tipAmt).toEqual('-20.00');
      expect(allPayments['payment1'].tipPercent).toEqual(-20);
    });
  
    afterEach(function() {
      // teardown logic
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      billAmtInput.value = '';
    tipAmtInput.value = '';
    });
  });