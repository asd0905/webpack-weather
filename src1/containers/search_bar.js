import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions";

class SearchBar extends Component {
    constructor(pros) {
        super(pros);

        this.state = {term: ''};

        // this.setState에러를 해결하기 위해서
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // 이대로 실행하면 setState를 찾을 수 없다는 에러가 발생
        this.setState({term: event.target.value});
    }

    /*onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }*/

    onFormSubmit(event) {
        event.preventDefault();

        // 날씨 데이터를 가져와야 한다.
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="flex justify-center items-stretch mt-3">
                <input
                    type="text"
                    placeholder="당신이 좋아하는 도시의 5일간의 날씨를 알아보세요"
                    className="border-2 w-1/2 pl-3 pr-3"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="flex-initial">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">검색</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    // 액션 생성장 fetchWeather를 this.props에 넣어주고 이를 실행할 때마다
    // dispatch와 함께 액션이 반환된다.
    // dispatch는 급파한다는 의미를 가지고 있듯이 액션을 전체 리듀서에게 보내준다.
    return bindActionCreators({fetchWeather}, dispatch);
}

// param 순서 (글로벌 어플리케이션 스테이트를 props로 맵핑해주는 함수, 액션생성자를 props로 맵핑해주는 함수)
export default connect(null, mapDispatchToProps)(SearchBar);
