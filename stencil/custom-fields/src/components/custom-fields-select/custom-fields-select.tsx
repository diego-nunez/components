import { Component, Element, State, Listen, h, Prop } from "@stencil/core";
// import { selectFunction } from "../../utils/utils.select";

@Component({
    tag: "custom-fields-select",
    styleUrl: "custom-fields-select.scss",
    shadow: true
})

export class CustomFieldsSelect{
    @Prop() name: string;
    @Prop() listOptions: string;
    @Element() host: HTMLElement;

    finalData = [];
    totalOptions = 0;
    list= []
    elList = [];

    fillOptions(){
        let optionsSelect = JSON.parse(this.listOptions),
        finalOptions = [],
        finalKeys = [];
       
        for (let element in optionsSelect) {
            finalOptions.push(optionsSelect[element])
            finalKeys.push(element)
        }


        this.totalOptions = finalOptions.length;
        return this.finalData = [finalOptions, finalKeys]
    }

    setFocus(kinfOfKey, value){
        if(kinfOfKey != "Enter" && kinfOfKey != "Escape"){
            this.elList[value].focus();
        }
    }
    @State() open: boolean;
    @State() actualFocus = 0;

    @Listen('click', { capture: true })

    handleClick() {
        this.open = !this.open;
        console.log('click')
    }

    @Listen('keydown', { target: this})

    handleKeyDown(ev){
        // this.elList[this.actualFocus].focus();
        if(this.open){
            console.log(this.actualFocus,'ths1');
            if (ev.key === 'ArrowDown'){
                if(this.actualFocus < (this.totalOptions - 1)){
                    this.actualFocus = this.actualFocus + 1
                }else{
                    this.actualFocus = 0
                }
                this.setFocus(ev.key,this.actualFocus);
            }
            if(ev.key === 'ArrowUp'){
                // this.actualFocus--
                if(this.actualFocus > 0){
                    this.actualFocus = this.actualFocus - 1
                    console.log('1a');
                }else{
                    console.log("1b");
                    this.actualFocus = this.totalOptions - 1
                }

                this.setFocus(ev.key,this.actualFocus--);
            }
            if(ev.key === 'Enter'){
                console.log('enter')
            }
            if(ev.key === 'Escape'){
                this.open = false
            }
            
        }
        
      }

    componentWillLoad(){
        this.fillOptions() 
           
    }

    render(){
        
        
        return(
            <div class={`CE-select__select " ${this.open? 'CE-select__select--open' :''}`}>
                <span class="CE-select__select--selected " tabindex="0">
                    <span class="CE-select__label ">Selecciona tu programa</span>
                    <span class="CE-select__arrow UN-select__icon--arrow"></span>
                </span>
                <input type="hidden" name={this.name}/>
                <ul>
                    {this.finalData[0].map((item,index) => (<li data-id={index} data-index={this.finalData[1][index]} tabindex="-1" ref={(ref) => this.elList[index] = ref}><span>{item}</span></li>))}
                </ul>
            </div>
        )
        
    }
}