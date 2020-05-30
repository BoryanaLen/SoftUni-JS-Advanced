function jsonTable(arr){

    //let arr = JSON.parse(input);
    let outputArr = ["<table>"];
     
    for (let index = 0; index < arr.length; index++) {
        outputArr.push(makeValueRow(JSON.parse(arr[index])));       
    }

     outputArr.push("</table>"); 

    function makeValueRow(obj) { 
        let trValueContent = ['   <tr>'];

        for (const val of Object.values(obj)) {
            trValueContent.push(`      <td>${escapeHtml(val)}</td>`);
        }
        trValueContent.push('   </tr>');
        return trValueContent.join("\n");
    }

    function escapeHtml(value) {
        return value.toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');          
    };

    console.log(outputArr.join('\n'));
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);