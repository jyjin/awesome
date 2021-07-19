import { observer } from 'mobx-react';
import { observable } from 'mobx';

const homeStore = observable({
  count: 1,
  setCount(){
    this.count +=1
    console.log('count == ', this.count)
  }
})

export default homeStore