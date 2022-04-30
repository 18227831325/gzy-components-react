
import React, { PureComponent} from 'react';

class Demo extends  PureComponent{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return <div>这是组件三并且新增的测试下 {new Date().getTime()} </div>
  }
}

export default Demo