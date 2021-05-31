let array = [];
        function add(e){
            e.preventDefault();
            let Obj = {
                cardnumber: [ e.target.input1.value, e.target.input2.value,e.target.input3.value,e.target.input4.value],
                cardholder: e.target.cardholder.value,
                expirymonth: e.target.expirymonth.value,
                expiryyear: e.target.expiryyear.value,
                cvv: e.target.cvv.value
        }
        array.push(Obj);
        showRes();
        }
        function showRes (){
            let divHtml = '';
            array.forEach(function(val,index){
            divHtml += ` <ul>
            <li id="list-tag">${val.cardnumber[0]} ${val.cardnumber[1]} ${val.cardnumber[2]} ${val.cardnumber[3]}
            <button onclick='deleteObj(${index})' id="delete-button"> Delete </button>
            </li>
            </ul>`;
            })
            document.getElementById('resultBox').innerHTML = divHtml;
        }
        function deleteObj (index){
		delete array[index];
		array.filter(function(val, index){
			if (val == ""){
                return  false;
            }	
			return true;
		});
        showRes();
		}

        function movetoNext(current, nextFieldID) {  
        if (current.value.length >= current.maxLength) {  
        document.getElementById(nextFieldID).focus();  
        }  
        }  
        function movetoPrev(current, prevFieldID) {  
        if (current.value.length == current.minLength) {  
        document.getElementById(prevFieldID).focus();  
        }  
        }
        document.addEventListener("paste", function(e) {
        if (e.target.type === "text") {
        let data = e.clipboardData.getData('Text');
        data = data.split(' ');
        console.log(data);
        [].forEach.call(document.querySelectorAll("input[class=input]"), (node, index) => {
            node.value = data[index];
            });
        }
        });