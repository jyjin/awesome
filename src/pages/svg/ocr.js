module.exports = async function ocr({
  accessKey = '78baf470be345366bd85b8f9b18bee80',
  secretKey = 'a282de559d6f22d8c49555010f9b98e6',
  fileData,
}) {

  var myHeaders = new Headers();
  myHeaders.append("x-ti-app-id", accessKey);
  myHeaders.append("x-ti-secret-code", secretKey);
  myHeaders.append("Content-Type", "application/octet-stream");
  myHeaders.append("Cookie", "acw_tc=781bad2416460268990603813e10610a6954922acc26b4385c2bc42b13a48c");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: fileData,
    redirect: 'follow'
  };

  return new Promise((resolve, reject) => {
    fetch("https://api.textin.com/robot/v1.0/api/text_recognize_3d1?format_whole_text=1", requestOptions)
      .then(response => response.text())
      .then(result => {
        let ocrResult = JSON.parse(result)
        console.log('fetch ocr data == ', ocrResult)
        if (ocrResult?.code === 200) {
          resolve(ocrResult)
        } else {
          console.error('fetch ocr error == ', ocrResult)
          reject(ocrResult)
        }
        resolve(ocrResult)
      })
      .catch(error => {
        console.log('error', error)
        reject(error)
      });
  })

}
