import { select } from '../components/_select.js';
import { radio_checkbox } from '../components/_radio_checkbox.js';
console.log('explorer');
select({
    "exclude": 'noSelected'
});

radio_checkbox({
    "exclude": 'noSelected'
})


var showPass = function(){
    var button = document.getElementsByClassName('UN-input__icon--password'),
        show = false;
    button[0].onclick = function(e){
        var siblingInput = e.target.parentNode.querySelector('input');

        if(show){
            siblingInput.setAttribute('type','password');
            show = false
        }else{
            siblingInput.setAttribute('type','text');
            show = true
        }
    }
}

showPass();