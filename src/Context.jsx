import { createContext } from "react"  // createContext 함수 불러오기

// context안에 사용할 정보 저장
export const Context = createContext({
    pathObjects : 
        {
            0 : {target: "svg1", pathName: "path1"},
            1 : {target: "svg2", pathName: "path2"},
        },   
})