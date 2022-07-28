import { createContext } from "react"  // createContext 함수 불러오기

// context안에 사용할 정보 저장
export const Context = createContext({
    pathObjects : 
        {
            0 : {target: "content1", pathName: "path1"},
            1 : {target: "content2", pathName: "path2"},
            2 : {target: "content3", pathName: "path3"},
            3 : {target: "content4", pathName: "path4"},
        },   
})