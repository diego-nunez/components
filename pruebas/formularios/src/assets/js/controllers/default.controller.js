var includeLinkAssets = function(callback){
    var containerAssets = document.getElementsByClassName('DS__container--assets'),
        relTags = {
            'link':{
                'type': 'text/css',
                'rel': 'stylesheet',
                'attr':'href',
                'parentTag': 'head'
            },
            'script':{
                'type': 'text/javascript',
                'rel': '',
                'attr':'src',
                'parentTag': 'body'
            }
        };
    [...containerAssets].forEach((item, indexa)=>{
        
        var containerHtml = item.innerHTML,
            patternToChange = containerHtml.match( /\{\{([^ \{\}])+\}\}/g ),
            regX = /[\{\{\}\}]*/g,
            regType = /[\[\[\]\]]*/g,
            elementType = containerHtml.match(/\[\[([^ \{\}])+\]\]/g);

            patternToChange.forEach((element,index) =>{
                let elementToReplace = patternToChange[index].replace(regX,'').replace(elementType[index],''),
                    elementCleanType = elementType[index].replace(regType,''),
                    parentElement = document.getElementsByTagName(relTags[elementCleanType]['parentTag'])[0];
               
                    let createdTag = document.createElement(elementCleanType);
                        if (elementCleanType != 'script'){
                            createdTag.type = relTags[elementCleanType]['type'];
                            createdTag.rel = relTags[elementCleanType]['rel'];
                        }

                        createdTag.setAttribute(relTags[elementCleanType]['attr'], elementToReplace);
                        parentElement.appendChild(createdTag)
                    
            })
    })

    callback();
}


includeLinkAssets(function(){
    let loader = document.getElementsByClassName('CE__loader ');
    setTimeout(function(){loader[0].classList.add('CE__loader--hidden')},300)
   //loader[0].classList.add('CE__loader--hidden');
    
});

