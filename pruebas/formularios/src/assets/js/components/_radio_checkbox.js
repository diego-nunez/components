export function radio_checkbox(param) {
    class customizeEachSelect{
        constructor(){

            // Para mandar a llamar las funcionalidades
            this.functionalities = new checkFunctionalities();
        }
        createCheck(){
            var allCheckboxElements = document.querySelectorAll('[type="checkbox"]'),
                allRadioElements =  document.querySelectorAll('[type="radio"]'),
                allCheckElements = [...allCheckboxElements,...allRadioElements];
                
            const excludeClass = param.exclude;

                // para crrear los elementos checkbox y radio buttons
                allCheckElements.forEach(item=>{
                    // si no contiene la clase que excluye los items a crear
                    if(!item.classList.contains((excludeClass != '')? excludeClass: '')){

                        var idElement = item.getAttribute('id'),
                            labelElement = document.querySelector('[for="'+idElement+'"]'),
                            labelText = labelElement.innerHTML,
                            checkElement = '';
                            item.classList.add('CE-check__element--d-none');

                            //se crea la estructura custom
                            checkElement = `<span class="CE-check__element--container"><span class="CE-check__element CE-check__${item.getAttribute('type')}"></span></span>
                            <span class="CE-check__label">${labelText}</span>`;
                            
                            labelElement.textContent = '';
                            labelElement.appendChild(item);
                            labelElement.innerHTML += checkElement;  
                            labelElement.classList.add('CE-check');

                            this.functionalities.checkFunctionality(labelElement, idElement);
                    }
                })
                
            
        }
       
    }
    class checkFunctionalities{
        checkFunctionality(element, id){
            
            element.querySelector('#'+id).onchange = function(e){
                var inputCheck = e.target,
                    inputCheckState = inputCheck.checked,
                    inputCheckType = inputCheck.getAttribute('type'),
                    parentElement, name;

                    if(inputCheckType == 'radio'){
                        parentElement = element.closest('form'),
                        name = inputCheck.getAttribute('name');

                        [...parentElement.querySelectorAll('[name="'+name+'"]')].forEach(item=>{
                            item.closest('label').classList.remove('CE-check--checked')
                        })
                        if(inputCheckState == true) element.classList.add('CE-check--checked')
                    }else{
                        (inputCheckState == true) ? element.classList.add('CE-check--checked') : element.classList.remove('CE-check--checked')
                    }
                
            }
        }
    }
    var radioCheckboxItems = new customizeEachSelect();
    radioCheckboxItems.createCheck();
}