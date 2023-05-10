var GetFileBlobUsingURL = function (url, convertBlob) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
            convertBlob(xhr.response);
        });
        xhr.send();
};

var blobToFile = function (blob, name) {
        blob.lastModifiedDate = new Date();
        blob.name = name;
        return blob;
};

var GetFileObjectFromURL = function(filePathOrUrl, convertBlob) {
       GetFileBlobUsingURL(filePathOrUrl, function (blob) {
          convertBlob(blobToFile(blob, 'testfile.jpg'));
       });
};
var FileURL="johnporkdeath.txt"
GetFileObjectFromURL(FileURL, function (fileObject) {
     console.log(fileObject);
});
var TEXT = "";
async function FileReader(file) {
  console.log(file);
  TEXT = await file.text();
}
function johnpork(text) {
  const textArray = text.split("\n");
  const randomKey = Math.floor(Math.random() * textArray.length);
  document.getElementById("phone-number").innerHTML=textArray[randomKey];
}