import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const SearchBar = ({ srchBarOpen, handleSrchBar }) => {
	return (
		<div className="srch-bar">
			<div className="srch-bar-wrap">
				<input
					type="text"
					id="keyword"
					placeholder="지역, 숙소명"
					autoComplete="off"
				/>
				<button type="button" className="btn-srch">
					<SearchIcon className="btn-srch-icon" />
					<span className="blind">검색</span>
				</button>
			</div>
			<button className="btn-cancel">
				<CloseIcon
					className="btn-cancel-icon"
					onClick={() => handleSrchBar(srchBarOpen)}
				/>
				<span className="blind">닫기</span>
			</button>
		</div>
	)
}

export default SearchBar
