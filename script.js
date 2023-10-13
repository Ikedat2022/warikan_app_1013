document.getElementById('calculator').addEventListener('submit', function (event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止
    console.log('JavaScript呼び出し成功');
    let toBeAddingAmount = Number(document.getElementById("toBeAddingAmount").value);
    if (toBeAddingAmount == null || toBeAddingAmount == 0){
      alert('（追加する金額が）入ってねえんだよこの野郎');
    } else {
      let beforeAddedTotalAmount = Number(document.getElementById("totalAmount").value);
      let beforeAddedAPayTotalAmount = Number(document.getElementById("aPayTotalAmount").value);
      let beforeAddedBPayTotalAmount = Number(document.getElementById("bPayTotalAmount").value);
      let addTotalAmount = toBeAddingAmount + beforeAddedTotalAmount;
      console.log('合計金額：' + addTotalAmount);
      document.getElementById("totalAmount").value = addTotalAmount;
  
      let beforeAddedAPaymentToAAmount = Number(document.getElementById("aPaymentToAAmount").value);
      let beforeAddedAPaymentToBAmount = Number(document.getElementById("aPaymentToBAmount").value);
      let beforeAddedBPaymentToAAmount = Number(document.getElementById("bPaymentToAAmount").value);
      let beforeAddedBPaymentToBAmount = Number(document.getElementById("bPaymentToBAmount").value);

      if (document.getElementById("aPayment").checked) {
        console.log('Aが支払った金額' + toBeAddingAmount);
        let addAPayTotalAmount = toBeAddingAmount + beforeAddedAPayTotalAmount;
        console.log('合計金額：' + addTotalAmount);
        document.getElementById("aPayTotalAmount").value = addAPayTotalAmount;
        if(document.getElementById("toAB").checked){
          let aToAPaymentAmount = Math.ceil(beforeAddedAPaymentToAAmount + toBeAddingAmount / 2);
          let aToBPaymentAmount = Math.ceil(beforeAddedAPaymentToBAmount + toBeAddingAmount / 2);
          console.log('AがAに支払った合計金額：' + aToAPaymentAmount);
          console.log('AがBに支払った合計金額：' + aToBPaymentAmount);
          document.getElementById("aPaymentToAAmount").value = aToAPaymentAmount;
          document.getElementById("aPaymentToBAmount").value = aToBPaymentAmount;
        } else {
          let aToBPaymentAmount = beforeAddedAPaymentToBAmount + toBeAddingAmount;
          console.log('AがBに支払った合計金額：' + aToBPaymentAmount);
          document.getElementById("aPaymentToBAmount").value = aToBPaymentAmount;
        } 
      } else {
        console.log('Bが支払った金額' + toBeAddingAmount);
        let addBPayTotalAmount = toBeAddingAmount + beforeAddedBPayTotalAmount;
        console.log('合計金額：' + addBPayTotalAmount);
        document.getElementById("bPayTotalAmount").value = addBPayTotalAmount;
        if(document.getElementById("toAB").checked){
          let bToAPaymentAmount = Math.ceil(beforeAddedBPaymentToAAmount + toBeAddingAmount / 2);
          let bToBPaymentAmount = Math.ceil(beforeAddedBPaymentToBAmount + toBeAddingAmount / 2);
          console.log('BがAに支払った合計金額：' + bToAPaymentAmount);
          console.log('BがBに支払った合計金額：' + bToBPaymentAmount);
          document.getElementById("bPaymentToAAmount").value = bToAPaymentAmount;
          document.getElementById("bPaymentToBAmount").value = bToBPaymentAmount;
        } else {
          let bToAPaymentAmount = beforeAddedBPaymentToAAmount + toBeAddingAmount;
          console.log('BがAに支払った合計金額：' + bToAPaymentAmount);
          document.getElementById("bPaymentToAAmount").value = bToAPaymentAmount;
        } 
      } 
      // 処理終了のため、計算対象金額を削除する
      document.getElementById('KANJOU').value = "";
      document.getElementById('toBeAddingAmount').value = "";
    }
    //  document.getElementById('result').style.display = 'block';
  });
