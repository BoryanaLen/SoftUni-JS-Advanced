function fromJSONToHTMLTable(input){

    let arr = JSON.parse(input);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
     
    for (let index = 0; index < arr.length; index++) {
        outputArr.push(makeValueRow(arr[index]));       
    }

     outputArr.push("</table>"); 

    function makeKeyRow(arr) {

        let trKeyContent = ['   <tr>'];

        for (const key of Object.keys(arr[0])) {
            trKeyContent.push(`<th>${escapeHtml(key)}</th>`);
        }
        trKeyContent.push('</tr>');
        return trKeyContent.join('');
    }

    function makeValueRow(obj) { 
        let trValueContent = ['   <tr>'];

        for (const val of Object.values(obj)) {
            trValueContent.push(`<td>${escapeHtml(val)}</td>`);
        }
        trValueContent.push('</tr>');
        return trValueContent.join('');
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
//JSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
//JSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);
//JSONToHTMLTable([{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}])
fromJSONToHTMLTable(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`);
