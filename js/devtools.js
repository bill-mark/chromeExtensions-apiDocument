chrome.devtools.panels.create('ApiMan', '', 'panel.html', function(panel)
{
	

});





// function handle_ajax(data){
//   //console.log('----------------------------------------------------------')
//  // console.log(data)
//   //console.log(data.request.url)
//   const  str = /^(http[s]?:\/\/)([0-9a-z.:-]+)?([/0-9a-z._-]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i
//   let result = str.exec(data.request.url)
//   //console.log(result[3])

//    let api_item = {
//         'request': {
//           'method': '',
//           'url': '',
//           'path':"",
//           'queryString': [],
//           'postData': {
//             'text': ""
//            }
//         },
//         'response': {
//           'content': {}
//         }
//     }

//   api_item.request.method = data.request.method
//   api_item.request.url = data.request.url
//   api_item.request.path = result[3]
  
//   if(data.request.method === 'GET'||data.request.method === 'get'){
//       api_item.request.queryString = data.request.queryString
//   }
//   if(data.request.method === 'POST'||data.request.method === 'post'){
//       api_item.request.postData.text = data.request.postData.text
//   }
  
//   return api_item
// }


