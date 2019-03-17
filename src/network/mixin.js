/*
 * Created Date: Thursday, January 3rd 2019, 3:24:10 pm
 * Author: WenQing
 * -----
 * Last Modified: Thursday, 3rd January 2019 3:24:10 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

import {POP, NEW, SELL} from "common/const.js";

export const backTopMixin = {

}

export const tabControlMixin = {
  data(){
   return {
     currentType:POP
   }
  },
  methods:{
    tabClick(index){
      switch(index){
        case 0:
        this.currentType = POP;
        break;
        case 1:
        this.currentType = NEW;
        break;
        case 2:
        this.currentType = SELL;
        break;
      }
    }
  }
}
