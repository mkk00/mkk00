import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

let text = 
`
<img src="https://capsule-render.vercel.app/api?type=slice&color=gradient&height=180&text=mkk&fontAlign=70&rotate=13&fontAlignY=25&desc=Frontend%20Developer%20―&descAlign=60&descAlignY=44&section=header" />

## 🙌🏻 Contact Me
[![Tistory](https://img.shields.io/badge/Tistory-100000?style=for-the-badge&logo=tistory&logoColor=white)](https://ramincoding.tistory.com/)
![Naver](https://img.shields.io/badge/it1210@naver.com-03C75A?style=for-the-badge&logo=naver&logoColor=white)
![Gmail](https://img.shields.io/badge/mk1210k@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)

<br/>

## ✒️ Stacks
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![Redux--ToolKit](https://img.shields.io/badge/Redux--ToolKit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
![React_Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![emotion](https://img.shields.io/badge/emotion-C968BC?style=for-the-badge&logo=emotion-styled&logoColor=white)
![styled--components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>

## 📈 Github Status
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=mkk00&layout=donut)](https://github.com/mkk00/github-readme-stats)

<br/>

## Latest Post
`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://ramincoding.tistory.com//rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8')

    console.log('업데이트 완료')
})();