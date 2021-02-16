export function selectFunction(){
        //Funcionalidad del select
        let allSelects = document.getElementsByClassName('CE-select__select');
        console.log(allSelects);
        // var selectElement = element.getElementsByClassName('CE-select__select--selected'),
        //     ulElement = element.getElementsByTagName('ul'),
        //     listElement = ulElement[0].getElementsByTagName('li'),
        //     actualFocus = -1;

        // selectElement[0].addEventListener('click', (e) => {
        //     // se agrega el click para abrir el select

        //         if(!element.classList.contains('CE-select__select--open')){
        //             element.classList.add('CE-select__select--open');
        //         }else{
        //             element.classList.remove('CE-select__select--open');
        //         }
            
        // })

        // ulElement[0].addEventListener('click', (e) => {
        //     // Si el click es en un elemento de lista manda a llamar la function setValueSalect sino cierra el selecr
        //     var that = e.target;
        //     (that.tagName == 'LI') ? this.setValueSelect(that) : element.classList.remove('CE-select__select--open');
        // });


        // document.onclick = function(e){
        //     // esta function sirve para cerrar el select cuando das click en otro elemento
        //     var allSelects = document.getElementsByClassName('CE-select__select');
        //       [...allSelects].forEach(item=>{
        //         item.classList.remove('CE-select__select--open');
        //       })
        //     if(e.target.closest('.CE-select__select') != null && e.target.tagName != 'LI'){
        //             e.target.closest('.CE-select__select').classList.add('CE-select__select--open')
        //     }
        // };

        // element.addEventListener('keydown', (e) => {

        //     // function para el funcionamiento de las flechas y enter dentro del select

        //     e.preventDefault();
        //     if(e.which == 40){
        //         if(actualFocus < (listElement.length - 1)){
        //              actualFocus++
        //         }else{
        //             actualFocus = 0;
        //         }
        //         element.classList.add('CE-select__select--open');
        //         element.getElementsByTagName('li')[actualFocus].focus()

        //     }else if( e.which == 38){
        //         (actualFocus > 0) ?  actualFocus-- : actualFocus = listElement.length - 1;
        //         element.getElementsByTagName('li')[actualFocus].focus()
        //     }else if( e.which == 13){
        //         this.setValueSelect(element.getElementsByTagName('li')[actualFocus]);
        //     }
        // });
        
    
}