import {FETCH_WEATHER} from "../actions";

export default function(prevState = [], action) {
    if (action.error) {
        return prevState;
    }

    switch(action.type) {
        case FETCH_WEATHER:
            // 배열안에 넣은 이유는 차후에 다른 도시의 데이터도 넣어야하기 때문
            // return [action.payload.data];
            // return prevState.push(action.payload.data)와 같이 다이렉트로 변화하지 않는것은
            // 리액트에서 state를 this.state.aa = bb 처럼 바꾸지 않아야 하는것과 같다
            // return prevState.concat([action.payload.data]);
            return [action.payload.data, ...prevState];
            // ... 뜻은 배열을 전부 가져와 새로운 배열에 넣어준다
        default:
            return prevState;
    }
}
