import { Component } from '@angular/core';
import { home } from '../../assets/variables';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    bg_img:string;
    header:string;
    title:string;
    on_tiping:boolean;
    titles:string[];
    contact_txt:string;

    typing={
        wait:3000,
        type_speed:200,
        rv_speed:100,
        typed_inex:0,
        char_index:0
    }

    constructor() {
        this.bg_img = home.bg_img;
        this.header = home.header;
        this.titles = home.mytitles;
        this.contact_txt = home.contact_me;
        let that = this;
        setTimeout(()=>{
            this.titles_ann(that);
        },1000);
    }
    titles_ann(that){
        that.title = "";
        that.typing.char_index = 0;
        if(that.typing.typed_inex >= that.titles.length){
            that.typing.typed_inex = 0;
        }
        that.type(that);
    }
    type(that){
        let index_char= that.typing.char_index;
        let type_speed= that.typing.type_speed;
        let typed_inex= that.typing.typed_inex;
        let title_tipe = that.titles[typed_inex];
        if(index_char < title_tipe.length){
            that.on_tiping = true;
            that.title += title_tipe[index_char];
            that.typing.char_index++;
            setTimeout(()=>{
                that.type(that);
            },type_speed);
        }else{
            that.on_tiping = false;
            setTimeout(()=>{
                that.removechers(that)
            },that.typing.wait);
        }
    }
    removechers(that){
        let index_char= that.typing.char_index;
        let rv_speed= that.typing.rv_speed;
        if(index_char > 0){
            that.on_tiping = true;
            that.title = that.title.substr(0,index_char);
            let nex_i = index_char - 1;
            that.typing.char_index= nex_i;
            setTimeout(()=>{
                that.removechers(that);
            },rv_speed);
        }else{
            that.typing.typed_inex++;
            that.title = "";
            that.on_tiping = false;
            setTimeout(()=>{
                that.titles_ann(that);
            },that.typing.wait);
        }
    }
}
