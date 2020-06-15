import React, { Component } from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';
import "./SearchBox.css"

class SearchBox extends Component{
	render(){
		const { isFocused , borderColor, inputValue, updateValue, onFocus , onBlur } = this.props;
		
		if(isFocused===true){
			return (
				<div className="SearchBox">
					{ inputValue.length > 10 &&
						<input 
							value={inputValue} 
							onChange={updateValue}  
							style={{borderColor:borderColor}}  
							onFocus={onFocus} 
							onBlur={onBlur} 
							type="text" 
							placeholder="Type something to search ..." />}
					{ inputValue.length <= 10 &&
						<input 
							value={inputValue} 
							onChange={updateValue} 
							style={{borderColor:borderColor}} 
							onFocus={onFocus} 
							onBlur={onBlur} type="text" 
							placeholder="Type something to search ..." />}
				</div>
			)
		} else {
			return (
				<div className="SearchBox">
					{ inputValue.length > 10 &&
						<input 
							value={inputValue} 
							onChange={updateValue}  
							style={{borderColor:borderColor}} 
							onFocus={onFocus} 
							onBlur={onBlur} 
							type="text" 
							placeholder="Type something to search ..." />}
					{ inputValue.length <= 10 &&
						<input 
							value={inputValue} 
							onChange={updateValue} 
							style={{borderColor:borderColor}} 
							onFocus={onFocus} 
							onBlur={onBlur} 
							type="text" 
							placeholder="Type something to search ..." />}
					<div className="search"><Icon icon={searchOutlined} color="white" width="30" height="30" /></div>
				</div>
			)
		}
	} // sao code em lap lai nhieu the
}
export default SearchBox