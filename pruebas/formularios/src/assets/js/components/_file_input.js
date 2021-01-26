export function file_input(param) {
    class fileFunctionalities{
       fileFuncionality(){
            var $this = this,
                allFileInput = document.querySelectorAll('input[type="file"]');
                
            allFileInput.forEach(function(element){

                element.addEventListener("change", function(e){
                    var files = e.target.files,
                        labelParent = e.target.closest('label'),
                        template = labelParent.querySelector('.CE-element__template'),
                        resultContainer = document.querySelector(labelParent.getAttribute('data-result')),
                        listElement = document.createElement('ul'),
                        list = '';

                        resultContainer.innerHTML = '';
                    [...files].forEach(item=>{
                        var text = (template != null)? $this.fillTemplate(template.innerHTML, item): item.name;
                        list += `<li>${text}</li>`;
                        
                    })
                    listElement.innerHTML = list;
                    resultContainer.append(listElement);
                });
            })
       }

       readableBytes(bytes) {
        var i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
            return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
        }

        fillTemplate(template, fileObject){
            var patternToChange = template.match( /\{\{([^ \{\}])+\}\}/g ),
                regX = /[\{\{\}\}]*/g,
                newText = template;
            // console.log([...item],'item');
            patternToChange.forEach(item =>{
                var elementToReplace = item.replace(regX,''),
                    finalElementReplace = (elementToReplace == 'size')? this.readableBytes(fileObject[elementToReplace]):fileObject[elementToReplace];
                
                newText = (newText).replace(item,finalElementReplace);
            })
            return newText;
        }
    }
    var fileInputs = new fileFunctionalities();
    fileInputs.fileFuncionality();
}