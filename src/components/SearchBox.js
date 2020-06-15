import React, { Component } from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';
import "./SearchBox.css"

class SearchBox extends Component{
	render(){
		const { isFocused , onFocus , onBlur } = this.props;
		
		if(isFocused===true){
		return(
<div className="SearchBox">
<input onFocus={onFocus} onBlur={onBlur} type="text" placeholder="Type something to search ..." />

</div>
			)
		}
		else{
	return(
<div className="SearchBox">
<input onFocus={onFocus} onBlur={onBlur} type="text" placeholder="Type something to search ..." />
<div className="search"><Icon icon={searchOutlined} color="black" width="40" height="40" /></div>
</div>
			)
		}
	}
}
export default SearchBox