const BASE_URL = "https://bootcamp-api.codeit.kr/";

export async function getFolder() {
  const response = await fetch(`${BASE_URL}api/sample/folder`);
  const folderType = await response.json();
  return folderType;
}

export async function getProfile() {
  const response = await fetch(`${BASE_URL}api/sample/user`);
  const userType = await response.json();
  return userType;
}

//이 부분에는 이상없고

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}api/users/1/folders`);
  const folderList = await response.json();
  return folderList;
}

export async function getFolderPageUsers() {
  const response = await fetch(`${BASE_URL}api/users/1`);
  const FolderPageUsers = await response.json();
  return FolderPageUsers;
}

export async function getFolderListAllMenu() {
  const response = await fetch(`${BASE_URL}api/users/1/links`);
  const FolderListAllMenu = await response.json();
  return FolderListAllMenu;
}

// export async function getFolderListMenu() {
//   // const ID = getFolderListAllMenu().data[]
//   const response = await fetch(`${BASE_URL}api/users/1/links?folderId=${ID}`);
//   const FolderListMenu = await response.json();
//   return FolderListMenu;
// }

// /api/users/1/links?folderId={해당 폴더 ID}

//  {
//   "data": [
//     {
//         "id": 211,
//         "created_at": "2023-10-27T02:07:36.330744+00:00",
//         "updated_at": null,
//         "url": "https://tanstack.com/",
//         "title": "TanStack | High Quality Open-Source Software for Web Developers",
//         "description": "Headless, type-safe, powerful utilities for complex workflows like Data Management, Data Visualization, Charts, Tables, and UI Components.",
//         "image_source": "https://tanstack.com/build/_assets/og-FA4FELIQ.png",
//         "folder_id": 16
//     },
//     {
//         "id": 210,
//         "created_at": "2023-10-27T02:04:53.276659+00:00",
//         "updated_at": null,
//         "url": "https://www.naver.com/",
//         "title": "네이버",
//         "description": "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
//         "image_source": "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
//         "folder_id": 16
//     },
//     {
//         "id": 209,
//         "created_at": "2023-10-27T02:04:11.826323+00:00",
//         "updated_at": null,
//         "url": "https://storybook.js.org",
//         "title": "Storybook: Frontend workshop for UI development",
//         "description": "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.",
//         "image_source": "https://storybook.js.org/images/social/og-home.jpg",
//         "folder_id": 16
//     },
//     {
//         "id": 208,
//         "created_at": "2023-10-27T02:03:18.819344+00:00",
//         "updated_at": null,
//         "url": "https://www.codeit.kr",
//         "title": "코드잇 | 코딩, 쉬워질 때도 됐다",
//         "description": "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
//         "image_source": "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
//         "folder_id": 16
//     },
//     {
//         "id": 207,
//         "created_at": "2023-10-27T02:02:12.428986+00:00",
//         "updated_at": null,
//         "url": "https://nextjs.org",
//         "title": "Next.js by Vercel - The React Framework for the Web",
//         "description": "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
//         "image_source": "https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png",
//         "folder_id": 16
//     },
//     {
//         "id": 206,
//         "created_at": "2023-10-27T02:01:01.077624+00:00",
//         "updated_at": null,
//         "url": "https://ko.reactjs.org/",
//         "title": "React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리",
//         "description": "A JavaScript library for building user interfaces",
//         "image_source": "https://reactjs.org/logo-og.png",
//         "folder_id": 16
//     },
//     {
//         "id": 192,
//         "created_at": "2023-06-30T08:07:41.588529+00:00",
//         "updated_at": null,
//         "url": "https://bootcamp-api.codeit.kr/docs",
//         "title": null,
//         "description": null,
//         "image_source": null,
//         "folder_id": null
//     },
//     {
//         "id": 189,
//         "created_at": "2023-06-30T06:55:56.9917+00:00",
//         "updated_at": null,
//         "url": "https://www.google.com/",
//         "title": "Google",
//         "description": "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
//         "image_source": null,
//         "folder_id": null
//     },
//     {
//         "id": 188,
//         "created_at": "2023-06-30T05:15:37.191878+00:00",
//         "updated_at": null,
//         "url": "https://jasonwatmore.com/next-js-13-mongodb-user-registration-and-login-tutorial-with-example-app",
//         "title": "Next.js 13 + MongoDB - User Registration and Login Tutorial with Example App | Jason Watmore's Blog",
//         "description": "In this tutorial we'll go through an example of how to build a simple user registration, login and user management (CRUD) application with Next.js and MongoDB.",
//         "image_source": "https://jasonwatmore.com/_content/images/jason.jpg",
//         "folder_id": null
//     },
//     {
//         "id": 46,
//         "created_at": "2023-06-22T06:40:02.657768+00:00",
//         "updated_at": null,
//         "url": "https://www.codeit.kr/",
//         "title": "코드잇 | 코딩, 쉬워질 때도 됐다",
//         "description": "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
//         "image_source": "https://codeit.kr/static/images/brand/og_tag.png",
//         "folder_id": 40
//     }
// ]
// }
