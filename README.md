# 데이터과학 수업자료

데이터 수집·정리·시각화, API 활용, AI 앱 제작을 위한 실습 웹 자료입니다. 원본 자료를 수업용으로 수정했으며, 사용 허락과 출처 표시 조건을 준수합니다.

## 페이지 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 수업 주제와 실습 순서 |
| `prep.html` | 계정 및 실습 환경 준비 |
| `step1.html` | 인구·고령화 지도 |
| `step2.html` | 박스오피스 API |
| `step3.html` | AI 채팅앱 |
| `step4.html` | 여러 페이지로 통합 |
| `extra.html` | 확장 활동 |
| `glossary.html` | 용어 사전 |
| `gallery/` | 결과물 갤러리 및 제출 |
| `intro-keynote.html`, `onai-nonai-keynote.html` | 참고 발표자료로 보존 |

원본 자료: https://github.com/greatsong/vibe1

## GitHub Pages

저장소의 **Settings → Pages**에서 배포할 브랜치와 폴더를 설정합니다. 일반적으로 `main` 브랜치와 `/(root)` 폴더를 사용합니다.

## 작품 갤러리 데이터베이스

갤러리는 원본 운영자의 데이터베이스와 연결되지 않도록 설정을 비워 두었습니다. 실제 제출물을 저장하려면 본인 Supabase 프로젝트를 만들고 `gallery/schema.sql`을 실행한 뒤, `gallery/config.js`에 Project URL과 공개용 publishable key를 설정하세요. 자세한 내용은 `gallery/SETUP.md`를 참고하세요. 설정 전에는 데모 모드이며 제출·피드백은 저장되지 않습니다.

**주의:** `service_role` 또는 secret 키를 웹 파일에 입력하지 마세요. 갤러리 제출 정보는 공개된다는 점도 이용자에게 안내해야 합니다.
